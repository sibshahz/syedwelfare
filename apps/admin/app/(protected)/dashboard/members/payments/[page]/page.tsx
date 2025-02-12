import {
  getAllPaymentsPaginated,
  getTotalPayments,
} from "@/app/actions/payments";
import PaginationSelector from "@/components/pagination-selector";
import PaymentsTable from "@/components/payments-table";
import React from "react";

export const dynamic = "force-dynamic";

const Page = async ({ params }: { params: Promise<{ page: string }> }) => {
  // const payments = await getAllPayments();
  const page = (await params).page;

  const limit = 10;
  const paymentsPaginated = await getAllPaymentsPaginated(
    parseInt(page),
    limit
  );
  const totalPayments = await getTotalPayments();
  console.log(JSON.stringify(totalPayments.data));
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-pretty">Payments to beneficiaries</h1>
      <PaymentsTable payments={paymentsPaginated.data} />
      <PaginationSelector
        limit={limit}
        total={totalPayments.data}
        page={parseInt(page)}
        postLink="/dashboard/members/payments"
        preLink="/dashboard/members/payments"
      />
      {/* <DonorsPagination totalDonors={totalDonors} /> */}
    </div>
  );
};

export default Page;
