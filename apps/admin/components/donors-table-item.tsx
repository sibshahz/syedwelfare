"use client";
import React from "react";
import { TableCell, TableRow } from "./ui/table";
import { Banknote, EyeIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Donor } from "@repo/zod-utils";
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
import { payDonor } from "@/app/actions/donors";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

const DonationDialog: React.FC<{ id: string; name: string; cnic: string }> = ({
  id,
  name,
  cnic,
}: {
  id: string;
  name: string;
  cnic: string;
}) => {
  const router = useRouter();
  const toast = useToast();
  const [amount, setAmount] = React.useState<number>(0);
  const payDonorAmount = async (id: string) => {
    const result = await payDonor(id, amount);
    if ((result as { error?: boolean }).error) {
      toast.toast({
        title: "Failed to pay",
        description: "Donation cannot be made at the moment.",
      });
    } else {
      toast.toast({
        title: "Donation successful",
        description: `Payment of Rs. ${amount} has been successfully recieved from ${name}.`,
      });
    }
    setAmount(0);
    router.refresh();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded-sm text-xs font-light">
        <Banknote size={16} />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Please enter the amount recieved from the donor.
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex flex-col space-y-1 py-2 font-medium">
              <div className="font-semibold capitalize">Name: {name}</div>
              <div className="font-semibold capitalize">CNIC: {cnic}</div>
            </div>
            <Input
              type="number"
              placeholder="Enter amount"
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => payDonorAmount(id)}
            disabled={amount === 0}
            className="bg-green-500 text-white hover:bg-green-600"
          >
            Add donation
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// const DeleteDialog: React.FC<{ id: string }> = ({ id }: { id: string }) => {
//   const router = useRouter();
//   const toast = useToast();
//   const deleteItem = async (id: string) => {
//     const result = await deleteDonor(id);
//     if ((result as { error?: boolean }).error) {
//       toast.toast({
//         variant: "destructive",
//         title: "Failed to delete",
//         description: "Donor cannot be deleted at the moment.",
//       });
//     } else {
//       toast.toast({
//         variant: "destructive",
//         title: "Deleted",
//         description: "Donor has been successfully deleted.",
//       });
//     }
//     router.refresh();
//   };
//   return (
//     <AlertDialog>
//       <AlertDialogTrigger className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-sm text-xs font-light">
//         <Trash2 size={16} />
//       </AlertDialogTrigger>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>Are you sure?</AlertDialogTitle>
//           <AlertDialogDescription>
//             This action cannot be undone. This will permanently delete donor
//             data.
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel>Cancel</AlertDialogCancel>
//           <AlertDialogAction
//             onClick={async () => deleteItem(id)}
//             className="bg-red-500 text-white hover:bg-red-600"
//           >
//             Continue
//           </AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// };

interface DonorsTableItemProps {
  donor: Donor;
}

const DonorsTableItem: React.FC<DonorsTableItemProps> = ({ donor }) => {
  const { id, cnic, name, fatherName, phone, address, city, profilePic } =
    donor;

  return (
    <>
      <TableRow>
        <TableCell>
          {profilePic && profilePic.length > 0 ?
            <Image
              src={profilePic}
              alt={name || ""}
              width={28}
              height={28}
              className="rounded-full"
            />
          : <div className="w-8 h-8 bg-gray-100 rounded-full" />}
        </TableCell>
        <TableCell>{cnic || ""}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{fatherName}</TableCell>
        <TableCell>{phone}</TableCell>
        <TableCell className="max-w-28 truncate">{address}</TableCell>
        <TableCell>{city}</TableCell>
        <TableCell className="flex space-x-2 items-center">
          <DonationDialog
            id={id as string}
            name={name as string}
            cnic={cnic as string}
          />
          <Link title="View details" href={`/dashboard/donors/details/${id}/1`}>
            <Button variant={"secondary"}>
              <EyeIcon size={16} />
            </Button>
          </Link>
          {/* <Button variant={"destructive"}
          onClick={() => setShow(true)}
          ><Trash2 /></Button> */}
          {/* <DeleteDialog id={id as string} /> */}
        </TableCell>
      </TableRow>
    </>
  );
};

export default DonorsTableItem;
