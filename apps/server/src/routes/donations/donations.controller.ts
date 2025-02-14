import type { Request, Response, NextFunction, RequestHandler } from "express";
import { prisma } from "@repo/database";
import { DonationSchema, z } from "@repo/zod-utils";

export const httpGetDonationsList = async (req: Request, res: Response) => {
  try {
    const donations = await prisma.donation.findMany({
      include: {
        donor: {
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
    res.json({ message: donations });
  } catch (error) {
    res.json({ error: "Failed to fetch donations." });
  }
};

// export const httpGetDonorsPaginated = async (req: Request, res: Response) => {
//   try {
//     const { page, limit } = req.query;
//     const donors = await prisma.donor.findMany({
//       skip: Number(page) * Number(limit),
//       take: Number(limit),
//     });
//     res.json({ message: donors });
//   } catch (error) {
//     res.json({ error: "Failed to fetch donors paginated." });
//   }
// };

// export const httpGetDonor = async (req: Request, res: Response) => {
//   try {
//     const { donorid } = req.params;
//     const donor = await prisma.donor.findUnique({
//       where: {
//         id: donorid,
//       },
//     });
//     if (!donor) {
//       res.status(404).json({ error: "Donor not found by id." });
//     }
//     res.status(200).json({ message: donor });
//   } catch (error) {
//     res.status(400).json({ error: "Failed to fetch member." });
//   }
// };

// export const httpGetTotalDonors = async (req: Request, res: Response) => {
//   try {
//     const donors = await prisma.donor.count();
//     res.status(200).json({ message: donors });
//   } catch (error) {
//     res.status(400).json({ error: "Failed to fetch total members." });
//   }
// };

// export const httpPostDonor: RequestHandler = async (req, res, next) => {
//   const resultSchema = DonorSchema.safeParse(req.body.data);
//   if (!resultSchema.success) {
//     res.status(400).json({
//       error: resultSchema.error.errors, // Adjusted for better error detail
//     });
//     // return; // Ensure the function returns void here
//   }
//   const donorExists = await prisma.donor.findUnique({
//     where: {
//       cnic: req.body.data?.cnic,
//     },
//   });
//   if (donorExists) {
//     res.status(400).json({ error: "Donor with this cnic already exists." });
//   }
//   const data = {
//     cnic: req.body.data?.cnic || "N/A",
//     name: req.body.data?.name || "Unknown",
//     // profilePic: profilePicURL.url || "",
//     // cnicFront: cnicFrontURL.url || "",
//     // cnicBack: cnicBackURL.url || "",
//     fatherName: req.body.data?.fatherName || null,
//     phone: req.body.data?.phone || "Unknown",
//     address: req.body.data?.address || "",
//     city: req.body.data?.city || "",
//     role: req.body.data?.role || "MEMBER",
//   };
//   try {
//     const result = await prisma.donor.create({ data });
//     const media = await prisma.donorMedia.create({
//       data: {
//         id: result.id,
//         donorId: result.id,
//         profilePic: (req.body.data?.profilePic as string) || "",
//         cnicFront: (req.body.data?.cnicFront as string) || "",
//         cnicBack: (req.body.data?.cnicBack as string) || "",
//       },
//     });
//     if (Number(req.body.data?.amount) > 0) {
//       const payment = await prisma.donation.create({
//         data: {
//           amount: Number(req.body.data?.amount),
//           donorId: result.id,
//         },
//       });
//     }
//     res.json({ message: result }); // This returns a Response but does not conflict with void if the function returns after
//   } catch (error) {
//     res.status(400).json({ error: "Failed to create donor." });
//     // next(error); // Properly pass the error to the next middleware
//   }
// };

// export const httpPayDonor = async (req: Request, res: Response) => {
//   const { donorid } = req.params;
//   const { amount } = req.body;
//   try {
//     const result = await prisma.donation.create({
//       data: {
//         amount: amount,
//         donorId: donorid as string,
//       },
//     });
//     res.status(201).json({ message: result });
//   } catch (error) {
//     res.status(400).json({ message: "Failed to add donation." });
//   }
// };
// export const httpUpdateDonor = async (req: Request, res: Response) => {
//   const id = req.params.donorid;
//   const { cnic, fatherName, name, phone, address, city, email } = req.body;
//   try {
//     const updatedData = await prisma.member.update({
//       where: {
//         id: id,
//       },
//       data: {
//         cnic: cnic || "",
//         fatherName: fatherName || "",
//         name: name || "",
//         phone: phone || "",
//         address: address || "",
//         city: city || "",
//       },
//     });
//     res.status(202).json({ message: updatedData });
//   } catch (error) {
//     res.status(400).json({ error: "Failed to update donor." });
//   }
// };

// export const httpDeleteDonor = async (req: Request, res: Response) => {
//   const { donorid } = req.params;

//   try {
//     const result = await prisma.donor.delete({
//       where: {
//         id: donorid,
//       },
//     });
//     const media = await prisma.memberMedia.delete({
//       where: {
//         id: donorid,
//       },
//     });
//     res.status(201).json({ message: "Donor deleted." });
//   } catch (error) {
//     res.status(400).json({ message: "Failed to delete donor." });
//     // next(error);
//   }
// };
