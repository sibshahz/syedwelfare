import { getAllMembers } from '@/app/actions/members'
import MembersTable, { MembersTableProps } from '@/components/members-table'
import React from 'react'


const ListMemberPage =async () => {
  const members = await getAllMembers() as MembersTableProps
  return (
    <div>
      <h1>Members</h1>
      <MembersTable members={members} />
    </div>
  )
}

export default ListMemberPage