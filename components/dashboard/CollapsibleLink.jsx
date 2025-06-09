import React from 'react'
import Link from 'next/link'
import { PlusCircle } from 'lucide-react'

export default function CollapsibleLink({items,setShowSidebar}) {
  return (
    <Link href={items.href} className='flex items-center
    justify-between pl-8 pr-4 hover:bg-slate-900 
    transition-all duration-300  py-2 rounded-md'
    onClick={()=>setShowSidebar(false)} >
      <span className='text-sm'>{items.title}</span>
      <PlusCircle className='w-4 h-4' />
    </Link>
  )
}
