import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { supabase } from '@/lib/supabase';
import { randomUUID } from 'crypto';

/**
 * Uploads a local or internet image to Supabase and returns its public URL.
 * @param {string} sourcePathOrUrl
 * @param {string} fileName
 * @returns {Promise<string>} public URL
 */
export async function uploadImageToSupabase(sourcePathOrUrl, fileName) {
    try {
        let buffer;

        if (sourcePathOrUrl.startsWith('http://') || sourcePathOrUrl.startsWith('https://')) {
            const response = await axios.get(sourcePathOrUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data);
        } else {
            buffer = fs.readFileSync(sourcePathOrUrl);
        }

        const ext = path.extname(fileName) || '.jpg';
        const supabasePath = `products/${randomUUID()}${ext}`;

        const { error } = await supabase.storage
            .from('invento') // ✅ Your Supabase bucket name
            .upload(supabasePath, buffer, {
                contentType: 'image/*',
                upsert: true,
            });

        if (error) {
            console.error('❌ Supabase upload error:', error);
            throw new Error(error.message);
        }

        const { data: { publicUrl } } = supabase.storage.from('public').getPublicUrl(supabasePath);
        return publicUrl;
    } catch (err) {
        console.error(`❌ Failed to upload ${fileName} to Supabase:`, err);
        throw new Error(`Supabase upload failed: ${err.message}`);
    }
}
