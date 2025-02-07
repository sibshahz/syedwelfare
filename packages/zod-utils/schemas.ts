// packages/zod-utils/schemas.ts
import { z } from "zod";

// Define a custom schema
export const UserSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(["USER", "ADMIN"]).optional(),
});

// Export the inferred type from the schema
export type User = z.infer<typeof UserSchema>;

export const signupSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignupValues = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const MemberSchema = z.object({
  id: z.string().optional(),
  cnic: z //done
    .string()
    .min(13, { message: "CNIC should contain minimum 13 digits." }),
  name: z.string().optional(), //done
  profilePic: z.string().optional(),
  cnicFront: z.string().optional(),
  cnicBack: z.string().optional(),
  amount: z.number().optional(),
  fatherName: z.string().optional(), //done
  phone: z //done
    .string()
    .optional(),
  address: z.string().optional(), //done
  city: z.string().optional(),
  role: z.enum(["MEMBER"]).optional(),
});

export type Member = z.infer<typeof MemberSchema>;

export const DonorSchema = z.object({
  id: z.string().optional(),
  cnic: z //done
    .string()
    .min(13, { message: "CNIC must contain minimum 13 digits." }),
  name: z.string().optional(), //done
  fatherName: z.string().optional(), //done
  amount: z.number().optional(),
  profilePic: z.string().optional(),
  cnicFront: z.string().optional(),
  cnicBack: z.string().optional(),
  phone: z //done
    .string()
    .optional(),
  address: z.string().optional(), //done
  city: z.string().optional(),
  email: z
    .string()
    .email({ message: "Please enter a valid email." })
    .optional(),
  role: z.enum(["DONOR"]).optional(),
});

export type Donor = z.infer<typeof DonorSchema>;

export const DonationSchema = z.object({
  id: z.string().optional(),
  donorId: z.string(),
  amount: z.number(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type Donation = z.infer<typeof DonationSchema>;

export const MemberPaymentSchema = z.object({
  id: z.string().optional(),
  memberId: z.string(),
  amount: z.number(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type MemberPayment = z.infer<typeof MemberPaymentSchema>;

export const MemberMediaSchema = z.object({
  id: z.string().optional(),
  memberId: z.string(),
  profilePic: z.string().optional(),
  cnicFront: z.string().optional(),
  cnicBack: z.string().optional(),
});

export type MemberMedia = z.infer<typeof MemberMediaSchema>;

export const DonorMediaSchema = z.object({
  id: z.string().optional(),
  donorId: z.string(),
  profilePic: z.string().optional(),
  cnicFront: z.string().optional(),
  cnicBack: z.string().optional(),
});

export type DonorMedia = z.infer<typeof DonorMediaSchema>;
