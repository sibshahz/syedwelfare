import type { Request, Response, NextFunction, RequestHandler } from "express";
import { prisma } from "@repo/database";
import { MemberPaymentSchema, z } from "@repo/zod-utils";

export const httpGetPaymentsList = async (req: Request, res: Response) => {
  try {
    const payments = await prisma.memberPayments.findMany({
      include:{
        member:{
          select:{
            name:true,
            cnic:true
          }
        },
      },
      orderBy: {
        createdAt: "desc",
      }
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
        memberId: memberid
      },
      orderBy: {
        createdAt: "desc",
      }
    });
    res.json({ message: payments });
  } catch (error) {
    res.json({ error: "Failed to fetch donations." });
  }
}