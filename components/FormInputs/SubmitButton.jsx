import { Plus } from "lucide-react";

export default function SubmitButton({
  isLoading,
  title,
  onClick,
  disabled,
}) {
  return (
    <div className="sm:col-span-1">
      {isLoading ? (
        <button
          disabled
          type="submit"
          className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 mr-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M100 50.5908..." fill="#E5E7EB" />
            <path d="M93.9676 39.0409..." fill="currentColor" />
          </svg>
          Saving {title} Please wait...
        </button>
      ) : (
        <button
          type="submit"
          disabled={disabled}
          className={`inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 ${
            disabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-700 hover:bg-blue-800"
          }`}
        >
          <Plus className="w-5 h-5 mr-2" />
          <span>Save {title}</span>
        </button>
      )}
    </div>
  );
}
