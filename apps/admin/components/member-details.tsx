"use client";
import React from "react";
import { Member } from "@repo/zod-utils";
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
import Image from "next/image";
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
import { deleteMember } from "@/app/actions/members";
import { Pencil, Trash2 } from "lucide-react";

type Media = {
  profilePic: string;
  cnicFront: string;
  cnicBack: string;
};

interface MemberType extends Member {
  media: Media[];
}
const MemberDetails = ({ member }: { member: MemberType }) => {
  const DeleteDialog: React.FC<{ id: string }> = ({ id }: { id: string }) => {
    const router = useRouter();
    const toast = useToast();
    const deleteItem = async (id: string) => {
      const result = await deleteMember(id);
      if ((result as { error?: boolean }).error) {
        toast.toast({
          variant: "destructive",
          title: "Failed to delete",
          description: "Beneficiary cannot be deleted at the moment.",
        });
      } else {
        toast.toast({
          variant: "destructive",
          title: "Deleted",
          description: "Beneficiary has been successfully deleted.",
        });
      }
      router.back();
      router.refresh();
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
            <div className="flex flex-row justify-end items-center py-3 gap-2">
              <Button
                onClick={() => {
                  router.push(`/dashboard/members/edit/${member.id}`);
                }}
                variant={"outline"}
              >
                <Pencil size={16} />
              </Button>

              <DeleteDialog id={member.id || ""} />
            </div>
            <div className="flex flex-row justify-between py-3 items-center">
              Member: {member.name}
              {member.husbandName && <div>Husband: {member.husbandName}</div>}
              {member.fatherName && <div>Father: {member.fatherName}</div>}
              {member.cnic && <div>CNIC: {member.cnic}</div>}
            </div>
            {(member.media[0].profilePic ||
              member.media[0].cnicFront ||
              member.media[0].cnicBack) && (
              <Card className="py-3 mb-4">
                <CardContent className="flex flex-wrap flex-row gap-2 items-center justify-between py-0">
                  {member.media[0].profilePic && (
                    <Image
                      src={member.media[0].profilePic}
                      width={250}
                      height={300}
                      alt={`${member.name} profile pic`}
                      className="border-8 rounded-sm border-gray w-56 aspect-square"
                    />
                  )}
                  {member.media[0].cnicFront && (
                    <Image
                      src={member.media[0].cnicFront}
                      width={250}
                      height={300}
                      alt={`${member.name} cnic front`}
                      className="border-8 rounded-sm border-gray w-80 aspect-auto"
                    />
                  )}
                  {member.media[0].cnicBack && (
                    <Image
                      src={member.media[0].cnicBack}
                      width={250}
                      height={300}
                      alt={`${member.name} cnic back`}
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
                  <TableHead>Status</TableHead>
                  <TableHead>Total Payments</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>{member.phone}</TableCell>
                  <TableCell>{member.city}</TableCell>
                  <TableCell>{member.address}</TableCell>
                  {/* <TableCell>{JSON.stringify(member)}</TableCell> */}
                  <TableCell>TOTAL PAYMENTS</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default MemberDetails;
