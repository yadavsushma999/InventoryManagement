import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function OptionCard({ optionData }) {
    const { title, description, linkName, linkTitle, enabled, imageUrl } = optionData;
    return (

        <div className='shadow-md bg-white flex flex-col items-center justify-center gap-4 p-6 rounded'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <div className=''>
                <Image
                    src={imageUrl} // or .png, .jpg
                    alt="Add New Item"
                    width={144} // Tailwind w-36 = 9rem = 144px
                    height={128} // Tailwind h-32 = 8rem = 128px
                    className="w-36 h-32"
                />
            </div>
            <p className="line-clamp-4 text-center">
                {description}
            </p>
            {enabled ? (
                <Link href={linkName} className='w-full sm:w-auto py-2 bg-blue-600 rounded px-3 
            inline-flex items-center justify-center sm:justify-start space-x-2 text-white'>
                    {linkTitle}
                </Link>
            ) : (
                <button className='w-full sm:w-auto py-2 bg-blue-600 rounded px-3 
            inline-flex items-center justify-center sm:justify-start space-x-2 text-white'>Enable</button>
            )}
        </div>

    )
}
