"use client";
import React from "react";
import { TableCell, TableRow } from "./ui/table";
import {
  EyeIcon,
  // Trash2
} from "lucide-react";
import { Button } from "./ui/button";
import { Member } from "@repo/zod-utils";

import Image from "next/image";
import Link from "next/link";
import PaymentDialog from "./payment-dialog";

// const DeleteDialog: React.FC<{ id: string }> = ({ id }: { id: string }) => {
//   const router = useRouter();
//   const toast = useToast();
//   const deleteItem = async (id: string) => {
//     const result = await deleteMember(id);
//     if ((result as { error?: boolean }).error) {
//       toast.toast({
//         variant: "destructive",
//         title: "Failed to delete",
//         description: "Beneficiary cannot be deleted at the moment.",
//       });
//     } else {
//       toast.toast({
//         variant: "destructive",
//         title: "Deleted",
//         description: "Beneficiary has been successfully deleted.",
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
//             This action cannot be undone. This will permanently delete
//             beneficiary data.
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

interface MembersTableItemProps {
  member: Member;
}

const MembersTableItem: React.FC<MembersTableItemProps> = ({ member }) => {
  const { id, cnic, name, fatherName, phone, address, city, profilePic } =
    member;

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
        <TableCell
          title="Pay to this beneficiary"
          className="flex space-x-2 items-center"
        >
          <PaymentDialog
            id={id as string}
            name={name as string}
            cnic={cnic as string}
          />
          <Link
            title="View details"
            href={`/dashboard/members/details/${id}/1`}
          >
            <Button variant={"secondary"}>
              <EyeIcon size={16} />
            </Button>
          </Link>
          {/* <Link href={`/dashboard/members/edit/${id}`}>
          <Button variant={"outline"}><Pencil size={16} /></Button>
          </Link> */}
          {/* <Button variant={"destructive"}
          onClick={() => setShow(true)}
          ><Trash2 /></Button> */}
          {/* <DeleteDialog id={id as string} /> */}
        </TableCell>
      </TableRow>
    </>
  );
};

export default MembersTableItem;
