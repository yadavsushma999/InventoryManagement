export function getFilters(request) {
    const { searchParams } = new URL(request.url);

    const take = parseInt(searchParams.get("take") ?? "10");
    const skip = parseInt(searchParams.get("skip") ?? "0");
    const sortBy = searchParams.get("sortBy") ?? "createdAt";
    const sortOrderRaw = searchParams.get("sortOrder") ?? "desc";
    const sortOrder = sortOrderRaw.toLowerCase() === "asc" ? "asc" : "desc";
    const search = searchParams.get("search") ?? "";
    const status = searchParams.get("status") ?? "active";
    const fromDate = searchParams.get("fromDate") ?? "";
    const toDate = searchParams.get("toDate") ?? "";
    const groupBy = searchParams.get("groupBy") ?? ""; // ✅ Add this

    return { take, skip, sortBy, sortOrder, search, status, fromDate, toDate, groupBy };
}
