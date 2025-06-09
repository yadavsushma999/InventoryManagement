import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import CollapsibleLink from './CollapsibleLink'
import { BaggageClaim, ChevronRight } from 'lucide-react'

export default function SidebarDropdownLink({ title, items, icon: Icon, setShowSidebar }) {
    return (
        <Collapsible>
            <CollapsibleTrigger className="flex justify-between items-center w-full ">
                <div className=" p-2 flex items-center space-x-2">
                    <Icon className='w-4 h-4' />
                    <span>{title}</span>
                </div>
                <ChevronRight className='w-4 h-4' />
            </CollapsibleTrigger>
            <CollapsibleContent>
                {items.map((items, i) => {
                    return (
                        <CollapsibleLink items={items} key={i}  setShowSidebar={setShowSidebar}/>
                    )
                })}
            </CollapsibleContent>
        </Collapsible>
    )
}
