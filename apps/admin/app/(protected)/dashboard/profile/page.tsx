import UserProfile from "@/components/user-profile";
import React from "react";

export const dynamic = "force-dynamic";

const Page = () => {
  return (
    <div>
      <h1>Profile</h1>
      <UserProfile />
    </div>
  );
};

export default Page;
