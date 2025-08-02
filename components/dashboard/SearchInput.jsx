import { Search } from 'lucide-react'
import React from 'react'
import AutoSuggestInput from "@/components/dashboard/AutoSuggestionInput";

export const SearchInput = ({ search = "", setSearch = () => { } }) => {
    return (
        <div className="relative w-full hidden sm:block">
            <AutoSuggestInput
                value={search}
                onChange={setSearch}
                apiPath="/api/suggestions"
                placeholder="Type keywords..."
            />
        </div>
    )
}
