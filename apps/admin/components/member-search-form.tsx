"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { BadgeMinus, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const MemberSearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const allParams = Object.fromEntries(searchParams.entries());
  const formSchema = z.object({
    name: z.string().optional(),
    cnic: z.string().optional(),
    phone: z.string().optional(),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: allParams.name || "",
      cnic: allParams.cnic || "",
      phone: allParams.phone || "",
    },
  });

  function onSubmit(data) {
    console.log(data);
    const stringValue = new URLSearchParams(data).toString();
    router.push(`/dashboard/members/list/1//?${stringValue}`);
    router.refresh();
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter name here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cnic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cnic</FormLabel>
                <FormControl>
                  <Input placeholder="Enter cnic without dashes" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Enter phone number here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            <Search />
            Search
          </Button>
          <Button
            type="button"
            onClick={() => {
              form.reset();
              form.resetField("name");
              form.resetField("cnic");
              form.resetField("phone");
              const newUrl = window.location.pathname;
              router.replace(newUrl);
              setTimeout(() => {
                router.refresh();
              }, 100);
            }}
            variant="secondary"
          >
            <BadgeMinus />
            Reset
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default MemberSearchForm;
