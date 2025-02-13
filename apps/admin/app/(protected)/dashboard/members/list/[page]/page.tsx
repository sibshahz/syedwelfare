import {
  getMembersPaginated,

  // getTotalMembers
} from "@/app/actions/members";
import MembersTable from "@/components/members-table";
import React from "react";
import { Member } from "@repo/zod-utils";
import PaginationSelector from "@/components/pagination-selector";
import MemberSearchForm from "@/components/member-search-form";

export const dynamic = "force-dynamic";
interface MemberResponse {
  success: boolean;
  data: {
    members: Member[];
    count: number;
  };
}

const ListMemberPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ name?: string; cnic?: string; phone?: string }>;
}) => {
  const page = (await params).page;
  // const totalMembers = await getTotalMembers();
  const name = (await searchParams).name;
  const cnic = (await searchParams).cnic;
  const phone = (await searchParams).phone;
  const limit = 10;

  const { data } = (await getMembersPaginated(
    parseInt(page),
    limit,
    name || "",
    cnic || "",
    phone || ""
  )) as MemberResponse;
  return (
    <div className="flex flex-col gap-4">
      <MemberSearchForm />
      <h1>Members</h1>
      <MembersTable members={data.members} cnic={""} />
      <PaginationSelector
        page={parseInt(page)}
        limit={limit}
        total={data.count}
        preLink="/dashboard/members/list"
        postLink="/dashboard/members/list"
      />
    </div>
  );
};

export default ListMemberPage;
