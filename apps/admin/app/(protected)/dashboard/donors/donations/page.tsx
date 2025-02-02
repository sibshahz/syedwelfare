import React from 'react'
import { getAllDonations } from '@/app/actions/donations'
import DonationsTable from '@/components/donations-table'

export const dynamic = 'force-dynamic'

const Page =async () => {
  const donations= await getAllDonations()
  return (
    <div>
      <h1>Donors</h1>
      <DonationsTable donations={donations} />
      {/* <DonorsPagination totalDonors={totalDonors} /> */}
    </div>
  )
}

export default Page