import { Search } from 'lucide-react'
import React from 'react'

export const SearchInput = () => {
    return (
        <div className="relative w-full hidden sm:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search className="w-4 h-4 text-gray-500 light:text-gray-400" />
            </div>
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 px-2 py-1.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="Search branch Customers..." required />
        </div>
    )
}
