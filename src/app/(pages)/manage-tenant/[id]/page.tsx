"use client"

import React from 'react'

import TopContent from '@/components/TopContent';
import ViewDetails from './ViewDetails';

const page = () => {
   
  return (
    <div className="flex flex-col gap-5">
    <TopContent title=" Manage Tenant" />
    <ViewDetails/>
    </div>
  )
}

export default page