import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "./ui/separator";

export const DonationStats = ({ totalPayments, totalDonations }) => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-wrap">Donation Stats</CardTitle>
        <div className="flex flex-row gap-2 items-center flex-wrap">
          <div className="flex-1 text-center min-w-96">
            <div className="text-6xl font-medium tracking-tighter break-all text-gray-800">
              <span className="text-2xl text-muted-foreground tracking-wide">
                Rs.
              </span>{" "}
              {totalPayments} /-
            </div>
            <div className="text-[.90rem] uppercase text-muted-foreground">
              Total Paid Donations
            </div>
          </div>
          <Separator orientation="vertical" className="h-52 hidden lg:block" />
          <div className="flex-1 text-center min-w-96">
            <div className="text-6xl font-medium tracking-tighter break-all text-gray-800">
              <span className="text-2xl text-muted-foreground tracking-wide">
                Rs.
              </span>{" "}
              {totalDonations} /-
            </div>
            <div className="text-[.90rem] uppercase text-muted-foreground">
              Total Recieved Donations
            </div>
          </div>
        </div>
      </CardHeader>

      {/* <CardContent className="flex flex-row items-center gap-4 flex-wrap">
        <div>
          <div className="text-6xl font-medium tracking-tighter break-all">
            100
          </div>
          <div className="text-[.90rem] uppercase text-muted-foreground">
            Donors
          </div>
        </div>
      </CardContent> */}
    </Card>
  );
};
