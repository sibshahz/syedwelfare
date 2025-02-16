import { getTotalDonationsAmount } from "@/app/actions/donations";
import { getTotalDonor } from "@/app/actions/donors";
import { getMembersStats } from "@/app/actions/members";
import { getTotalPaymentsAmount } from "@/app/actions/payments";
import { DonationStats } from "@/components/donation-stats";
import DonorsStats from "@/components/donors-stats";
import MemberStats, { MemberStatsProps } from "@/components/member-stats";
import React from "react";

export const dynamic = "force-dynamic";

const DashboardPage = async () => {
  const memberStats = await getMembersStats();
  const totalDonors = await getTotalDonor();
  const totalPayments = await getTotalPaymentsAmount();
  const totalDonations = await getTotalDonationsAmount();

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <MemberStats {...(memberStats.data as MemberStatsProps)} />
        <DonorsStats totalDonors={totalDonors} />
        <DonationStats
          totalPayments={totalPayments.data}
          totalDonations={totalDonations.data}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
