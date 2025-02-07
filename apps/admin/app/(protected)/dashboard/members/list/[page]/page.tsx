
import {  getMembersPaginated, getTotalMembers } from '@/app/actions/members'
import MembersTable from '@/components/members-table'
import React from 'react'
import { Member } from '@repo/zod-utils'
import PaginationSelector from '@/components/pagination-selector'

export const dynamic = 'force-dynamic'
interface MemberResponse{
  success: boolean
  data: Member[]
}
const ListMemberPage =async ({
  params,
}: {
  params: Promise<{ page: string }>
}) => {
  const page = (await params).page
  const totalMembers = await getTotalMembers()
  const limit=10

  const {data} = await getMembersPaginated(parseInt(page),limit) as MemberResponse
  return (
    <div>
      <h1>Members</h1>
      <MembersTable members={data} cnic={''} />
      <PaginationSelector
        page={parseInt(page)}
        limit={limit}
        total={totalMembers}
        preLink="/dashboard/members/list"
        postLink="/dashboard/members/list"
      />
    </div>
  )
}

export default ListMemberPage