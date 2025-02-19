import type { Request, Response, NextFunction, RequestHandler } from "express";
import { prisma } from "@repo/database";
import { DonorSchema, z } from "@repo/zod-utils";
import { uploadCloudImage } from "@/services/cloudinary";
import { escapeString } from "@/utils/utils";

export const httpGetDonorsList = async (req: Request, res: Response) => {
  try {
    const donors = await prisma.donor.findMany();
    return res.json({ message: donors });
  } catch (error) {
    return res.json({ error: "Failed to fetch donors." });
  }
};

export const httpGetDonorsPaginated = async (req: Request, res: Response) => {
  try {
    const { page, limit } = req.params;
    const { name, cnic, phone } = req.query;

    const where: any = {};
    if (name) where.name = { contains: name as string, mode: "insensitive" };
    if (cnic) where.cnic = { contains: cnic as string };
    if (phone) where.phone = { contains: phone as string };
    const donors = await prisma.donor.findMany({
      skip: Number(page) * Number(limit),
      take: Number(limit),
      orderBy: {
        createdAt: "desc",
      },
      where,
    });
    const count = await prisma.donor.count({ where });

    res.status(200).json({ donors, count });
  } catch (error) {
    return res.json({ error: "Failed to fetch donors paginated." });
  }
};

export const httpGetDonor = async (req: Request, res: Response) => {
  try {
    const { donorid } = req.params;
    const donor = await prisma.donor.findUnique({
      include: {
        media: true,
      },
      where: {
        id: donorid,
      },
    });
    if (!donor) {
      return res.status(404).json({ error: "Donor not found by id." });
    }

    const totalDonationsAmount = await prisma.donation.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        donorId: donorid,
      },
    });

    const formattedDonor = {
      ...donor,
      profilePic: donor.media[0]?.profilePic || "",
      cnicFront: donor.media[0]?.cnicFront || "",
      cnicBack: donor.media[0]?.cnicBack || "",
      totalDonationsAmount: totalDonationsAmount._sum.amount || 0,
    };
    return res.status(200).json({ message: formattedDonor });
  } catch (error) {
    return res.status(400).json({ error: "Failed to fetch member." });
  }
};

export const httpGetTotalDonors = async (req: Request, res: Response) => {
  try {
    const donors = await prisma.donor.count();
    return res.status(200).json({ message: donors });
  } catch (error) {
    return res.status(400).json({ error: "Failed to fetch total members." });
  }
};

export const httpPostDonor = async (req: Request, res: Response) => {
  const resultSchema = DonorSchema.safeParse(req.body.data);
  if (!resultSchema.success) {
    res.status(400).json({
      error: resultSchema.error.errors, // Adjusted for better error detail
    });

    // return; // Ensure the function returns void here
    return res.status(400).json({ error: "Failed to create donor." });
  }
  const donorCnic = escapeString(req.body.data?.cnic);
  //donor already exists with this cnic

  const donorExists = await prisma.donor.findUnique({
    where: {
      cnic: donorCnic,
    },
  });
  if (donorExists) {
    return res
      .status(400)
      .json({ error: "Donor with this cnic already exists." });
  }
  const data = {
    cnic: donorCnic || "N/A",
    name: req.body.data?.name || "Unknown",
    // profilePic: profilePicURL.url || "",
    // cnicFront: cnicFrontURL.url || "",
    // cnicBack: cnicBackURL.url || "",
    fatherName: req.body.data?.fatherName || null,
    phone: req.body.data?.phone || "Unknown",
    address: req.body.data?.address || "",
    city: req.body.data?.city || "",
    role: req.body.data?.role || "DONOR",
  };
  try {
    const result = await prisma.donor.create({ data });
    const media = await prisma.donorMedia.create({
      data: {
        id: result.id,
        donorId: result.id,
        profilePic: (req.body.data?.profilePic as string) || "",
        cnicFront: (req.body.data?.cnicFront as string) || "",
        cnicBack: (req.body.data?.cnicBack as string) || "",
      },
    });
    if (Number(req.body.data?.amount) > 0) {
      const payment = await prisma.donation.create({
        data: {
          amount: Number(req.body.data?.amount),
          donorId: result.id,
        },
      });
    }
    return res.json({ message: result }); // This returns a Response but does not conflict with void if the function returns after
  } catch (error) {
    return res.status(400).json({ error: "Failed to create donor." });
    // next(error); // Properly pass the error to the next middleware
  }
};

export const httpPayDonor = async (req: Request, res: Response) => {
  const { donorid } = req.params;
  const { amount } = req.body;
  try {
    const result = await prisma.donation.create({
      data: {
        amount: amount,
        donorId: donorid as string,
      },
    });
    return res.status(201).json({ message: result });
  } catch (error) {
    return res.status(400).json({ message: "Failed to add donation." });
  }
};
export const httpUpdateDonor = async (req: Request, res: Response) => {
  const id = req.params.donorid;
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
    const checkCnicDonor = await prisma.donor.findFirst({
      where: {
        cnic: escapeString(cnic),
        id: {
          not: id,
        },
      },
    });
    if (checkCnicDonor) {
      return res
        .status(400)
        .json({ error: "Donor already exists with this CNIC." });
    }
    const updatedData = await prisma.donor.update({
      where: {
        id: id,
      },
      data: {
        cnic: escapeString(cnic) || "",
        fatherName: fatherName || "",
        name: name || "",
        phone: phone || "",
        address: address || "",
        city: city || "",
      },
    });
    await prisma.donorMedia.update({
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
    return res.status(400).json({ error: "Failed to update donor." });
  }
};

export const httpDeleteDonor = async (req: Request, res: Response) => {
  const { donorid } = req.params;

  try {
    const result = await prisma.donor.delete({
      where: {
        id: donorid,
      },
    });
    const mediaExists = await prisma.donorMedia.findFirst({
      where: {
        donorId: donorid,
      },
    });
    if (mediaExists) {
      const media = await prisma.donorMedia.delete({
        where: {
          id: donorid,
        },
      });
    }
    return res.status(201).json({ message: "Donor deleted." });
  } catch (error) {
    return res.status(400).json({ message: "Failed to delete donor." });
    // next(error);
  }
};
