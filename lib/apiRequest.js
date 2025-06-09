import toast from "react-hot-toast";

export async function makeApiRequest(setLoading, endpoint, method, data, message, reset, redirectCallback = null) {

    try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: `${method}`,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if (response.ok) {
            setLoading(false);
            toast.success(`${message}`);
            reset();
            if (redirectCallback) {
                redirectCallback(); // ✅ only called if provided
            }
        } else {
            setLoading(false);
            toast.error("Something Went wrong");
        }
    } catch (error) {
        setLoading(false)
        console.error(error)
    }
}