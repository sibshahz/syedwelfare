import React from 'react'

import { MemberPayment } from '@repo/zod-utils';
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

interface MemberPaymentType extends MemberPayment{
  member: {
    name: string
    cnic: string
  }
}
export interface PaymentsTableProps {
  payments: MemberPaymentType[];
}
const PaymentsTable:React.FC<PaymentsTableProps> = ({payments}) => {
  return (
        <Table>
  <TableHeader>
    <TableRow>
      <TableHead>Sr. No</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>CNIC</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Paid at</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {payments.map((donation, index) => {
      return(
      <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{donation.member.name}</TableCell>
        <TableCell>{donation.member.cnic}</TableCell>
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

export default PaymentsTable