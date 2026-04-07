import { Product } from "@/types";

interface ProductGridProps {
    products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
            <div key={product.id} className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-600">Rp {product.price.toLocaleString()}</p>
            </div>
        ))}
        </div>
    );
}
