import { getDonorById } from "@/app/actions/donors";
import { EditDonorForm } from "@/components/edit-donor-form";

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const donorData = await getDonorById(slug);
  return <EditDonorForm donorData={donorData.data} />;
}
