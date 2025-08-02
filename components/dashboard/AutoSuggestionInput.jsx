"use client";

import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";

export default function AutoSuggestInput({
  value,
  onChange,
  onSelect,
  apiPath = "/api/suggestions",
  type = "item",
  placeholder = "Search...",
  className = "",
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const fetchTimeoutRef = useRef(null);
  const blurTimeoutRef = useRef(null);

  useEffect(() => {
    clearTimeout(fetchTimeoutRef.current);

    if (!value.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    fetchTimeoutRef.current = setTimeout(() => {
      fetch(`${apiPath}?q=${encodeURIComponent(value.trim())}&type=${type}`)
        .then((res) => res.json())
        .then((data) => {
          setSuggestions(data.suggestions || []);
          setShowSuggestions(true);
        })
        .catch((err) => console.error("Suggestion fetch error:", err));
    }, 300);

    return () => clearTimeout(fetchTimeoutRef.current);
  }, [value, apiPath, type]);

  const handleClick = (sug) => {
    clearTimeout(blurTimeoutRef.current); // Prevent hiding before selection
    onChange?.(sug.value);
    onSelect?.(sug.fullItem || sug);
    setShowSuggestions(false);
  };

  const handleBlur = () => {
    blurTimeoutRef.current = setTimeout(() => {
      setShowSuggestions(false);
    }, 150); // Slight delay to allow item click
  };

  const handleFocus = () => {
    clearTimeout(blurTimeoutRef.current);
    setShowSuggestions(true);
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
        <Search className="w-4 h-4 text-gray-500" />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Escape") setShowSuggestions(false);
        }}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
          focus:border-blue-500 block w-full ps-10 px-2 py-1.5 ${className}`}
      />

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-50 bg-white border mt-1 w-full shadow-lg rounded max-h-60 overflow-y-auto text-sm">
          {suggestions.map((sug, i) => (
            <li
              key={i}
              onMouseDown={(e) => {
                e.preventDefault(); // prevents blur
                handleClick(sug);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-pre-line"
              title={sug.label.replace(/\n/g, " | ")}
            >
              {sug.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
