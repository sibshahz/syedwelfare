import { getAllMembers, getTotalMembers } from '@/app/actions/members'
import MembersPagination from '@/components/members-pagination'
import MembersTable from '@/components/members-table'
import React from 'react'
import { Member } from '@repo/zod-utils'

const ListMemberPage =async () => {
  const members = await getAllMembers() as Member[]
  const totalMembers = await getTotalMembers()
  return (
    <div>
      <h1>Members</h1>
      <MembersTable members={members} cnic={''} />
      <MembersPagination totalMembers={totalMembers} />
    </div>
  )
}

export default ListMemberPage