"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import ProductDrawer from "@/components/dashboard/ProductsDrawer";
import { getData } from "@/lib/getData";
import { decryptStorage } from "@/lib/storageCrypto";

export default function ProductViewPage() {
    const { id } = useParams();
    const router = useRouter();

    const [product, setProduct] = useState(null);
    const [ids, setIds] = useState([]);

    useEffect(() => {
        async function fetchProduct() {
            const data = await getData(`items/${id}`);
            setProduct(data);
        }
        if (id) fetchProduct();
    }, [id]);

    useEffect(() => {
        async function loadIds() {
            const encrypted = localStorage.getItem("product_ids_ordered");
            if (encrypted) {
                const decrypted = await decryptStorage(encrypted);
                setIds(decrypted || []);
            }
        }
        loadIds();
    }, []);

    const handleNext = () => {
        const index = ids.indexOf(id);
        if (index !== -1 && index < ids.length - 1) {
            router.push(`/dashboard/inventory/items/view/${ids[index + 1]}`);
        }
    };

    const handlePrev = () => {
        const index = ids.indexOf(id);
        if (index > 0) {
            router.push(`/dashboard/inventory/items/view/${ids[index - 1]}`);
        }
    };

    if (!product) {
        return <div className="p-10 text-center text-gray-500">Loading product...</div>;
    }

    return (
        <ProductDrawer
            product={product}
            onPrev={handlePrev}
            onNext={handleNext}
        />
    );
}
