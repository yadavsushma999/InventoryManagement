import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Inventory Management Software
      </h1>
      <Link href="/dashboard/home/overview">
        <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300">
          View Dashboard
        </button>
      </Link>
    </div>
  );
}
