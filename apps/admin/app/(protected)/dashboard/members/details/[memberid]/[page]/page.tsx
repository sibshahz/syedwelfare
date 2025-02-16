import { getMemberById } from "@/app/actions/members";
import {
  getMemberPaymentsById,
  getMemberTotalPaymentsById,
} from "@/app/actions/payments";
import MemberDetails from "@/components/member-details";
import PaginationSelector from "@/components/pagination-selector";
import PaymentsTable from "@/components/payments-table";
import { Separator } from "@/components/ui/separator";
// import MemberPayments from "@/components/members-payments";
import React from "react";

export const dynamic = "force-dynamic";

const MemberPage = async ({
  params,
}: {
  params: Promise<{ memberid: string; page: string }>;
}) => {
  const memberid = (await params).memberid;
  const page = (await params).page;
  const member = await getMemberById(memberid);
  const limit = 10;
  const totalPayments = await getMemberTotalPaymentsById(memberid);
  const payments = await getMemberPaymentsById(memberid, parseInt(page), limit);
  return (
    <div>
      <MemberDetails member={member.data} />
      <Separator className="my-4" />
      <h1 className="text-pretty">Total Payments made {totalPayments.data}</h1>
      <PaymentsTable payments={payments.data} />
      <PaginationSelector
        limit={limit}
        total={totalPayments.data}
        page={parseInt(page)}
        postLink={`/dashboard/members/details/${memberid}`}
        preLink={`/dashboard/members/details/${memberid}`}
      />
    </div>
  );
};

export default MemberPage;
