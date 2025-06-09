"use client"

import { CreditCard, X } from 'lucide-react'
import React, { useState } from 'react'

export default function DashboardBanner() {
    const [hidden, setHidden] = useState(false)

    if (hidden) return null

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 py-6 px-6 md:px-16 bg-white relative">
            {/* Icon */}
            <div className="flex justify-center md:justify-start md:col-span-2">
                <CreditCard className="w-16 h-16 text-slate-500" />
            </div>

            {/* Text */}
            <div className="md:col-span-6 space-y-2 text-center md:text-left">
                <h2 className="font-bold text-2xl">
                    Start accepting online payments
                </h2>
                <p className="text-sm text-slate-600">
                    Businesses are moving toward online payments as they're easy,
                    secure, and fast. Try them for your business today.
                </p>
            </div>

            {/* Button */}
            <div className="flex justify-center md:justify-end md:col-span-3">
                <button className="py-2 px-6 uppercase bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition">
                    Enable
                </button>
            </div>

            {/* Close Button */}
            <button
                onClick={() => setHidden(true)}
                className="absolute top-4 right-4 md:right-16"
                aria-label="Close banner"
            >
                <X className="text-slate-600" />
            </button>
        </div>
    )
}
