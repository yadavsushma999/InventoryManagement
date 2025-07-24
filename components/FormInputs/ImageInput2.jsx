"use client";

import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { Pencil, X } from "lucide-react";

const ImageInput2 = forwardRef(function ImageInput2({
    label = "🖼️ Upload Image",
    imageUrl = [],
    setImageUrl,
    endpoint = "publicFiles",
    maxImages = 1,
}, ref) {
    const { edgestore } = useEdgeStore();
    const fileInputRef = useRef(null);

    // Store selected file for later upload
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [progress, setProgress] = useState(0);

    /** Handle local preview when selecting a file, but do NOT upload yet */
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    /** Open file selector when Edit is clicked */
    const handleEditClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = ""; // reset for reselecting same file
            fileInputRef.current.click();
        }
    };

    /** Remove pending preview before upload */
    const handleRemovePreview = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
    };

    /** Expose uploadAll to parent, triggers upload + replace when Save is clicked */
    useImperativeHandle(ref, () => ({
        uploadAll: async () => {
            if (!selectedFile) {
                return imageUrl; // nothing to upload
            }

            const res = await edgestore[endpoint].upload({
                file: selectedFile,
                onProgressChange: (p) => setProgress(p),
                options: {
                    replaceTargetUrl: imageUrl.length > 0 ? imageUrl[0] : undefined,
                },
            });

            setImageUrl([res.url]);
            setSelectedFile(null);
            setPreviewUrl(null);
            setProgress(0);
            return [res.url];
        },
    }));

    return (
        <div className="sm:col-span-2">
            <label className="block text-base font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {label}
            </label>

            {/* If no image uploaded and no preview, show upload box */}
            {imageUrl.length === 0 && !previewUrl && (
                <div
                    onClick={handleEditClick}
                    className="flex flex-col items-center justify-center rounded-xl p-8 border border-dashed border-gray-400 dark:border-gray-600 cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
                >
                    <div className="text-5xl">📤</div>
                    <p className="mt-2 text-gray-700 dark:text-gray-200">Click to Upload Image</p>
                </div>
            )}

            {/* If preview or uploaded image exists, show it */}
            {(previewUrl || imageUrl.length > 0) && (
                <div className="relative mt-2 w-full max-w-xs rounded-xl overflow-hidden shadow border">
                    <img
                        src={previewUrl || imageUrl[0]}
                        alt="Preview"
                        className="w-full h-48 object-cover"
                    />
                    {/* Edit Icon */}
                    <button
                        onClick={handleEditClick}
                        aria-label="Edit image"
                        type="button"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white text-blue-600 rounded-full p-1 shadow transition"
                    >
                        <Pencil size={16} />
                    </button>
                    {/* Remove preview if in preview mode */}
                    {previewUrl && (
                        <button
                            onClick={handleRemovePreview}
                            aria-label="Remove selected preview"
                            type="button"
                            className="absolute top-2 right-10 bg-white/80 hover:bg-white text-red-600 rounded-full p-1 shadow transition"
                        >
                            <X size={16} />
                        </button>
                    )}
                    {/* Upload progress bar */}
                    {progress > 0 && progress < 100 && (
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200">
                            <div
                                className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    )}
                </div>
            )}

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileChange}
            />
        </div>
    );
});

export default ImageInput2;
