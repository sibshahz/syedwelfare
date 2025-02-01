import type { Request, Response, NextFunction, RequestHandler } from "express";
import { prisma } from "@repo/database";
import { MemberSchema, z } from "@repo/zod-utils";
import { uploadCloudImage } from "@/services/cloudinary";

export const httpGetMembersList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const members = await prisma.member.findMany();
    res.json({ message: members });
  } catch (error) {
    next(error);
  }
};

export const httpGetMembersPaginated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { page, limit } = req.query;
    const members = await prisma.member.findMany({
      skip: Number(page) * Number(limit),
      take: Number(limit),
    });
    res.json({ message: members });
  } catch (error) {
    next(error);
  }
};

export const httpGetMember = async (req: Request, res: Response) => {
  try {
    const { memberid } = req.params;
    const member = await prisma.member.findUnique({
      where: {
        id: memberid,
      },
    });
    if (!member) {
      return res.status(404).json({ error: "Member not found by id." });
    }
    res.status(200).json({ message: member });
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch member." });
  }
};

export const httpGetTotalMembers = async (req: Request, res: Response) => {
  try {
    const members = await prisma.member.count();
    res.status(200).json({ message: members });
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch total members." });
  }
};

export const httpPostMember: RequestHandler = async (req, res, next) => {
  const resultSchema = MemberSchema.safeParse(req.body.data);
  if (!resultSchema.success) {
    res.status(400).json({
      error: resultSchema.error.errors, // Adjusted for better error detail
    });
    return; // Ensure the function returns void here
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
    next(error); // Properly pass the error to the next middleware
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
    res.status(201).json({ message: result });
  } catch (error) {
    res.status(400).json({ message: "Failed to pay member." });
  }
};
export const httpUpdateMember = async (req: Request, res: Response) => {
  const id = req.params.memberid;
  const { cnic, fatherName, name, phone, address, city, email } = req.body;
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
