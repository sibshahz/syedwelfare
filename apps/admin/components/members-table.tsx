import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Member } from "@repo/zod-utils"
import React from 'react'
import MembersTableItem from "./members-table-item";

export interface MembersTableProps extends Member {
  members: Member[];
}

const MembersTable: React.FC<MembersTableProps> = ({ members }) => {
  return (
    <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">CNIC</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Father name</TableHead>
      <TableHead>Phone</TableHead>
      <TableHead>Address</TableHead>
      <TableHead>City</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {members.map((member, index) => {
      return(
      <MembersTableItem key={index} member={member} />
      )
})}
  </TableBody>
</Table>

  )
}

export default MembersTable