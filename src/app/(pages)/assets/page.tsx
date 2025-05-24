import TopContent from '@/components/TopContent'
import React from 'react'
import ManageAssets from './ManageAssets'

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <TopContent title='Manage Assets' />
      <ManageAssets/>
    </div>
  )
}

export default page