import { getDonorsPaginated } from "@/app/actions/donors";
import DonorSearchForm from "@/components/donor-search-form";
import DonorsTable from "@/components/donors-table";
import PaginationSelector from "@/components/pagination-selector";
import { Donor } from "@repo/zod-utils";
import React from "react";

export const dynamic = "force-dynamic";
interface DonorResponse {
  success: boolean;
  data: {
    donors: Donor[];
    count: number;
  };
}
const DonorListPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ page: string }>;
  searchParams: Promise<{
    name?: string;
    cnic?: string;
    phone?: string;
  }>;
}) => {
  const limit = 10;
  const page = (await params).page;
  const name = (await searchParams).name;
  const cnic = (await searchParams).cnic;
  const phone = (await searchParams).phone;

  const { data } = (await getDonorsPaginated(
    parseInt(page),
    limit,
    name || "",
    cnic || "",
    phone || ""
  )) as DonorResponse;

  return (
    <div className="flex flex-col gap-4">
      <DonorSearchForm />
      <h1>Donors</h1>
      <DonorsTable donors={data.donors} />
      <PaginationSelector
        limit={limit}
        page={parseInt(page)}
        total={data.count}
        preLink="/dashboard/donors/list"
        postLink="/dashboard/donors/list"
      />
    </div>
  );
};

export default DonorListPage;
