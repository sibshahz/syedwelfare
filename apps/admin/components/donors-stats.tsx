import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Trophy } from "lucide-react";

const DonorsStats = ({ totalDonors }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Donors Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center w-full">
          <Trophy size={80} className="text-amber-500" />
          <div className="text-7xl font-bold tracking-tighter">
            {totalDonors}
          </div>
          <div className="text-[.90rem] uppercase text-muted-foreground">
            Donors
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DonorsStats;
