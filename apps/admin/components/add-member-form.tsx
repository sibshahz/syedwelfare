"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MemberSchema, type Member } from "@repo/zod-utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
// import { createMember } from "@/lib/api/member";
import { createMember } from "@/app/actions/members";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function MemberForm() {
  const [profilePicItem, setProfilePicItem] = useState("");
  const [cnicFrontItem, setCnicFrontItem] = useState("");
  const [cnicBackItem, setCnicBackItem] = useState("");
  const [selectedOption, setSelectedOption] = useState("father");
  const toast = useToast();
  const form = useForm<Member>({
    resolver: zodResolver(MemberSchema),

    defaultValues: {
      name: "",
      cnic: "",
      phone: "",
      cnicBack: "",
      cnicFront: "",
      profilePic: "",
      fatherName: "",
      husbandName: "",
      // amount: 0,
      address: "",
      city: "",
      role: "MEMBER",
    },
  });
  console.log("Form errors: ", form.formState.errors);
  function handleFileChange(field: any, setValue: any) {
    return async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setValue(field, reader.result as string); // Set base64 string to the form value
          switch (field) {
            case "profilePic":
              setProfilePicItem(reader.result as string);
              break;
            case "cnicFront":
              setCnicFrontItem(reader.result as string);
              break;
            case "cnicBack":
              setCnicBackItem(reader.result as string);
              break;
            default:
              break;
          }
        };
        reader.readAsDataURL(file);
      }
    };
  }

  async function onSubmit(values: Member) {
    console.log("Form values: ", values);

    const result = await createMember(values);
    if (!result.success) {
      toast.toast({
        variant: "destructive",
        title: "Failed to create",
        description: `Member cannot be created at the moment. ${result.data}`,
      });
    } else {
      toast.toast({
        title: "Created",
        description: "Member has been successfully created.",
      });
      form.reset(); // Reset the form after successful submission
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name={"name"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter name here" {...field} />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <RadioGroup
              onValueChange={(value) => {
                if (value === "father") {
                  setSelectedOption("father");
                } else {
                  setSelectedOption("husband");
                }
              }}
              defaultValue="father"
              className="flex flex-row gap-2 items-start mb-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="father" id="father-option" />
                <Label htmlFor="father-option">Father Name</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="husband" id="husband-option" />
                <Label htmlFor="husband-option">Husband Name</Label>
              </div>
            </RadioGroup>
            {selectedOption === "father" ?
              <FormField
                control={form.control}
                name={"fatherName"}
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Father name</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Enter father name here" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            : null}

            {selectedOption === "husband" ?
              <FormField
                control={form.control}
                name={"husbandName"}
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Husband name</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Enter husband name here" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            : null}
          </div>

          <FormField
            control={form.control}
            name="cnic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CNIC</FormLabel>
                <FormControl>
                  <Input
                    type="text" // Use text to handle string inputs
                    placeholder="Enter 13-digit CNIC"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    type="text" // Use text to handle string inputs
                    placeholder="Enter 11-digit phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    {...field}
                    onChange={(e) =>
                      field.onChange(parseInt(e.target.value, 10))
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                    type="text" // Use text to handle string inputs
                    placeholder="Enter city name here"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address </FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none"
                    placeholder="Enter address details"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="profilePic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Picture</FormLabel>
                <FormControl>
                  <Input
                    disabled={false}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange(field.name, form.setValue)}
                    // {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cnicFront"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CNIC front picture</FormLabel>
                <FormControl>
                  <Input
                    disabled={false}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange(field.name, form.setValue)}
                    // {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cnicBack"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CNIC back picture</FormLabel>
                <FormControl>
                  <Input
                    disabled={false}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange(field.name, form.setValue)}
                    // {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profilePicItem && (
            <Image
              src={profilePicItem}
              alt="Profile"
              width={128}
              height={128}
            />
          )}
          {cnicFrontItem && (
            <Image
              src={cnicFrontItem}
              alt="CNIC Front"
              width={128}
              height={128}
            />
          )}
          {cnicBackItem && (
            <Image
              src={cnicBackItem}
              alt="CNIC Back"
              width={128}
              height={128}
            />
          )}
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault(); // Prevents default form submission
            form.handleSubmit(onSubmit)();
          }}
        >
          Submit
        </Button>{" "}
        {/* Leave type as submit */}
      </form>
    </Form>
  );
}
