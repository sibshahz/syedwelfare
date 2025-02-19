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
import { Input } from "@/components/ui/input";
import { updateMember } from "@/app/actions/members";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CircleX } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const EditMemberForm: React.FC<{ memberData: Member }> = ({
  memberData,
}) => {
  const [profilePicItem, setProfilePicItem] = useState("");
  const [cnicFrontItem, setCnicFrontItem] = useState("");
  const [cnicBackItem, setCnicBackItem] = useState("");
  const router = useRouter();
  const toast = useToast();
  const form = useForm<Member>({
    resolver: zodResolver(MemberSchema),
    defaultValues: {
      name: memberData.name,
      fatherName: memberData.fatherName || "",
      husbandName: memberData.husbandName || "",
      cnic: memberData.cnic,
      phone: memberData.phone,
      cnicBack: memberData.cnicBack || "",
      cnicFront: memberData.cnicFront || "",
      profilePic: memberData.profilePic || "",
      address: memberData.address,
      city: memberData.city,
      role: "MEMBER",
    },
  });

  useEffect(() => {
    form.setValue("name", memberData.name || "");
    form.setValue("fatherName", memberData.fatherName || "");
    form.setValue("cnic", memberData.cnic);
    form.setValue("phone", memberData.phone);
    form.setValue("cnicBack", memberData.cnicBack);
    form.setValue("cnicFront", memberData.cnicFront);
    form.setValue("profilePic", memberData.profilePic);
    form.setValue("husbandName", memberData.husbandName || "");
    setProfilePicItem(memberData.profilePic || "");
    setCnicBackItem(memberData.cnicBack || "");
    setCnicFrontItem(memberData.cnicFront || "");
    form.setValue("address", memberData.address);
    form.setValue("city", memberData.city);
    console.log("Form values: ", memberData);
  }, [memberData]);
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
    const result = await updateMember(memberData.id || "", values);
    if (!result.success) {
      toast.toast({
        variant: "destructive",
        title: "Failed to create",
        description: `Member cannot be updated at the moment. ${result.data}`,
      });
    } else {
      toast.toast({
        title: "Updated",
        description: "Member has been updated successfully.",
      });
      form.reset(); // Reset the form after successful submission
    }

    // form.reset(); // Reset the form after successful submission
    router.refresh();

    // const formData = new FormData();

    // // Loop through the keys in the `values` object
    // for (const [key, value] of Object.entries(values)) {
    //   if (value && typeof value === 'object' && 'length' in value && value.length > 0) {
    //     // Append the first file from FileList
    //     formData.append(key, value[0]);
    //   } else if (value && typeof value === 'object' && value instanceof File) {
    //     // Append the File instance
    //     formData.append(key, value);
    //   } else if (value) {
    //     // Append plain fields
    //     formData.append(key, value as string);
    //   }
    // }

    // console.log("Form data:", formData.getAll("name")); // Debugging form data

    // Submit the formData
    // fetch("/api/members", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("Failed to submit form");
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log("Success:", data);
    //     form.reset(); // Reset the form after successful submission
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)} // Attach the handler here
          className="space-y-8"
        >
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

            {(form.getValues("husbandName") ?? "").length > 0 && (
              <FormField
                control={form.control}
                name={"husbandName"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Husband name</FormLabel>
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
            )}
            <FormField
              control={form.control}
              name={"fatherName"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father name</FormLabel>
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    {/* <Image src={memberData.profilePic} alt={memberData.name} width={200} height={200} className="aspect-square" /> */}
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
            <div className="col-span-full">
              <div className="gap-4 grid grid-cols-3">
                {profilePicItem && profilePicItem.length > 0 && (
                  <div className="relative overflow-hidden max-w-56">
                    <CircleX
                      onClick={() => {
                        setProfilePicItem("");
                        form.setValue("profilePic", "");
                      }}
                      className="text-red-500 absolute
                     right-2 top-2 duration-100 ease-out 
                     shadow-sm hover:shadow-md hover:cursor-pointer hover:shadow-slate-200 filter rounded-full"
                    />
                    <Image
                      src={profilePicItem}
                      alt={memberData.name || ""}
                      width={250}
                      height={300}
                      className="border-8 rounded-sm border-gray w-56 aspect-square"
                    />
                  </div>
                )}
                {cnicFrontItem && cnicFrontItem.length > 0 && (
                  <div className="relative overflow-hidden max-w-80">
                    <CircleX
                      onClick={() => {
                        setCnicFrontItem("");
                        form.setValue("cnicFront", "");
                      }}
                      className="text-red-500 absolute
                     right-2 top-2 duration-100 ease-out 
                     shadow-sm hover:shadow-md hover:cursor-pointer hover:shadow-slate-200 filter rounded-full"
                    />
                    <Image
                      src={cnicFrontItem}
                      alt={memberData.name || ""}
                      width={250}
                      height={300}
                      className="border-8 rounded-sm border-gray w-80 aspect-auto"
                    />
                  </div>
                )}
                {cnicBackItem && cnicBackItem.length > 0 && (
                  <div className="relative overflow-hidden max-w-80">
                    <CircleX
                      role="button"
                      onClick={() => {
                        setCnicBackItem("");
                        form.setValue("cnicBack", "");
                      }}
                      className="text-red-500 absolute
                     right-2 top-2 duration-100 ease-out 
                     shadow-sm hover:shadow-md hover:cursor-pointer hover:shadow-slate-200 filter rounded-full"
                    />
                    <Image
                      src={cnicBackItem}
                      alt={memberData.name || ""}
                      width={250}
                      height={300}
                      className="border-8 rounded-sm border-gray w-80 aspect-auto"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <Button type="submit">Update</Button> {/* Leave type as submit */}
          <Button variant={"outline"} onClick={() => router.back()}>
            Cancel
          </Button>
        </form>
      </Form>
    </>
  );
};
