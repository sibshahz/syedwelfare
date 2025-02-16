import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Member } from "@repo/zod-utils";
import React from "react";
import MembersTableItem from "./members-table-item";

export interface MembersTableProps extends Member {
  members: Member[];
}

const MembersTable: React.FC<MembersTableProps> = ({ members = [] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Profile pic</TableHead>
          <TableHead className="w-[100px]">CNIC</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Father name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Status</TableHead>
          {/* <TableHead>Address</TableHead> */}
          {/* <TableHead>City</TableHead> */}
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members?.map((member, index) => (
          <MembersTableItem key={index} member={member} cnic={""} />
        ))}
      </TableBody>
    </Table>
  );
};

export default MembersTable;
