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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { BadgeMinus, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MemberStatusValues } from "@repo/zod-utils";

const FilterForm = () => {
  return (
    <div className="mt-4 flex flex-row justify-between">
      <div className="form-item">
        <Select
        // {...field}
        // onValueChange={(value) => {
        //   form.setValue("status", value);
        // }}
        >
          <SelectTrigger className="w-full capitalize">
            <SelectValue placeholder={"Select display order"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              value={MemberStatusValues.PENDING}
              // className="text-yellow-800 bg-yellow-300 my-1 hover:bg-yellow-400 hover:text-yellow-900 hover:cursor-pointer"
            >
              Newest first
            </SelectItem>
            <SelectItem
              value={MemberStatusValues.APPROVED}
              // className="text-green-800 bg-green-300 my-1 hover:bg-green-400 hover:text-green-900 hover:cursor-pointer"
            >
              Older first
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="form-item">
        <Select
        // {...field}
        // onValueChange={(value) => {
        //   form.setValue("status", value);
        // }}
        >
          <SelectTrigger className="w-full capitalize">
            <SelectValue placeholder={"Select records per page"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              value={"10"}
              // className="text-yellow-800 bg-yellow-300 my-1 hover:bg-yellow-400 hover:text-yellow-900 hover:cursor-pointer"
            >
              10 per page
            </SelectItem>
            <SelectItem
              value={"20"}
              // className="text-green-800 bg-green-300 my-1 hover:bg-green-400 hover:text-green-900 hover:cursor-pointer"
            >
              20 per page
            </SelectItem>
            <SelectItem
              value={"30"}
              // className="text-green-800 bg-green-300 my-1 hover:bg-green-400 hover:text-green-900 hover:cursor-pointer"
            >
              30 per page
            </SelectItem>
            <SelectItem
              value={"40"}
              // className="text-green-800 bg-green-300 my-1 hover:bg-green-400 hover:text-green-900 hover:cursor-pointer"
            >
              40 per page
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="form-item">
        <Select
        // {...field}
        // onValueChange={(value) => {
        //   form.setValue("status", value);
        // }}
        >
          <SelectTrigger className="w-full capitalize">
            <SelectValue placeholder={"Select member status"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              value={MemberStatusValues.PENDING}
              // className="text-yellow-800 bg-yellow-300 my-1 hover:bg-yellow-400 hover:text-yellow-900 hover:cursor-pointer"
            >
              Pending
            </SelectItem>
            <SelectItem
              value={MemberStatusValues.APPROVED}
              // className="text-green-800 bg-green-300 my-1 hover:bg-green-400 hover:text-green-900 hover:cursor-pointer"
            >
              Approved
            </SelectItem>
            <SelectItem
              value={MemberStatusValues.REJECTED}
              // className="text-red-800 bg-red-300 my-1 hover:bg-red-400 hover:text-red-900 hover:cursor-pointer"
            >
              Rejected
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

const MemberSearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const allParams = Object.fromEntries(searchParams.entries());
  const formSchema = z.object({
    name: z.string().optional(),
    cnic: z.string().optional(),
    phone: z.string().optional(),
    status: z
      .enum([
        MemberStatusValues.APPROVED,
        MemberStatusValues.PENDING,
        MemberStatusValues.REJECTED,
        "",
      ])
      .optional(),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: allParams.name || "",
      cnic: allParams.cnic || "",
      phone: allParams.phone || "",
      status: allParams.status || "",
    },
  });

  function onSubmit(data) {
    const stringValue = new URLSearchParams(data).toString();
    router.push(`/dashboard/members/list/1//?${stringValue}`);
    router.refresh();
  }
  return (
    <div className="mb-6">
      <Accordion type="multiple" className="border px-4">
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline font-medium text-base">
            Search members
          </AccordionTrigger>
          <AccordionContent className="border-b-0">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mx-2">
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
                    <FormItem className="mx-2">
                      <FormLabel>Cnic</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter cnic without dashes"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="mx-2">
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter phone number here"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem className="mx-2">
                      <FormLabel>Status</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          onValueChange={(value) => {
                            form.setValue("status", value);
                          }}
                        >
                          <SelectTrigger className="w-full capitalize">
                            <SelectValue placeholder={"Select member status"} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem
                              value={MemberStatusValues.PENDING}
                              // className="text-yellow-800 bg-yellow-300 my-1 hover:bg-yellow-400 hover:text-yellow-900 hover:cursor-pointer"
                            >
                              Pending
                            </SelectItem>
                            <SelectItem
                              value={MemberStatusValues.APPROVED}
                              // className="text-green-800 bg-green-300 my-1 hover:bg-green-400 hover:text-green-900 hover:cursor-pointer"
                            >
                              Approved
                            </SelectItem>
                            <SelectItem
                              value={MemberStatusValues.REJECTED}
                              // className="text-red-800 bg-red-300 my-1 hover:bg-red-400 hover:text-red-900 hover:cursor-pointer"
                            >
                              Rejected
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-4 mx-2">
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
                      form.resetField("status");
                      const newUrl = window.location.pathname;
                      router.replace(newUrl);
                      setTimeout(() => {
                        router.refresh();
                      }, 100);
                    }}
                    variant="outline"
                  >
                    <BadgeMinus />
                    Reset
                  </Button>
                </div>
              </form>
            </Form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <FilterForm />
    </div>
  );
};

export default MemberSearchForm;
