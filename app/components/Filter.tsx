import { Badge } from '@/components/ui/badge'
import React from 'react'


function Filter() {
  return (
    <section className='flex items-center gap-3 overflow-x-auto pb-3 '>
    <Badge className='whitespace-nowrap text-[12px] text-[#7C7C7C]' variant="outline">All</Badge>
    <Badge className='whitespace-nowrap text-[12px] text-[#7C7C7C]' variant="outline">Important</Badge>
    <Badge className='whitespace-nowrap text-[12px] text-[#7C7C7C]' variant="outline">Lecture notes</Badge>
    <Badge className='whitespace-nowrap text-[12px] text-[#7C7C7C]' variant="outline">To-do lists</Badge>
    <Badge className='whitespace-nowrap text-[12px] text-[#7C7C7C]' variant="outline">To-do lists</Badge>
    <Badge className='whitespace-nowrap text-[12px] text-[#7C7C7C]' variant="outline">To-do lists</Badge>
  </section>
  )
}

export default Filter
