import type { Request, Response, NextFunction, RequestHandler } from "express";
import { prisma } from "@repo/database";
import { MemberPaymentSchema, z } from "@repo/zod-utils";

export const httpGetPaymentsList = async (req: Request, res: Response) => {
  try {
    const payments = await prisma.memberPayments.findMany({
      include: {
        member: {
          select: {
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

export const httpGetPaymentsById = async (req: Request, res: Response) => {
  try {
    const memberid = req.params.memberid;
    const payments = await prisma.memberPayments.findMany({
      where: {
        memberId: memberid,
      },
      include: {
        member: {
          select: {
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

export const httpDeletePayment = async (req: Request, res: Response) => {
  const { paymentid } = req.params;

  try {
    const result = await prisma.memberPayments.delete({
      where: {
        id: paymentid,
      },
    });
    res.status(201).json({ message: "Payment deleted." });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete payment." });
    // next(error);
  }
};

export const httpUpdatePayment = async (req: Request, res: Response) => {
  const { paymentid } = req.params;
  const { payment } = req.body;

  try {
    const result = await prisma.memberPayments.update({
      where: {
        id: paymentid,
      },
      data: {
        amount: payment,
      },
    });
    res.status(201).json({ message: "Payment updated." });
  } catch (error) {
    res.status(400).json({ error: "Failed to update payment." });
  }
};

export const httpGetTotalPayments = async (req: Request, res: Response) => {
  try {
    const totalPayments = await prisma.memberPayments.count();
    res.status(200).json({ message: totalPayments });
  } catch (error) {
    res.json({ error: "Failed to fetch total payments." });
  }
};

export const httpGetTotalMemberPayments = async (
  req: Request,
  res: Response
) => {
  try {
    const { memberid } = req.params;
    const totalPayments = await prisma.memberPayments.count({
      where: {
        memberId: memberid,
      },
    });
    res.status(200).json({ message: totalPayments });
  } catch (error) {
    res.json({ error: "Failed to fetch total payments." });
  }
};

export const httpGetPaymentsPaginated = async (req: Request, res: Response) => {
  const { page, limit } = req.params;
  try {
    const payments = await prisma.memberPayments.findMany({
      include: {
        member: {
          select: {
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
    res.json({ message: payments });
  } catch (error) {
    res.json({ error: "Failed to fetch donations." });
  }
};

export const httpGetMemberPaymentsPaginated = async (
  req: Request,
  res: Response
) => {
  const { page, limit } = req.params;
  const { memberid } = req.params;
  try {
    const payments = await prisma.memberPayments.findMany({
      include: {
        member: {
          select: {
            name: true,
            cnic: true,
          },
        },
      },
      where: {
        memberId: memberid,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: Number(page) * Number(limit),
      take: Number(limit),
    });
    res.json({ message: payments });
  } catch (error) {
    res.json({ error: "Failed to fetch donations." });
  }
};

export const httpGetTotalPaymentsAmount = async (
  req: Request,
  res: Response
) => {
  try {
    const totalPayments = await prisma.memberPayments.aggregate({
      _sum: {
        amount: true,
      },
    });
    res.status(200).json({ message: totalPayments._sum.amount });
  } catch (error) {
    res.json({ error: "Failed to fetch total payments." });
  }
};
