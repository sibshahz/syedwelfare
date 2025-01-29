"use client"
import React from 'react'
import { TableCell, TableRow } from './ui/table'
import { Pencil, Trash2 } from 'lucide-react'
import { Button } from './ui/button'
import { Member } from '@repo/zod-utils'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deleteMember } from '@/app/actions/members'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const DeleteDialog:React.FC<{id: string}>=({id}: {id: string})=>{
  const router = useRouter()
  const deleteItem =async (id:string)=> {
    await deleteMember(id);
    router.refresh()
    
  }
  return(
    <AlertDialog>
  <AlertDialogTrigger className='bg-red-500 text-white py-2 px-4 rounded-sm text-xs font-light'><Trash2 className='text-sm' /></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete beneficiary data.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={async() => deleteItem(id)}
        className='bg-red-500 text-white hover:bg-red-600'
        >Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
  )
}

interface MembersTableItemProps {
  member: Member;
}


const MembersTableItem: React.FC<MembersTableItemProps> = ({ member }) => {
  const { id, cnic, name, fatherName, phone, address, city, profilePic} = member;
  

  return (
    <>

    <TableRow>
        <TableCell>
          {
            profilePic && profilePic.length > 0 ? (
              <Image
                src={profilePic}
                alt={name || ""}
                width={28}
                height={28}
                className="rounded-full"
              />
            ) : (
              <div className="w-8 h-8 bg-gray-100 rounded-full" />
            )
          }
        </TableCell>
        <TableCell>{cnic || ""}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{fatherName}</TableCell>
        <TableCell>{phone}</TableCell>
        <TableCell className="max-w-28 truncate">{address}</TableCell>
        <TableCell>{city}</TableCell>
        <TableCell className="flex space-x-2 items-center">
          <Link href={`/dashboard/members/edit/${id}`}>
          <Button variant={"outline"}><Pencil /></Button>
          </Link>
          {/* <Button variant={"destructive"}
          onClick={() => setShow(true)}
          ><Trash2 /></Button> */}
          <DeleteDialog id={id as string} />
        </TableCell>
      </TableRow>
      </>
  )
}

export default MembersTableItem

