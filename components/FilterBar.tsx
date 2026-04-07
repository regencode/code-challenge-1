"use client"
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Category, SubCategory, Brand } from "@/types";

interface FilterBarProps {
    categories: Category[];
    subCategories: SubCategory[];
    brands: Brand[];
    categoryValue: string;
    subcategoryValue: string;
    brandValue: string;
}

export default function FilterBar({ 
    categories, 
    subCategories, 
    brands,
    categoryValue,
    subcategoryValue,
    brandValue,
}: FilterBarProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const params = new URLSearchParams(searchParams);

        if (value) {
            params.set("category", value);
            params.delete("subcategory");
            params.delete("brand");
        } else {
            params.delete("category");
            params.delete("subcategory");
            params.delete("brand");
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const params = new URLSearchParams(searchParams);

        if (value) {
            params.set("subcategory", value);
            params.delete("brand");
        } else {
            params.delete("subcategory");
            params.delete("brand");
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const params = new URLSearchParams(searchParams);

        if (value) {
            params.set("brand", value);
        } else {
            params.delete("brand");
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex flex-wrap gap-4">
        <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
        Main Category
        </label>
        <select
        id="category"
        name="category"
        value={categoryValue}
        onChange={handleCategoryChange}
        className="border rounded px-3 py-2"
        >
        <option value="">All Categories</option>
        {categories.map(category => (
            <option key={category.id} value={category.id}>
            {category.name}
            </option>
        ))}
        </select>
        </div>

        <div>
        <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700 mb-1">
        Sub-Category
        </label>
        <select
        id="subcategory"
        name="subcategory"
        value={subcategoryValue}
        onChange={handleSubCategoryChange}
        disabled={!categoryValue}
        className={`border rounded px-3 py-2 ${!categoryValue ? 'bg-gray-100' : ''}`}
        >
        <option value="">All Subcategories</option>
        {subCategories.map(subCategory => (
            <option key={subCategory.id} value={subCategory.id}>
            {subCategory.name}
            </option>
        ))}
        </select>
        </div>

        <div>
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
            Brand
            </label>
        <select
        id="brand"
        name="brand"
        value={brandValue}
        onChange={handleBrandChange}
        disabled={!subcategoryValue}
        className={`border rounded px-3 py-2 ${!subcategoryValue ? 'bg-gray-100' : ''}`}
        >
        <option value="">All Brands</option>
        {brands.map(brand => (
            <option key={brand.id} value={brand.id}>
            {brand.name}
            </option>
        ))}
        </select>
        </div>
        </div>
    );
}
