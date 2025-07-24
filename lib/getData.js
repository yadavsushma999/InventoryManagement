export async function getData(resource) {
   // const searchParams = new URLSearchParams(params).toString();
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${resource}`, {
        cache: "no-store",
    });
    if (!res.ok) throw new Error(`Failed to fetch ${resource}`);
    return res.json();
}
