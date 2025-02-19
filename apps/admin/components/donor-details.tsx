"use client";
import React from "react";
import { Donor } from "@repo/zod-utils";
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
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
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
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import DonationDialog from "./donation-dialog";
import { deleteDonor } from "@/app/actions/donors";

type Media = {
  profilePic: string;
  cnicFront: string;
  cnicBack: string;
};

interface DonorType extends Donor {
  media: Media[];
  totalDonationsAmount?: number;
  // memberStatus?: MemberStatus[];
}
const DonorDetails = ({ donor }: { donor: DonorType }) => {
  // console.log(JSON.stringify(donor.memberStatus));
  // const StatusDialog: React.FC<{ id: string; memberStatus: string }> = ({
  //   id,
  //   memberStatus,
  // }: {
  //   id: string;
  //   memberStatus: string;
  // }) => {
  //   const router = useRouter();
  //   const toast = useToast();
  //   const [status, setStatus] = React.useState(memberStatus || "pending");
  //   const updateStatus = async (id: string) => {
  //     const result = await updateMemberStatus(id, status as string);
  //     if (!result.success) {
  //       toast.toast({
  //         variant: "destructive",
  //         title: "Failed to update",
  //         description: "Member status cannot be updated at the moment.",
  //       });
  //     } else {
  //       toast.toast({
  //         title: "Updated",
  //         description: "Member status has been successfully updated.",
  //       });
  //     }
  //     router.refresh();
  //   };
  //   return (
  //     <AlertDialog>
  //       <AlertDialogTrigger className="bg-gray-800 text-white border shadow-sm py-2 px-4 rounded-sm text-xs font-light">
  //         Change Status
  //       </AlertDialogTrigger>
  //       <AlertDialogContent>
  //         <AlertDialogHeader>
  //           <AlertDialogTitle>Change donor status</AlertDialogTitle>
  //           <AlertDialogDescription>
  //             <Select onValueChange={(value) => setStatus(value)}>
  //               <SelectTrigger className="w-full capitalize">
  //                 <SelectValue placeholder={status} />
  //               </SelectTrigger>
  //               <SelectContent>
  //                 <SelectItem
  //                   value="pending"
  //                   className="text-yellow-800 bg-yellow-300 my-1 hover:bg-yellow-400 hover:text-yellow-900 hover:cursor-pointer"
  //                 >
  //                   Pending
  //                 </SelectItem>
  //                 <SelectItem
  //                   value="approved"
  //                   className="text-green-800 bg-green-300 my-1 hover:bg-green-400 hover:text-green-900 hover:cursor-pointer"
  //                 >
  //                   Approved
  //                 </SelectItem>
  //                 <SelectItem
  //                   value="rejected"
  //                   className="text-red-800 bg-red-300 my-1 hover:bg-red-400 hover:text-red-900 hover:cursor-pointer"
  //                 >
  //                   Rejected
  //                 </SelectItem>
  //               </SelectContent>
  //             </Select>
  //           </AlertDialogDescription>
  //         </AlertDialogHeader>
  //         <AlertDialogFooter>
  //           <AlertDialogCancel>Cancel</AlertDialogCancel>
  //           <AlertDialogAction
  //             onClick={async () => updateStatus(id)}
  //             className="bg-green-500 text-white hover:bg-green-600"
  //           >
  //             Continue
  //           </AlertDialogAction>
  //         </AlertDialogFooter>
  //       </AlertDialogContent>
  //     </AlertDialog>
  //   );
  // };

  const DeleteDialog: React.FC<{ id: string }> = ({ id }: { id: string }) => {
    const router = useRouter();
    const toast = useToast();
    const deleteItem = async (id: string) => {
      const result = await deleteDonor(id);
      if (!result.success) {
        toast.toast({
          variant: "destructive",
          title: "Failed to delete",
          description: "Donor cannot be deleted at the moment.",
        });
      } else {
        toast.toast({
          variant: "destructive",
          title: "Deleted",
          description: "Donor has been successfully deleted.",
        });
      }
      // router.refresh();
      router.push(`/dashboard/donors/list/1`);
    };
    return (
      <AlertDialog>
        <AlertDialogTrigger className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-sm text-xs font-light">
          <Trash2 size={16} />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete
              beneficiary data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
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

  const router = useRouter();
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <div>
              <h1 className="text-2xl font-bold">Member Details</h1>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">
                  Member CNIC: {donor.cnic}
                </h2>
              </div>
              <div className="flex flex-row justify-end items-center py-3 gap-2">
                <DonationDialog
                  disabled={false}
                  id={donor.id || ""}
                  cnic={donor.cnic || ""}
                  name={donor.name || ""}
                />
                <Button
                  onClick={() => {
                    router.push(`/dashboard/donors/edit/${donor.id}`);
                  }}
                  variant={"outline"}
                >
                  <Pencil size={16} />
                </Button>

                <DeleteDialog id={donor.id || ""} />
              </div>
            </div>

            <div className="flex flex-row justify-between py-3 items-center">
              Donor: {donor.name}
              {/* {donor.husbandName && <div>Husband: {donor.husbandName}</div>} */}
              {donor.fatherName && <div>Father: {donor.fatherName}</div>}
              <div>
                {/* <StatusDialog
                  id={donor.id || ""}
                  memberStatus={donor?.memberStatus?.[0]?.status || "pending"}
                /> */}
              </div>
            </div>
            {(donor?.media[0]?.profilePic ||
              donor?.media[0]?.cnicFront ||
              donor?.media[0]?.cnicBack) && (
              <Card className="py-3 mb-4">
                <CardContent className="flex flex-wrap flex-row gap-2 items-center justify-between py-0">
                  {donor.media[0].profilePic && (
                    <Image
                      src={donor.media[0].profilePic}
                      width={250}
                      height={300}
                      alt={`${donor.name} profile pic`}
                      className="border-8 rounded-sm border-gray w-56 aspect-square"
                    />
                  )}
                  {donor.media[0].cnicFront && (
                    <Image
                      src={donor.media[0].cnicFront}
                      width={250}
                      height={300}
                      alt={`${donor.name} cnic front`}
                      className="border-8 rounded-sm border-gray w-80 aspect-auto"
                    />
                  )}
                  {donor.media[0].cnicBack && (
                    <Image
                      src={donor.media[0].cnicBack}
                      width={250}
                      height={300}
                      alt={`${donor.name} cnic back`}
                      className="border-8 rounded-sm border-gray w-80 aspect-auto"
                    />
                  )}
                </CardContent>
              </Card>
            )}
          </CardTitle>
          <Separator />
          <CardContent className="py-3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Phone</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Total Payments</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>{donor.phone}</TableCell>
                  <TableCell>{donor.city}</TableCell>
                  <TableCell>{donor.address}</TableCell>
                  {/* <TableCell
                    className={`font-bold text-base ${
                      (
                        donor?.memberStatus?.[0]?.status ===
                        MemberStatusValues.APPROVED
                      ) ?
                        "text-green-500"
                      : (
                        donor?.memberStatus?.[0]?.status ===
                        MemberStatusValues.REJECTED
                      ) ?
                        "text-red-500"
                      : "text-yellow-500"
                    }`}
                  >
                    {donor?.memberStatus?.[0]?.status || "Pending"}
                  </TableCell> */}
                  <TableCell>Rs. {donor.totalDonationsAmount || 0}/-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DonorDetails;
