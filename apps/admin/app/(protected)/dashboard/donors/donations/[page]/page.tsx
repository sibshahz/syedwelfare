import React from "react";
import {
  getAllDonationsPaginated,
  getTotalDonations,
} from "@/app/actions/donations";
import DonationsTable from "@/components/donations-table";
import PaginationSelector from "@/components/pagination-selector";

export const dynamic = "force-dynamic";

const Page = async ({ params }: { params: Promise<{ page: string }> }) => {
  const page = (await params).page;
  const limit = 10;
  const donations = await getAllDonationsPaginated(parseInt(page), limit);
  const totalDonations = await getTotalDonations();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-pretty">Donations from donors</h1>
      <DonationsTable donations={donations.data} />
      <PaginationSelector
        limit={limit}
        total={totalDonations.data}
        page={parseInt(page)}
        postLink="/dashboard/donors/donations"
        preLink="/dashboard/donors/donations"
      />
    </div>
  );
};

export default Page;
