"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ImageInput({
    label,
    imageUrl = [],
    setImageUrl,
    endpoint = "imageUploader",
    className = "col-span-full",
}) {
    // Ensure imageUrl is always an array
    const imageList = Array.isArray(imageUrl) ? imageUrl : [imageUrl];

    return (
        <div className={className}>
            <div className="flex justify-between items-center mb-4">
                <label
                    htmlFor="upload-images"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    {label}
                </label>

                {imageList.length > 0 && (
                    <button
                        onClick={() => setImageUrl([])}
                        type="button"
                        className="flex space-x-2 bg-slate-900 rounded-md shadow text-white py-2 px-4"
                    >
                        <Pencil className="w-5 h-5" />
                        <span>Change Images</span>
                    </button>
                )}
            </div>

            {imageList.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {imageList.map((url, index) => (
                        <Image
                            key={index}
                            src={url}
                            alt={`Uploaded image ${index + 1}`}
                            width={500}
                            height={333}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    ))}
                </div>
            ) : (
                <UploadDropzone
                    endpoint={endpoint}
                    //multiple={true}
                    onClientUploadComplete={(res) => {
                        const urls = res.map((file) => file.appUrl);
                        setImageUrl(urls); // Or append: prev => [...prev, ...urls]
                        console.log("Files uploaded:", urls);
                    }}
                    onUploadError={(error) => {
                        console.error("Upload error:", error.message);
                    }}
                />
            )}
        </div>
    );
}
