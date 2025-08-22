"use client";
import ProductsSection from "@/components/Home-Components/ProductsSection";
import { fetchProducts, Product } from "@/lib/graphql";
import { useEffect, useState } from "react";

export default function Products() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchProducts().then(({ data }) => {
            setProducts(data.products);
            setLoading(false);
        });
    }, []);

    return (
        <div className="p-6">
            <ProductsSection
                heading="All Products"
                products={products}
                loading={loading}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
        </div>
    );
}
