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
    res.json({ message: "hello paginated world" });
  } catch (error) {
    next(error);
  }
};

export const httpGetMember = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const memberId = req.params.memberid;
    const member = await prisma.member.findUnique({
      where: {
        id: memberId,
      },
    });
    res.json({ message: member });
  } catch (error) {
    next(error);
  }
};

export const httpPostMember: RequestHandler = async (req, res, next) => {
  const resultSchema = MemberSchema.safeParse(req.body.data);
  if (!resultSchema.success) {
    res.status(400).json({
      message: resultSchema.error.errors, // Adjusted for better error detail
    });
    return; // Ensure the function returns void here
  }

  const profilePicURL = (await uploadCloudImage(req.body.data.profilePic)) as {
    url: string;
    id: string;
  };
  const cnicFrontURL = (await uploadCloudImage(req.body.data.cnicFront)) as {
    url: string;
    id: string;
  };
  const cnicBackURL = (await uploadCloudImage(req.body.data.cnicBack)) as {
    url: string;
    id: string;
  };
  const data = {
    cnic: req.body.data?.cnic || "N/A",
    name: req.body.data?.name || "Unknown",
    profilePic: profilePicURL.url || "",
    cnicFront: cnicFrontURL.url || "",
    cnicBack: cnicBackURL.url || "",
    fatherName: req.body.data?.fatherName || null,
    phone: req.body.data?.phone || "Unknown",
    address: req.body.data?.address || "",
    city: req.body.data?.city || "",
    email: req.body.data?.email || null,
    role: req.body.data?.role || "MEMBER",
  };
  try {
    const result = await prisma.member.create({ data });
    const media = await prisma.memberMedia.create({
      data: {
        id: result.id,
        profilePicId: profilePicURL.id,
        cnicFrontId: cnicFrontURL.id,
        cnicBackId: cnicBackURL.id,
      },
    });
    res.json({ message: result }); // This returns a Response but does not conflict with void if the function returns after
  } catch (error) {
    next(error); // Properly pass the error to the next middleware
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
        email: email || "",
      },
    });
    res.status(202).json({ message: updatedData });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to update member." + error.message });
  }
};

export const httpDeleteMember = async (req: Request, res: Response) => {
  const id = req.params.memberid;
  try {
    const result = await prisma.member.delete({
      where: {
        id: id,
      },
    });
    const media = await prisma.memberMedia.delete({
      where: {
        id: id,
      },
    });
    return res.status(201).json({ message: "Member deleted." });
  } catch (error) {
    return res.status(400).json({ message: "Failed to delete member." });
    // next(error);
  }
};
