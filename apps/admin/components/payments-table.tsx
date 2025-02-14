"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { MemberPayment } from "@repo/zod-utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
import { CircleEllipsis } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { deletePayment, updatePayment } from "@/app/actions/payments";
import { Input } from "./ui/input";
import { Card, CardContent, CardFooter } from "./ui/card";

interface MemberPaymentType extends MemberPayment {
  member: {
    name: string;
    cnic: string;
  };
}
export interface PaymentsTableProps {
  payments: MemberPaymentType[];
}

const ActionsDropDown = ({ id, paymentid, payment, memberName }) => {
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [dropDownOpen, setDropDownOpen] = React.useState(false);
  const EditPaymentDialog: React.FC = () => {
    const [inputPayment, setInputPayment] = React.useState(payment || 0);
    const toast = useToast();
    const router = useRouter();

    const handleUpdatePayment = async (paymentid: string, payment: number) => {
      const result = await updatePayment(paymentid, payment);
      if (!result.success) {
        toast.toast({
          variant: "destructive",
          title: "Failed to update",
          description: "Payment record cannot be updated at the moment.",
        });
      } else {
        toast.toast({
          title: "Updated",
          description: "Payment has been successfully updated.",
        });
      }
      setEditOpen(false);
      setDropDownOpen(false);
      router.refresh();
    };
    return (
      <Dialog open={editOpen} onOpenChange={(isOpen) => setEditOpen(isOpen)}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="w-full text-left"
            onClick={(e) => {
              e.stopPropagation(); // Prevent dropdown from closing
              setEditOpen(true);
            }}
          >
            Edit Payment
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Payment</DialogTitle>
            <DialogDescription>
              <Card className="py-2 px-2">
                <CardContent>
                  <Input
                    type="number"
                    value={inputPayment}
                    onChange={(e) => setInputPayment(parseInt(e.target.value))}
                    defaultValue={inputPayment}
                  />{" "}
                  {/* Use defaultValue to allow user input */}
                  <CardFooter className="mt-4 flex flex-row gap-2 px-0">
                    <Button
                      onClick={() => {
                        handleUpdatePayment(paymentid, inputPayment);
                      }}
                      variant={"default"}
                    >
                      Update
                    </Button>
                    <Button
                      variant={"outline"}
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditOpen(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </CardFooter>
                </CardContent>
              </Card>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  };

  const DeleteDialogPayment: React.FC<{ id: string }> = ({ id }) => {
    const router = useRouter();
    const toast = useToast();

    const deleteItem = async (id: string) => {
      const result = await deletePayment(id);
      if (!result.success) {
        toast.toast({
          variant: "destructive",
          title: "Failed to delete",
          description: "Payment record cannot be deleted at the moment.",
        });
      } else {
        toast.toast({
          variant: "destructive",
          title: "Deleted",
          description: "Payment has been successfully deleted.",
        });
      }
      router.refresh();
      setDeleteOpen(false); // Close dialog after action
      setDropDownOpen(false);
    };

    return (
      <AlertDialog
        open={deleteOpen}
        onOpenChange={(isOpen) => setDeleteOpen(isOpen)}
      >
        <AlertDialogTrigger asChild>
          <Button
            variant="destructive"
            className="w-full text-left"
            onClick={(e) => {
              e.stopPropagation(); // Prevent dropdown from closing
              setDeleteOpen(true);
            }}
          >
            Delete payment
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure to delete payment of Rs. {payment} to member{" "}
              {memberName}?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              payment.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeleteOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => deleteItem(id)}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };

  return (
    <DropdownMenu
      open={dropDownOpen}
      onOpenChange={(isOpen) => {
        if (isOpen == false) {
          setDeleteOpen(false);
          setEditOpen(false);
          setDropDownOpen(false);
        }
      }}
    >
      <DropdownMenuTrigger onClick={() => setDropDownOpen(true)} asChild>
        <Button variant="ghost" className="p-2">
          <CircleEllipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="hover:cursor-pointer">
          <Link href={`/dashboard/members/details/${id}/1`}>
            View Beneficiary
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <EditPaymentDialog />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <DeleteDialogPayment id={paymentid} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const PaymentsTable: React.FC<PaymentsTableProps> = ({ payments }) => {
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
          return (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{donation.member.name}</TableCell>
              <TableCell>{donation.member.cnic}</TableCell>
              <TableCell>Rs. {donation.amount}/-</TableCell>
              <TableCell>{formatDate(donation.createdAt as Date)}</TableCell>
              <TableCell className="flex flex-row items-center justify-start">
                <ActionsDropDown
                  id={donation.memberId}
                  payment={donation.amount}
                  paymentid={donation.id}
                  memberName={donation.member.name}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default PaymentsTable;
