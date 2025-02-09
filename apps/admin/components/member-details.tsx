import { Member } from '@repo/zod-utils'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Separator } from './ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'


const MemberDetails = ({
  member
}:{
  member: Member
}) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className='flex flex-row justify-between py-3'>
              Member: {member.name}
              {
                member.husbandName && <div>Husband: {member.husbandName}</div>
              }
              {
                member.fatherName && <div>Father: {member.fatherName}</div>
              }
              {
                member.cnic && <div>CNIC: {member.cnic}</div>
              }
            </div>
          </CardTitle>
          <Separator />
          <CardContent className='py-3'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Phone</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total Payments</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>{member.phone}</TableCell>
                  <TableCell>{member.city}</TableCell>
                  <TableCell>{member.address}</TableCell>
                  <TableCell>{JSON.stringify(member)}</TableCell>
                  <TableCell>TOTAL PAYMENTS</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}

export default MemberDetails