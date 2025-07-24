import { createUploadthing } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();


// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    imageUploader: f({
        image: {
            /**
             * For full list of options and defaults, see the File Route API reference
             * @see https://docs.uploadthing.com/file-routes#route-config
             */
            maxFileSize: "1MB",
            maxFileCount: 1,
        },
    })
        // Set permissions and file types for this FileRoute

        .onUploadComplete(async ({ metadata, file }) => {
            console.log("✅ Uploaded file:", file.url);
            return { uploadedUrl: file.url };
        })

};


