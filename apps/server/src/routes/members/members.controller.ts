import type { Request, Response, NextFunction, RequestHandler } from "express";
import { prisma, Status } from "@repo/database";
import { MemberSchema, MemberStatusValues, z } from "@repo/zod-utils";
import { escapeString } from "@/utils/utils";

export const httpGetMembersList = async (req: Request, res: Response) => {
  try {
    const members = await prisma.member.findMany();
    res.status(200).json({ message: members });
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch members." });
    // next(error);
  }
};

export const httpGetMembersPaginated = async (req: Request, res: Response) => {
  try {
    const page = Number(req.params.page) || 0;
    const limit = Number(req.params.limit) || 10;
    const { name, cnic, phone, status } = req.query;

    const where: any = {};
    if (name) where.name = { contains: name as string, mode: "insensitive" };
    if (cnic) where.cnic = { contains: cnic as string };
    if (phone) where.phone = { contains: phone as string };

    // Filter by status if provided
    if (status) {
      where.memberStatus = {
        some: {
          status: status as Status, // Ensure it matches the Status enum
        },
      };
    }

    const members = await prisma.member.findMany({
      skip: page * limit,
      take: limit,
      include: {
        memberStatus: {
          select: {
            status: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      where,
    });

    const count = await prisma.member.count({ where });

    res.status(200).json({ members, count });
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch members paginated." });
  }
};

export const httpGetMember = async (req: Request, res: Response) => {
  try {
    const { memberid } = req.params;
    const member = await prisma.member.findUnique({
      include: {
        media: true,
        memberStatus: true,
      },
      where: {
        id: memberid,
      },
    });

    if (!member) {
      res.status(404).json({ error: "Member not found by id." });
      return;
    }
    const totalPaymentsAmount = await prisma.memberPayments.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        memberId: memberid,
      },
    });
    const formattedMember = {
      ...member,
      profilePic: member.media[0]?.profilePic,
      cnicFront: member.media[0]?.cnicFront,
      cnicBack: member.media[0]?.cnicBack,
      totalPaymentsAmount: totalPaymentsAmount._sum.amount || 0,
    };
    res.status(200).json({ message: formattedMember });
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch member." });
  }
};

