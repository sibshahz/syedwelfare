import { getPaymentsById } from "@/app/actions/payments";
import { MemberPayment } from "@repo/zod-utils";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { formatDate } from "@/lib/utils";

const MemberPayments = async ({ memberid }: { memberid: string }) => {
  const payments = await getPaymentsById(memberid);
  return (
    <Card className="mt-6 max-h-96 overflow-y-auto">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row justify-between py-3">Payments</div>
        </CardTitle>
        <Separator />
        <CardContent className="py-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Payment date</TableHead>
                <TableHead>Payment amount</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.data.map((payment: MemberPayment) => (
                <TableRow key={payment.id}>
                  <TableCell>{formatDate(payment.createdAt as Date)}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default MemberPayments;
