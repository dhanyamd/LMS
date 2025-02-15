import { onGetSectionInfo } from '@/app/actions/courses'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'
import SectionNavBar from './_components/section-navbar'

type CourseContentPageLayoutProps = {
    children: React.ReactNode 
    params: {
        sectionid: string
    }
}

const CourseContentPageLayout = async ({
 children,
 params
} : CourseContentPageLayoutProps) => {
    const client = new QueryClient()

    await client.prefetchQuery({
        queryKey: ["section-info"],
        queryFn: () => onGetSectionInfo(params.sectionid)
    })
  return (
    <HydrationBoundary state={dehydrate(client)}>
        <SectionNavBar sectionid={params.sectionid}/>
        {children}
    </HydrationBoundary>
  )
}

export default CourseContentPageLayout
