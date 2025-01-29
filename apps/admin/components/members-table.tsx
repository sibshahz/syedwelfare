import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Member } from "@repo/zod-utils"
import React from 'react'
import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";

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
    {members.map((member, index) => (
      <TableRow key={index}>
        <TableCell>{member.cnic}</TableCell>
        <TableCell>{member.name}</TableCell>
        <TableCell>{member.fatherName}</TableCell>
        <TableCell>{member.phone}</TableCell>
        <TableCell className="max-w-28 truncate">{member.address}</TableCell>
        <TableCell>{member.city}</TableCell>
        <TableCell>{member.email}</TableCell>
        <TableCell className="flex space-x-2">
          <Button variant={"outline"}><Pencil /></Button>
          <Button variant={"destructive"}><Trash2 /></Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

  )
}

export default MembersTable