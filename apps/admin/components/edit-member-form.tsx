"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MemberSchema, type Member } from "@repo/zod-utils";
import { Button } from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
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


export const EditMemberForm: React.FC<{ memberData: Member }> = ({ memberData }) => {
  const [profilePicItem,setProfilePicItem]=useState("");
  const [cnicFrontItem,setCnicFrontItem]=useState("");
  const [cnicBackItem,setCnicBackItem]=useState("");
  const router = useRouter();  
  const form = useForm<Member>({
    resolver: zodResolver(MemberSchema),
    defaultValues: {
      name: memberData.name,
      fatherName: memberData.fatherName || "",
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
    form.setValue("name", memberData.name)
    form.setValue("fatherName", memberData.fatherName)
    form.setValue("cnic", memberData.cnic)
    form.setValue("phone", memberData.phone)
    form.setValue("cnicBack", memberData.cnicBack)
    form.setValue("cnicFront", memberData.cnicFront)
    form.setValue("profilePic", memberData.profilePic)
    setProfilePicItem(memberData.profilePic || "")
    setCnicBackItem(memberData.cnicBack || "")
    setCnicFrontItem(memberData.cnicFront || "")
    form.setValue("address", memberData.address)
    form.setValue("city", memberData.city)
    console.log("Form values: ", memberData)
  },[memberData])
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
            setProfilePicItem(reader.result as string)
            break;
          case "cnicFront":
            setCnicFrontItem(reader.result as string)
            break;
          case "cnicBack":
            setCnicBackItem(reader.result as string)
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
console.log("Form values: ", values)

const result=await updateMember(memberData.id || "",values)
console.log("RESULT: ", result)

form.reset(); // Reset the form after successful submission
router.refresh()

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      disabled={true}
      type="file" accept="image/*"
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
      disabled={true}
      type="file" accept="image/*"
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
      disabled={true}
      type="file" accept="image/*"
      onChange={handleFileChange(field.name, form.setValue)}
      // {...field}
      />

      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
    <div className="col-span-full">
  <div className="flex flex-row gap-4 flex-wrap">
    {profilePicItem && profilePicItem.length > 0
    && <img src={profilePicItem} alt={memberData.name} width={200} height={200} className="aspect-square" />}
    {
      cnicFrontItem && cnicFrontItem.length > 0 
      && <img src={memberData.cnicFront} alt={memberData.name} width={200} height={200} className="aspect-square" />
    }
    {
      cnicBackItem && cnicBackItem.length > 0 
      && <img src={memberData.cnicBack} alt={memberData.name} width={200} height={200} className="aspect-square" />
    }
  </div>
</div>
        </div>
        <Button type="submit">Update</Button> {/* Leave type as submit */}
        <Button variant={"outline"} onClick={() => router.back()}>Cancel</Button>
      </form>
    </Form>

    </>
  );
}
