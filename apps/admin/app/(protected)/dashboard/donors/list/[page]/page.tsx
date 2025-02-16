import { getDonorsPaginated, getTotalDonor } from "@/app/actions/donors";
import DonorsTable from "@/components/donors-table";
import PaginationSelector from "@/components/pagination-selector";
import { Donor } from "@repo/zod-utils";
import React from "react";

export const dynamic = "force-dynamic";
interface DonorResponse {
  success: boolean;
  data: Donor[];
}
const DonorListPage = async ({
  params,
}: {
  params: Promise<{ page: string }>;
}) => {
  const limit = 10;
  const page = (await params).page;
  const { data } = (await getDonorsPaginated(
    parseInt(page),
    limit
  )) as DonorResponse;
  const totalDonors = await getTotalDonor();
  return (
    <div>
      <h1>Donors</h1>
      <DonorsTable donors={data} />
      <PaginationSelector
        limit={limit}
        page={parseInt(page)}
        total={totalDonors}
        preLink="/dashboard/donors/list"
        postLink="/dashboard/donors/list"
      />
    </div>
  );
};

export default DonorListPage;
