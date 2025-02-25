"use server";
import { cookies } from "next/headers";

export async function getUserToken() {
  const cookieStore = await cookies(); // No need for `await`
  const token = await cookieStore.get("token");
  return token?.value;
}
// export async function getUserToken() {
//   // const cookieStore = cookies();
//   const cookieStore = await cookies();
//   const token = cookieStore.get("token");
//   return token?.value;
// }
