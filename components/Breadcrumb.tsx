import { Product } from "@/types";

interface BreadcrumbProps {
  category: string;
  subcategory: string;
  brand: string;
}

export default function Breadcrumb({ category, subcategory, brand }: BreadcrumbProps) {
  return (
    <nav className="product-breadcrumb" aria-label="breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
        {category && (
          <li className="text-gray-500">/</li>
        )}
        {category && (
          <li className="text-gray-900">{category}</li>
        )}
        {subcategory && (
          <li className="text-gray-500">/</li>
        )}
        {subcategory && (
          <li className="text-gray-900">{subcategory}</li>
        )}
        {brand && (
          <li className="text-gray-500">/</li>
        )}
        {brand && (
          <li className="text-gray-900">{brand}</li>
        )}
      </ol>
    </nav>
  );
}