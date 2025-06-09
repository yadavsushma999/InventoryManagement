import SkeletonTable from "@/components/dashboard/SkeletonTable";

// app/dashboard/inventory/loading.js
export default function Loading() {
  return (
    <div className="p-8">
      <SkeletonTable rows={5} cols={3} />
    </div>
  );
}
