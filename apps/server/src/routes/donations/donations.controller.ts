import type { Request, Response, NextFunction, RequestHandler } from "express";
import { prisma } from "@repo/database";
import { DonationSchema, z } from "@repo/zod-utils";

export const httpGetDonationsList = async (req: Request, res: Response) => {
  try {
    const donations = await prisma.donation.findMany({
      include: {
        donor: {
          select: {
            id: true,
            name: true,
            cnic: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.json({ message: donations });
  } catch (error) {
    res.json({ error: "Failed to fetch donations." });
  }
};

export const httpGetTotalDonations = async (req: Request, res: Response) => {
  try {
    const { donorid } = req.params;
    const totalDonations = await prisma.donation.count({
      where: {
        donorId: donorid,
      },
    });
    res.status(200).json({ message: totalDonations });
  } catch (error) {
    res.json({ error: "Failed to fetch total payments." });
  }
};

export const httpGetTotalDonationsAmount = async (
  req: Request,
  res: Response
) => {
  try {
    const donations = await prisma.donation.aggregate({
      _sum: {
        amount: true,
      },
    });
    res.json({ message: donations._sum.amount });
  } catch (error) {
    res.json({ error: "Failed to fetch total donations amount." });
  }
};

export const httpGetDonationsById = async (req: Request, res: Response) => {
  try {
    const donorid = req.params.donorid;
    const payments = await prisma.donation.findMany({
      where: {
        donorId: donorid,
      },
      include: {
        donor: {
          select: {
            id: true,
            name: true,
            cnic: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.json({ message: payments });
  } catch (error) {
    res.json({ error: "Failed to fetch donations." });
  }
};

export const httpGetTotalDonorDonations = async (
  req: Request,
  res: Response
) => {
  try {
    const { donorid } = req.params;
    const totalDonations = await prisma.donation.count({
      where: {
        donorId: donorid,
      },
    });
    res.status(200).json({ message: totalDonations });
  } catch (error) {
    res.json({ error: "Failed to fetch total payments." });
  }
};

export const httpGetDonationsPaginated = async (
  req: Request,
  res: Response
) => {
  const { page, limit } = req.params;
  try {
    const donations = await prisma.donation.findMany({
      include: {
        donor: {
          select: {
            id: true,
            name: true,
            cnic: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: Number(page) * Number(limit),
      take: Number(limit),
    });
    res.json({ message: donations });
  } catch (error) {
    res.json({ error: "Failed to fetch donations." });
  }
};

export const httpGetDonorDonationsPaginated = async (
  req: Request,
  res: Response
) => {
  const { page, limit } = req.params;
  const { donorid } = req.params;
  try {
    const donations = await prisma.donation.findMany({
      include: {
        donor: {
          select: {
            id: true,
            name: true,
            cnic: true,
          },
        },
      },
      where: {
        donorId: donorid,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: Number(page) * Number(limit),
      take: Number(limit),
    });
    res.json({ message: donations });
  } catch (error) {
    res.json({ error: "Failed to fetch donations." });
  }
};

export const httpUpdateDonation = async (req: Request, res: Response) => {
  const { donationid } = req.params;
  const { donation } = req.body;

  try {
    const result = await prisma.donation.update({
      where: {
        id: donationid,
      },
      data: {
        amount: donation,
      },
    });
    res.status(201).json({ message: "Donation updated." });
  } catch (error) {
    res.status(400).json({ error: "Failed to update donation." });
  }
};

export const httpDeleteDonation = async (req: Request, res: Response) => {
  const { donationid } = req.params;
  try {
    const result = await prisma.donation.delete({
      where: {
        id: donationid,
      },
    });
    res.status(201).json({ message: "Donation deleted." });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete Donation." });
    // next(error);
  }
};
