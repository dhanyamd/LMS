import { onGetCourseModules } from '@/app/actions/courses'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'
import { CreateCourseModule } from '../_components/create-module'
import CourseList from '../_components/module-list'

type CourseLayoutProps = {
    params : {
        courseid: string
        groupid: string
    },
    children: React.ReactNode
}

const CourseLayout = async ({params, children} : CourseLayoutProps) => {
    const client = new QueryClient()

    await client.prefetchQuery({
        queryKey: ["course-modules"],
        queryFn: () => onGetCourseModules(params.courseid)
    })
  return (
   <HydrationBoundary state={dehydrate(client)}>
  <div className='grid grid-cols-1 h-full lg:grid-cols-4 overflow-hidden'>
<div className='bg-themeBlack p-5 overflow-y-auto'>
    <CreateCourseModule groupid={params.groupid} courseId={params.courseid}/>
    <CourseList groupid={params.groupid} courseId={params.courseid}/>
</div>
<div className='lg:col-span-3 max-h-full h-full pb-10 overflow-y-auto bg-[#101011]/90'>
{children}
</div>
  </div>
   </HydrationBoundary>
  )
}

export default CourseLayout
