import {
    HelpCircle,
    LayoutGrid,
    List,
    MoreHorizontal,
    Plus
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function FixedHeader({ newLink, title }) {
    return (
        <div className='bg-white py-4 px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4'>

            {/* Title */}
            <div className='text-xl font-semibold'>{title}</div>

            {/* Action Buttons */}
            <div className='flex flex-wrap w-full sm:w-auto gap-3'>

                {/* New Button */}
                <Link
                    href={newLink}
                    className='flex-1 sm:flex-none p-2 bg-blue-600 rounded flex items-center justify-center space-x-2 text-white'
                >
                    <Plus className='w-4 h-4' />
                    <span>New</span>
                </Link>

                {/* Layout Toggle */}
                <div className='flex flex-1 sm:flex-none rounded-md overflow-hidden'>
                    <button className='bg-gray-300 p-2 flex-1 sm:flex-none border-r border-gray-400'>
                        <List className='w-4 h-4 mx-auto' />
                    </button>
                    <button className='bg-gray-100 p-2 flex-1 sm:flex-none'>
                        <LayoutGrid className='w-4 h-4 mx-auto' />
                    </button>
                </div>

                {/* More Options */}
                <button className='bg-gray-100 p-2 rounded-md flex-1 sm:flex-none'>
                    <MoreHorizontal className='w-4 h-4 mx-auto' />
                </button>

                {/* Help */}
                <button className='bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md flex-1 sm:flex-none'>
                    <HelpCircle className='w-5 h-5 mx-auto' />
                </button>
            </div>
        </div>
    );
}
