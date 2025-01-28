"use server";
// import prisma from "@repo/db/client";
// import { hash } from "@node-rs/argon2";
// import { cookies } from "next/headers";
import { cookies } from "next/headers";
// import { lucia } from "../../lib/adapters/lucia_adapter";
// import { cache } from "react";
// import type { Session, User } from "lucia";
// import { redirect } from "next/navigation";
// import { generateIdFromEntropySize } from "lucia";
// import { verify } from "@node-rs/argon2";
// import { hash, verify } from "argon2";
// import { setUserDetails } from "../../lib/localstorage/localStorage";

// export async function addUserTokens(
//   userId: string | null,
//   accesstoken: string | null,
//   refreshtoken: string | null
// ) {
//   const user = await prisma.user.findUnique({
//     where: { id: userId ?? undefined },
//   });
//   if (!user) {
//     return { error: "User not found" };
//   }
//   try {
//     await prisma.user.update({
//       where: { id: userId ?? undefined },
//       data: {
//         accessToken: accesstoken,
//         refreshToken: refreshtoken,
//       },
//     });
//     return { status: 201 };
//   } catch (err) {
//     console.error("Add tokens error:", err);
//     return { status: 503 };
//   }
// }

export async function getUserToken() {
  // const cookieStore = cookies();
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  return token?.value;
}
// export async function signup(data: {
//   // username: FormDataEntryValue;
//   password: FormDataEntryValue;
//   email: FormDataEntryValue;
// }): Promise<{ error?: string }> {
//   try {
//     // const username = data.username;
//     const password = data.password;
//     const email = data.email;

//     // if (
//     //   typeof username !== "string" ||
//     //   username.length < 3 ||
//     //   username.length > 31 ||
//     //   !/^[a-z0-9_-]+$/.test(username)
//     // ) {
//     //   return { error: "Invalid username" };
//     // }

//     if (
//       typeof password !== "string" ||
//       password.length < 6 ||
//       password.length > 255
//     ) {
//       return { error: "Invalid password" };
//     }

//     if (
//       typeof email !== "string" ||
//       email.length < 6 ||
//       email.length > 255 ||
//       !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
//     ) {
//       return { error: "Invalid email" };
//     }

//     // const userExists = await prisma.user.findUnique({
//     //   where: { email },
//     // });

//     // if (userExists) {
//     //   return { error: "Email already exists" };
//     // }

//     const emailExists = await prisma.user.findUnique({
//       where: { email },
//     });

//     if (emailExists) {
//       return { error: "Email already exists" };
//     }

//     const passwordHash = await hash(password);
//     // const passwordHash = await hash(password, {
//     //   memoryCost: 19456,
//     //   timeCost: 2,
//     //   outputLen: 32,
//     //   parallelism: 1,
//     // });

//     const userId = generateIdFromEntropySize(10); // 16 characters long

//     await prisma.user.create({
//       data: {
//         id: userId,
//         // username,
//         email,
//         password_hash: passwordHash,
//       },
//     });

//     const session = await lucia.createSession(userId, {});
//     const sessionCookie = lucia.createSessionCookie(session.id);
//     cookies().set(
//       sessionCookie.name,
//       sessionCookie.value,
//       sessionCookie.attributes
//     );

//     cookies().set("user", userId, sessionCookie.attributes);

//     // Set cookies client-side (only if running in the browser)
//     if (typeof window !== "undefined") {
//       document.cookie = `${sessionCookie.name}=${sessionCookie.value}; path=/; HttpOnly`;
//       document.cookie = `user=${userId}; path=/; HttpOnly`;
//     }

//     return {}; // No error

//     return { error: "" }; // No error
//   } catch (err) {
//     console.error("Signup error:", err);
//     return { error: "An unexpected error occurred." + err };
//   }
// }
// interface LoginData {
//   email: FormDataEntryValue | null;
//   password: FormDataEntryValue | null;
// }

// interface ActionResult {
//   error?: string;
// }

// export async function login(data: LoginData): Promise<{ error?: string }> {
//   try {
//     const { email, password } = data;

//     if (
//       typeof email !== "string" ||
//       email.length < 3 ||
//       email.length > 255 ||
//       !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
//     ) {
//       return { error: "Invalid email" };
//     }

//     if (
//       typeof password !== "string" ||
//       password.length < 6 ||
//       password.length > 255
//     ) {
//       return { error: "Invalid password" };
//     }

//     const existingUser = await prisma.user.findUnique({
//       where: { email: email.toLowerCase() },
//     });

//     if (!existingUser) {
//       return { error: "Incorrect email or password" };
//     }

//     if (existingUser.password_hash === null) {
//       return { error: "Password cannot be null" };
//     }

//     const validPassword = await verify(existingUser.password_hash, password);
//     if (!validPassword) {
//       return { error: "Incorrect email or password" };
//     }

//     const session = await lucia.createSession(existingUser.id, {});
//     const sessionCookie = lucia.createSessionCookie(session.id);

//     // Set cookies server-side
//     cookies().set(
//       sessionCookie.name,
//       sessionCookie.value,
//       sessionCookie.attributes
//     );
//     cookies().set("user", existingUser.id, sessionCookie.attributes);

//     // Set cookies client-side (only if running in the browser)
//     if (typeof window !== "undefined") {
//       document.cookie = `${sessionCookie.name}=${sessionCookie.value}; path=/; HttpOnly`;
//       document.cookie = `user=${existingUser.id}; path=/; HttpOnly`;
//     }

//     return {}; // No error
//   } catch (err) {
//     console.error("Login error:", err);
//     return { error: "An unexpected error occurred." };
//   }
// }

// export const validateRequest = cache(
//   async (): Promise<
//     { user: User; session: Session } | { user: null; session: null }
//   > => {
//     const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
//     if (!sessionId) {
//       return {
//         user: null,
//         session: null,
//       };
//     }

//     const result = await lucia.validateSession(sessionId);
//     // next.js throws when you attempt to set cookie when rendering page
//     try {
//       if (result.session && result.session.fresh) {
//         const sessionCookie = lucia.createSessionCookie(result.session.id);
//         cookies().set(
//           sessionCookie.name,
//           sessionCookie.value,
//           sessionCookie.attributes
//         );
//       }
//       if (!result.session) {
//         const sessionCookie = lucia.createBlankSessionCookie();
//         cookies().set(
//           sessionCookie.name,
//           sessionCookie.value,
//           sessionCookie.attributes
//         );
//       }
//     } catch {}
//     return result;
//   }
// );
// export async function getUserDetails(userId: string) {
//   const user = await prisma.user.findUnique({
//     where: { id: userId },
//   });
//   return user;
// }
// export async function logout(): Promise<ActionResult> {
//   try {
//     const { session } = await validateRequest();
//     if (!session) {
//       return {
//         error: "Unauthorized",
//       };
//     }

//     await lucia.invalidateSession(session.id);

//     const sessionCookie = lucia.createBlankSessionCookie();
//     cookies().set(
//       sessionCookie.name,
//       sessionCookie.value,
//       sessionCookie.attributes
//     );
//     cookies().set("user", sessionCookie.value, sessionCookie.attributes);

//     return redirect("/login");
//   } catch (err) {
//     console.error("Logout error:", err);
//     return { error: "An unexpected error occurred." };
//   }
// }
