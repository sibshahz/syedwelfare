"use client"
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, UsersRound, LogOut } from 'lucide-react'
import { postLogout } from '@/lib/api/auth'
import { redirect } from 'next/navigation'
import { useAuth } from './auth-provider'


const UserDropdown = () => {
  const {setUser} = useAuth();
  const handleLogout = async () => {
    await postLogout()
    setUser(null)
    redirect('/signin')
  }
  return (
    <div>
      <DropdownMenu>
  <DropdownMenuTrigger>
  <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem className='flex flex-row items-center gap-2 hover:cursor-pointer'><User /> Profile</DropdownMenuItem>
    <DropdownMenuItem className='flex flex-row items-center gap-2 hover:cursor-pointer'><UsersRound /> Team</DropdownMenuItem>
    <DropdownMenuItem className='flex flex-row items-center gap-2 hover:cursor-pointer'
    onClick={() => handleLogout()}
    ><LogOut /> Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}

export default UserDropdown