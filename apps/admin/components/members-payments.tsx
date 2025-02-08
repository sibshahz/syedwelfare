import { getPaymentsById } from '@/app/actions/payments';
import { MemberPayment } from '@repo/zod-utils'
import React from 'react'



const MemberPayments =async ({
  memberid
}:{
  memberid: string
}) => {
  const payments = await getPaymentsById(memberid);
  return (
    <div><h1>Payments are: </h1>
      <div>{JSON.stringify(payments.data)}</div>
    </div>
  )
}

export default MemberPayments