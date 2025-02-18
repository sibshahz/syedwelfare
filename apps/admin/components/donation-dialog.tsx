import React from "react";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
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
import { Banknote } from "lucide-react";
import { payDonor } from "@/app/actions/donors";

const DonationDialog: React.FC<{
  id: string;
  name: string;
  cnic: string;
  disabled: boolean;
}> = ({
  id,
  name,
  cnic,
  disabled = false,
}: {
  id: string;
  name: string;
  cnic: string;
  disabled: boolean;
}) => {
  const router = useRouter();
  const toast = useToast();
  const [amount, setAmount] = React.useState<number>(0);
  const payDonorAmount = async (id: string) => {
    const result = await payDonor(id, amount);
    if (!result.success) {
      toast.toast({
        title: "Failed to donate",
        description: "Donation cannot be made at the moment.",
      });
    } else {
      toast.toast({
        title: "Donation successful",
        description: `Donation of Rs. ${amount} has been successfully made by ${name}.`,
      });
    }
    setAmount(0);
    router.refresh();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        disabled={disabled}
        className={` ${disabled ? "bg-gray-400 hover:bg-gray-400" : "bg-green-400 hover:bg-green-500"} text-white py-2 px-4 rounded-sm text-xs font-light`}
      >
        <Banknote size={16} />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Please enter the amount donated by the Donor.
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
            Donate
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DonationDialog;
