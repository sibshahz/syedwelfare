import type { Request, Response, NextFunction, RequestHandler } from "express";
import { prisma } from "@repo/database";
import { MemberSchema, z } from "@repo/zod-utils";
import { uploadCloudImage } from "@/services/cloudinary";

export const httpGetMembersList = async (req: Request, res: Response) => {
  try {
    const members = await prisma.member.findMany();
    return res.json({ message: members });
  } catch (error) {
    return res.status(400).json({ error: "Failed to fetch members." });
    // next(error);
  }
};

export const httpGetMembersPaginated = async (req: Request, res: Response) => {
  try {
    const page = req.params.page;
    const limit = req.params.limit;
    const { name, cnic, phone } = req.query;
    const where: any = {};
    if (name) where.name = { contains: name as string, mode: "insensitive" };
    if (cnic) where.cnic = { contains: cnic as string };
    if (phone) where.phone = { contains: phone as string };

    const members = await prisma.member.findMany({
      skip: Number(page) * Number(limit),
      take: Number(limit),
      orderBy: {
        createdAt: "desc",
      },
      where,
    });
    const count = await prisma.member.count({ where });
    res.status(200).json({ members, count });
  } catch (error) {
    // next(error);
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
      return res.status(404).json({ error: "Member not found by id." });
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
    return res.status(200).json({ message: formattedMember });
  } catch (error) {
    return res.status(400).json({ error: "Failed to fetch member." });
  }
};

export const httpGetTotalMembers = async (req: Request, res: Response) => {
  try {
    const members = await prisma.member.count();
    return res.status(200).json({ message: members });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const httpPostMember = async (req: Request, res: Response) => {
  const resultSchema = MemberSchema.safeParse(req.body.data);
  if (!resultSchema.success) {
    res.status(400).json({
      error: resultSchema.error.errors, // Adjusted for better error detail
    });
    // return; // Ensure the function returns void here
    return res.status(400).json({ error: "Failed to create member." });
  }

  // member already exists cnic
  const memberExists = await prisma.member.findFirst({
    where: {
      cnic: req.body.data?.cnic,
    },
  });
  if (memberExists) {
    return res
      .status(400)
      .json({ error: "Member already exists with this CNIC." });
  }

  const data = {
    cnic: req.body.data?.cnic || "N/A",
    name: req.body.data?.name || "Unknown",
    // profilePic: profilePicURL.url || "",
    // cnicFront: cnicFrontURL.url || "",
    // cnicBack: cnicBackURL.url || "",
    fatherName: req.body.data?.fatherName || null,
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
    res.json({ message: result }); // This returns a Response but does not conflict with void if the function returns after
  } catch (error) {
    return res.status(400).json({ error: "Failed to create member." });
    // next(error); // Properly pass the error to the next middleware
  }
};

export const httpPayMember = async (req: Request, res: Response) => {
  const { memberid } = req.params;
  const { amount } = req.body;
  try {
    const result = await prisma.memberPayments.create({
      data: {
        amount: amount,
        memberId: memberid as string,
      },
    });
    return res.status(201).json({ message: result });
  } catch (error) {
    return res.status(400).json({ message: "Failed to pay member." });
  }
};
export const httpUpdateMember = async (req: Request, res: Response) => {
  const id = req.params.memberid;
  const {
    cnic,
    fatherName,
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
    const updatedData = await prisma.member.update({
      where: {
        id: id,
      },
      data: {
        cnic: cnic || "",
        fatherName: fatherName || "",
        name: name || "",
        phone: phone || "",
        address: address || "",
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
    return res.status(202).json({ message: updatedData });
  } catch (error) {
    return res.status(400).json({ error: "Failed to update member." });
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
    const media = await prisma.memberMedia.delete({
      where: {
        id: memberid,
      },
    });
    return res.status(201).json({ message: "Member deleted." });
  } catch (error) {
    return res.status(400).json({ message: "Failed to delete member." });
    // next(error);
  }
};
