import { getAllMembers, getTotalMembers } from '@/app/actions/members'
import MembersPagination from '@/components/members-pagination'
import MembersTable, { MembersTableProps } from '@/components/members-table'
import React from 'react'


const ListMemberPage =async () => {
  const members = await getAllMembers() as MembersTableProps
  const totalMembers = await getTotalMembers()
  return (
    <div>
      <h1>Members</h1>
      <MembersTable members={members} />
      <MembersPagination totalMembers={totalMembers} />
    </div>
  )
}

export default ListMemberPage