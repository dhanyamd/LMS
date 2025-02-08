import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    light : boolean
}

const LeaderBoard = ({light} : Props) => {
  return (
   <Card className={cn('border-themeGray lg:sticky lg:top-0 mt-10 lg:mt-0 rounded-xl p-5 overflow-hidden', 
    light ? "border-themeTextGray bg-[#1A1A1D]" : "bg-themeBlack"
   )}>
  <h2 className='text-themeTextWhite text-xl font-bolf'>
  leaderboard (30-days)
  </h2>
  <p className='text-themeTextGray text-sm'>
  See who performed the best this month.
  </p>
   </Card>
  )
}

export default LeaderBoard
