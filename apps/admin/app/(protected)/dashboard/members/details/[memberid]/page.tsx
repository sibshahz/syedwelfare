import { getMemberById } from '@/app/actions/members'
import MemberPayments from '@/components/members-payments'
import React from 'react'


const MemberPage = async ({
  params,
}: {
  params: Promise<{ memberid: string }>
}) => {
  const memberid = (await params).memberid
  const member = await getMemberById(memberid)
  return (
    <div>Member id is: {memberid}
    {
      JSON.stringify(member.data)
    }
    <MemberPayments memberid={memberid} />
    </div>
  )
}

export default MemberPage