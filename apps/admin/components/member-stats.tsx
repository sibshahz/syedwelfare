import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export type MemberStatsProps = {
  totalMembers: number;
  totalPendingMembers: number;
  totalApprovedMembers: number;
  totalRejectedMembers: number;
};
const MemberStats: React.FC<MemberStatsProps> = ({
  totalMembers,
  totalPendingMembers,
  totalApprovedMembers,
  totalRejectedMembers,
}: MemberStatsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Member Stats </CardTitle>
        <div className="flex-1 text-center">
          <div className="text-7xl font-bold tracking-tighter">
            {totalMembers}
          </div>
          <div className="text-[.90rem] uppercase text-muted-foreground">
            Total Members
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-row items-center gap-4 flex-wrap">
        <Card className="bg-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-5xl font-bold tracking-tighter text-green-900">
              {totalApprovedMembers}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-green-700">
              Approved Members
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-yellow-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-5xl font-bold tracking-tighter text-yellow-900">
              {totalPendingMembers}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-yellow-700">
              Pending Members
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-red-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-5xl font-bold tracking-tighter text-red-900">
              {totalRejectedMembers}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-red-700">
              Rejected Members
            </CardDescription>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default MemberStats;
