import { getAllMembers } from "@/lib/api/member";

export async function getMembers() {
  const members = await getAllMembers();
  return members;
}
