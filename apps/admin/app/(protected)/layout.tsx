"use client";
import { useAuth } from "@/components/auth-provider";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { getUserToken } from "../actions/user";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, setUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const token = await getUserToken();

      if (!user && !token) {
        setUser(null);
        router.replace("/signin");
      }
    };
    getData();
  }, [user]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const token = await getUserToken();

  //     if (user && token) {
  //       return;
  //     } else {
  //       if (
  //         (user == null && token == null) ||
  //         (user == null && token == undefined) ||
  //         token == null ||
  //         token == undefined
  //       ) {
  //         setUser(null);
  //         router.replace("/signin");
  //       }
  //     }
  //   };
  //   getData();
  // }, [user]);
  return <div>{children}</div>;
};

export default AuthLayout;
