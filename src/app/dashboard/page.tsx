import React from 'react'
import { DashboardPage } from '@/components/dashboard-page'
import {DashboardPageContent} from '@/app/dashboard/dashboard-page-content'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { db } from '@/db'

const Page = async()=>{
  const auth = await currentUser()
  if (!auth) {
    redirect('/sign-in')
  }

  const user = await db.user.findUnique({
    where:{externalId:auth.id}
  })
  if (!user) {
    return redirect("/welcome")
  }

  return (
    <>
    <DashboardPage title="Dashboard" hideBackButton={true}>
    <DashboardPageContent></DashboardPageContent>
    </DashboardPage>
    </>
  )

}

export default Page