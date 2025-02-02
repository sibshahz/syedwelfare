import { getAllPayments } from '@/app/actions/payments';
import PaymentsTable from '@/components/payments-table';
import React from 'react'

export const dynamic = 'force-dynamic'

const Page =async () => {
  const payments= await getAllPayments();
  return (
    <div>
      <h1>Payments to beneficiaries</h1>
      <PaymentsTable payments={payments} />
      {/* <DonorsPagination totalDonors={totalDonors} /> */}
    </div>
  )
}

export default Page