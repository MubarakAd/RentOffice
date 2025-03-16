import TopContent from '@/components/TopContent'
import React from 'react'
import ManageTenant from './ManageTenant'

const page = () => {
  return (
    <div className="flex flex-col gap-5">
    <TopContent title=" Manage Tenant" />
    <ManageTenant/>
  </div>
  )
}

export default page