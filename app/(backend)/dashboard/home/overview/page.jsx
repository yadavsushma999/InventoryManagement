import DashboardBanner from '@/components/dashboard/DashboardBanner'
import SalesOverview from '@/components/dashboard/SalesOverview'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <DashboardBanner/>
      <SalesOverview/>
        <h2>
            Dashboard
        </h2>
    </div>
  )
}
