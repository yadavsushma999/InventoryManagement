/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "utfs.io",
            },
            {
                protocol: "https",
                hostname: "files.edgestore.dev",
            },
            {
                protocol: "https",
                hostname: "dxlszexgsmabbpxnhabd.supabase.co",
            },

        ],
    }
};

export default nextConfig;
