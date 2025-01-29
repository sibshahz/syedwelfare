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
    res.json({ message: "hello get single world" });
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
    profilePic: profilePicURL.url || "default-profile-pic-url",
    cnicFront: cnicFrontURL.url || "default-cnic-front-url",
    cnicBack: cnicBackURL.url || "default-cnic-back-url",
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

export const httpUpdateMember = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json({ message: "hello update member world" });
  } catch (error) {
    next(error);
  }
};

export const httpDeleteMember = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json({ message: "hello delete member world" });
  } catch (error) {
    next(error);
  }
};
