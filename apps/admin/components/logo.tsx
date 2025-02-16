import React from "react";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/dashboard">
      <h1 className="text-pretty w-full text-center">
        Syed Welfare Organization
      </h1>
    </Link>
  );
};

export default Logo;
