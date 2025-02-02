import { getAllDonor, getTotalDonor } from '@/app/actions/donors'
import DonorsPagination from '@/components/donors-pagination'
import DonorsTable from '@/components/donors-table'
import { Donor } from '@repo/zod-utils'
import React from 'react'


const DonorListPage =async () => {
  const donors = await getAllDonor() as Donor[]
  const totalDonors = await getTotalDonor()
  return (
    <div>
      <h1>Donors</h1>
      <DonorsTable donors={donors} cnic={''} />
      <DonorsPagination totalDonors={totalDonors} />
    </div>
  )
}

export default DonorListPage