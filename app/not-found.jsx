// app/not-found.tsx OR pages/404.js
import Image from 'next/image';
import Link from 'next/link';
import {
  notfound
} from "@/assets/images/images";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50">
            <Image
                src={notfound}
                alt="404 Not Found"
                width={400}
                height={300}
                className="mb-6 rounded-lg"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Page not found.</h1>
            <p className="text-lg text-gray-600 mb-6">
                The page you’re looking for doesn’t exist.
            </p>
            <Link href="/dashboard/home/overview" className="text-blue-600 hover:underline font-medium">
                ← Go back home
            </Link>
        </div>
    );
}
