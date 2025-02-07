import React from 'react'

import { Donation } from '@repo/zod-utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatDate } from '@/lib/utils';
import { Shapes } from 'lucide-react';
import { Button } from './ui/button';

interface DonationType extends Donation{
  donor: {
    name: string
    cnic: string
  }
}
export interface DonationsTableProps {
  donations: DonationType[];
}
const DonationsTable:React.FC<DonationsTableProps> = ({donations}) => {
  return (
        <Table>
  <TableHeader>
    <TableRow>
      <TableHead>Sr. No</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>CNIC</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Donated at</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {donations.map((donation, index) => {
      return(
      <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{donation.donor.name}</TableCell>
        <TableCell>{donation.donor.cnic}</TableCell>
        <TableCell>{donation.amount}</TableCell>
        <TableCell>{formatDate(donation.createdAt as Date)}</TableCell>
        <TableCell><Button variant={'outline'}><Shapes /></Button></TableCell>
      </TableRow>
      )
})}
  </TableBody>
</Table>
  )
}

export default DonationsTable