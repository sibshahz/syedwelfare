"use client";
import React from "react";
import { Donation } from "@repo/zod-utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
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
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { CircleEllipsis } from "lucide-react";
import Link from "next/link";
import { deleteDonation, updateDonation } from "@/app/actions/donations";

interface DonationType extends Donation {
  donor: {
    id: string;
    name: string;
    cnic: string;
  };
}
export interface DonationsTableProps {
  donations: DonationType[];
}

const ActionsDropDown = ({ id, donationid, donation, donorName }) => {
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [dropDownOpen, setDropDownOpen] = React.useState(false);
  const EditPaymentDialog: React.FC = () => {
    const [inputDonation, setInputDonation] = React.useState(donation || 0);
    const toast = useToast();
    const router = useRouter();

    const handleUpdateDonation = async (
      donationid: string,
      donation: number
    ) => {
      const result = await updateDonation(donationid, donation);
      if (!result.success) {
        toast.toast({
          variant: "destructive",
          title: "Failed to update",
          description: "Donation record cannot be updated at the moment.",
        });
      } else {
        toast.toast({
          title: "Updated",
          description: "Donation has been successfully updated.",
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
            Edit Donation
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Donation</DialogTitle>
            <DialogDescription>
              <Card className="py-2 px-2">
                <CardContent>
                  <Input
                    type="number"
                    value={inputDonation}
                    onChange={(e) => setInputDonation(parseInt(e.target.value))}
                    defaultValue={inputDonation}
                  />{" "}
                  {/* Use defaultValue to allow user input */}
                  <CardFooter className="mt-4 flex flex-row gap-2 px-0">
                    <Button
                      onClick={() => {
                        handleUpdateDonation(donationid, inputDonation);
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
      const result = await deleteDonation(id);
      if (!result.success) {
        toast.toast({
          variant: "destructive",
          title: "Failed to delete",
          description: "Donation record cannot be deleted at the moment.",
        });
      } else {
        toast.toast({
          variant: "destructive",
          title: "Deleted",
          description: "Donation has been successfully deleted.",
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
            Delete donation
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure to delete donation of Rs. {donation} from donor{" "}
              {donorName}?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              donation.
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
        <DropdownMenuItem asChild className="hover:cursor-pointer text-center">
          <Link href={`/dashboard/donors/details/${id}/1`}>View Donor</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <EditPaymentDialog />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <DeleteDialogPayment id={donationid} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const DonationsTable: React.FC<DonationsTableProps> = ({ donations }) => {
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
          return (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{donation.donor.name}</TableCell>
              <TableCell>{donation.donor.cnic}</TableCell>
              <TableCell>{donation.amount}</TableCell>
              <TableCell>{formatDate(donation.createdAt as Date)}</TableCell>
              <TableCell>
                <ActionsDropDown
                  id={donation.donor.id}
                  donation={donation.amount}
                  donationid={donation.id}
                  donorName={donation.donor.name}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default DonationsTable;
