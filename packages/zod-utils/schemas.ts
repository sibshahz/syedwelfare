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
    .regex(/^\d{13}$/, { message: "CNIC must be exactly 13 digits" }),
  name: z.string().optional(), //done
  profilePic: z.string().optional(),
  cnicFront: z.string().optional(),
  cnicBack: z.string().optional(),
  fatherName: z.string().optional(), //done
  phone: z //done
    .string()
    .regex(/^\d{11}$/, { message: "Phone number must be exactly 11 digits" }),
  address: z.string().optional(), //done
  city: z.string().optional(),
  email: z.string().optional(), //done
  role: z.enum(["MEMBER"]).optional(),
});

export type Member = z.infer<typeof MemberSchema>;
