'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const AssetsDetails = () => {
    const {assetId}=useParams()
    console.log(assetId)
  return (
    <div>AssetsDetails</div>
  )
}

export default AssetsDetails