import { getMemberById } from "@/app/actions/members"
import { EditMemberForm } from "@/components/edit-member-form"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const memberData = await getMemberById(slug)
  return(
    <EditMemberForm memberData={memberData} />
  )
}