export const httpGetTotalMembers = async (req: Request, res: Response) => {
  try {
    const members = await prisma.member.count();
    res.status(200).json({ message: members });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const httpPostMember = async (req: Request, res: Response) => {
  const resultSchema = MemberSchema.safeParse(req.body.data);
  if (!resultSchema.success) {
    // return; // Ensure the function returns void here
    res.status(400).json({ error: "Failed to create member." });
    return;
  }
  const userCnic = escapeString(req.body.data?.cnic);

  // member already exists cnic
  const memberExists = await prisma.member.findFirst({
    where: {
      cnic: userCnic,
    },
  });
  if (memberExists) {
    res.status(400).json({ error: "Member already exists with this CNIC." });
    return;
  }

  const data = {
    cnic: userCnic || "N/A",
    name: req.body.data?.name || "Unknown",
    // profilePic: profilePicURL.url || "",
    // cnicFront: cnicFrontURL.url || "",
    // cnicBack: cnicBackURL.url || "",
    fatherName: req.body.data?.fatherName || null,
    husbandName: req.body.data.husbandName || null,
    phone: req.body.data?.phone || "Unknown",
    address: req.body.data?.address || "",
    city: req.body.data?.city || "",
    role: req.body.data?.role || "MEMBER",
  };
  try {
    const result = await prisma.member.create({ data });
    const media = await prisma.memberMedia.create({
      data: {
        id: result.id,
        memberId: result.id,
        profilePic: (req.body.data?.profilePic as string) || "",
        cnicFront: (req.body.data?.cnicFront as string) || "",
        cnicBack: (req.body.data?.cnicBack as string) || "",
      },
    });
    if (Number(req.body.data?.amount) > 0) {
      const payment = await prisma.memberPayments.create({
        data: {
          amount: Number(req.body.data?.amount),
          memberId: result.id,
        },
      });
    }
    const memberStatus = await prisma.memberStatus.create({
      data: {
        memberId: result.id,
        cnic: userCnic,
      },
    });
    res.json({ message: result }); // This returns a Response but does not conflict with void if the function returns after
  } catch (error) {
    res.status(400).json({ error: "Failed to create member." });
    // next(error); // Properly pass the error to the next middleware
  }
};

export const httpPayMember = async (req: Request, res: Response) => {
  const { memberid } = req.params;
  const { amount } = req.body;
  try {
    const memberExists = await prisma.member.findFirst({
      where: {
        id: memberid as string,
      },
    });
    if (!memberExists) {
      res.status(404).json({ message: "Member not found." });
      return;
    }
    const memberStatusExists = await prisma.memberStatus.findFirst({
      where: {
        memberId: memberid as string,
      },
    });
    if (
      memberStatusExists &&
      memberStatusExists.status !== MemberStatusValues.APPROVED
    ) {
      res.status(400).json({ message: "Member payment is not allowed." });
      return;
    }
    const result = await prisma.memberPayments.create({
      data: {
        amount: amount,
        memberId: memberid as string,
      },
    });
    res.status(201).json({ message: result });
  } catch (error) {
    res.status(400).json({ message: "Failed to pay member." });
  }
};
export const httpUpdateMemberStatus = async (req: Request, res: Response) => {
  const { memberid } = req.params;
  const { status } = req.body;
  try {
    const result = await prisma.memberStatus.updateMany({
      where: {
        memberId: (memberid as string) || "",
      },
      data: {
        status: status.toUpperCase(),
      },
    });
    res.status(201).json({ message: result });
  } catch (error) {
    res.status(400).json({ message: "Failed to update member status." });
  }
};
export const httpUpdateMember = async (req: Request, res: Response) => {
  const id = req.params.memberid;
  const {
    cnic,
    fatherName,
    husbandName,
    name,
    phone,
    address,
    city,
    email,
    cnicFront,
    cnicBack,
    profilePic,
  } = req.body;
  try {
    const checkCnicMember = await prisma.member.findFirst({
      where: {
        cnic: escapeString(cnic),
        id: {
          not: id,
        },
      },
    });
    if (checkCnicMember) {
      res.status(400).json({ error: "Member already exists with this CNIC." });
      return;
    }
    const updatedData = await prisma.member.update({
      where: {
        id: id,
      },
      data: {
        cnic: escapeString(cnic) || "",
        fatherName: fatherName || "",
        name: name || "",
        phone: phone || "",
        address: address || "",
        husbandName: husbandName || "",
        city: city || "",
      },
    });
    await prisma.memberMedia.update({
      where: {
        id: id,
      },
      data: {
        cnicFront: cnicFront || "",
        cnicBack: cnicBack || "",
        profilePic: profilePic || "",
      },
    });
    res.status(202).json({ message: updatedData });
  } catch (error) {
    res.status(400).json({ error: "Failed to update member." });
  }
};

export const httpDeleteMember = async (req: Request, res: Response) => {
  const { memberid } = req.params;

  try {
    const result = await prisma.member.delete({
      where: {
        id: memberid,
      },
    });
    // const media = await prisma.memberMedia.delete({
    //   where: {
    //     id: memberid,
    //   },
    // });
    if (result) {
      res.status(201).json({ message: "Member deleted." });
    }
  } catch (error: any) {
    res.status(400).json({ error: "Failed to delete member." });
    // next(error);
  }
};

export const httpAddMissingStatus = async (req: Request, res: Response) => {
  try {
    const members = await prisma.member.findMany();
    members.forEach(async (member) => {
      let memberStatusExists = await prisma.memberStatus.findFirst({
        where: {
          memberId: member.id,
        },
      });
      if (!memberStatusExists) {
        await prisma.memberStatus.create({
          data: {
            memberId: member.id,
            status: "PENDING",
          },
        });
      }
    });
    res.status(201).json({ message: "Added missing status to members." });
  } catch (error) {
    res.status(400).json({ message: "Failed to add missing status." });
  }
};

export const httpGetMemberStats = async (req: Request, res: Response) => {
  try {
    const totalMembers = await prisma.member.count();
    const totalPendingMembers = await prisma.memberStatus.count({
      where: {
        status: MemberStatusValues.PENDING,
      },
    });
    const totalApprovedMembers = await prisma.memberStatus.count({
      where: {
        status: MemberStatusValues.APPROVED,
      },
    });
    const totalRejectedMembers = await prisma.memberStatus.count({
      where: {
        status: MemberStatusValues.REJECTED,
      },
    });
    // const totalPayments = await prisma.memberPayments.aggregate({
    //   _sum: {
    //     amount: true,
    //   },
    // });
    // const totalPaymentsAmount = totalPayments._sum.amount || 0;
    res.status(200).json({
      totalMembers,
      totalPendingMembers,
      totalApprovedMembers,
      totalRejectedMembers,
    });
  } catch (error) {
    res.status(400).json({ message: "Failed to get member stats." });
  }
};
