"use client"
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import FilterBar from "@/components/FilterBar";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGrid from "@/components/ProductGrid";
import { Category, SubCategory, Brand, Product } from "@/types";

interface ClientViewProps {
    productList: Product[],
    categoryList: Category[],
    subCategoryList: SubCategory[],
    brandList: Brand[],
}

export default function ClientView({ productList, categoryList, subCategoryList, brandList }: ClientViewProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const resetFilters = () => {
    router.push(pathname);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b p-4 bg-white">
        <FilterBar 
          categories={categoryList}
          subCategories={subCategoryList}
          brands={brandList}
          categoryValue={searchParams.get("category") || ""}
          subcategoryValue={searchParams.get("subcategory") || ""}
          brandValue={searchParams.get("brand") || ""}
        />
      </header>
      
      <main className="container mx-auto p-4">
        <Breadcrumb 
          category={searchParams.get("category") || ""}
          subcategory={searchParams.get("subcategory") || ""}
          brand={searchParams.get("brand") || ""}
        />
        
        <section className="mt-6">
          <ProductGrid 
            products={productList}
          />
        </section>
      </main>
      
      <footer className="mt-8 p-4 border-t text-center text-sm text-gray-500">
        <button 
          onClick={resetFilters}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Reset Filters
        </button>
      </footer>
    </div>
  );
}
