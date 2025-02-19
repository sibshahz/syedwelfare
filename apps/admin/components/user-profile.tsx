"use client";
import React, { useEffect, useState } from "react";
import { User } from "./auth-provider";
import { getUser, putUpdateUser } from "@/app/actions/auth";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Form,
  FormField,
  FormLabel,
  FormItem,
  FormDescription,
  FormControl,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { z } from "@repo/zod-utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email().optional(),
  oldPassword: z.string().min(8, {
    message: "Password should be atleast 8 characters long.",
  }),
  newPassword: z.string().min(8, {
    message: "Password should be atleast 8 characters long.",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password should be atleast 8 characters long.",
  }),
});

const UserProfile = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser();
      if (response.success) {
        console.log("User data:", response.data);
        setUserData(response.data);
        form.setValue("email", response.data.email);
      } else {
        console.error("Failed to fetch resources:", response.error);
        setUserData(null);
      }
    };
    fetchUser();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (
      form.getFieldState("newPassword").isTouched ||
      form.getFieldState("confirmPassword").isTouched
    ) {
      if (values.newPassword !== values.confirmPassword) {
        form.setError("confirmPassword", {
          type: "manual",
          message: "Passwords do not match",
        });
        return;
      } else {
        const result = await putUpdateUser(values);
        if (result.success) {
          router.back();
        } else {
          form.setError("oldPassword", {
            type: "manual",
            message: result.error,
          });
        }
      }
    }
  }

  return (
    <div>
      {userData && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)} // Attach the handler here
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} disabled />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Old password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="********" />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New-password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="********" />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm-password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="********" />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              // onClick={(e) => {
              //   // e.preventDefault(); // Prevents default form submission
              //   // form.handleSubmit(onSubmit)();
              // }}
              type="submit"
              className="mr-2"
            >
              Update password
            </Button>
            <Button
              onClick={() => {
                // e.preventDefault(); // Prevents default form submission
                // form.handleSubmit(onSubmit)();
                router.back();
              }}
              variant={"secondary"}
              type="button"
            >
              Cancel
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default UserProfile;
