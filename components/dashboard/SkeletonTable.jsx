export default function SkeletonTable({ rows = 5, cols = 3 }) {
    return (
        <div className="p-8 animate-pulse space-y-4">
            {[...Array(rows)].map((_, i) => (
                <div key={i} className="grid grid-cols-3 gap-4">
                    {[...Array(cols)].map((_, j) => (
                        <div
                            key={j}
                            className="h-6 bg-gray-300 dark:bg-gray-700 rounded"
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    )
}
