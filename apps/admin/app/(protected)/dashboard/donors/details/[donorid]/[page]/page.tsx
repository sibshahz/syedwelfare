import {
  getDonorDonationsById,
  getDonorTotalDonationsById,
} from "@/app/actions/donations";
import { getDonorById } from "@/app/actions/donors";
import DonationsTable from "@/components/donations-table";
import DonorDetails from "@/components/donor-details";
import PaginationSelector from "@/components/pagination-selector";
import { Separator } from "@/components/ui/separator";
// import MemberPayments from "@/components/members-payments";
import React from "react";

export const dynamic = "force-dynamic";

const DonorPage = async ({
  params,
}: {
  params: Promise<{ donorid: string; page: string }>;
}) => {
  const donorid = (await params).donorid;
  const page = (await params).page;
  const donor = await getDonorById(donorid);
  const limit = 10;
  const totalDonations = await getDonorTotalDonationsById(donorid);
  const donations = await getDonorDonationsById(donorid, parseInt(page), limit);
  return (
    <div>
      <DonorDetails donor={donor.data} />
      <Separator className="my-4" />
      <h1 className="text-pretty">
        Total Donations made {totalDonations.data}
      </h1>
      <DonationsTable donations={donations.data} />
      <PaginationSelector
        limit={limit}
        total={totalDonations.data}
        page={parseInt(page)}
        postLink={`/dashboard/donors/details/${donorid}`}
        preLink={`/dashboard/donors/details/${donorid}`}
      />
    </div>
  );
};

export default DonorPage;
