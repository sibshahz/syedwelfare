import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Donor } from "@repo/zod-utils"
import React from 'react'
import DonorsTableItem from "./donors-table-item";

export interface DonorsTableProps extends Donor {
  donors: Donor[];
}

const DonorsTable: React.FC<DonorsTableProps> = ({ donors }) => {
  return (
    <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Profile pic</TableHead>
      <TableHead className="w-[100px]">CNIC</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Father name</TableHead>
      <TableHead>Phone</TableHead>
      <TableHead>Address</TableHead>
      <TableHead>City</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {donors.map((donor, index) => {
      return(
      <DonorsTableItem key={index} donor={donor} />
      )
})}
  </TableBody>
</Table>

  )
}

export default DonorsTable