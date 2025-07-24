import fs from "fs";
import axios from "axios";
import { edgestore } from "@/lib/excel/edgeStore";

/**
 * Uploads a local or internet image to Edgestore and returns its public URL.
 * @param {string} pathOrUrl Local absolute path or HTTP/HTTPS URL
 * @param {string} fileName Desired file name for reference
 * @returns {Promise<string>} Uploaded Edgestore URL
 */
export async function uploadImageToEdgestore(pathOrUrl, fileName) {
    try {
        let fileStream;

        if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
            const response = await axios.get(pathOrUrl, { responseType: "stream" });
            fileStream = response.data;
        } else {
            fileStream = fs.createReadStream(pathOrUrl);
        }

        const { url } = await edgestore.publicFiles.upload({
            file: {
                name: fileName || "image.jpg",
                type: "image/jpeg",
                size: undefined, // not required
                stream: fileStream,
            },
        });

        return url;
    } catch (err) {
        console.error(`❌ Failed to upload ${fileName} to Edgestore`, err);
        throw new Error(`Edgestore upload failed: ${err.message}`);
    }
}
