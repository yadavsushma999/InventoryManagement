<UploadDropzone
    endpoint="imageUploader"
    onClientUploadComplete={(res) => {
        const urls = res.map((f) => f.uploadedUrl); // ✅ use 'uploadedUrl' not 'file.url'
        setUploadedUrls(urls);
    }}
    onUploadError={(error) => {
        console.error("Upload error:", error.message);
    }}
/>
