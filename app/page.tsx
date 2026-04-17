import ClientView from "./ClientView"
import { data } from "./data"

export const dynamic = 'force-dynamic';

function filterProducts(category? : string, subcategory? : string, brand? : string) {
    return data.products.filter((product) => {
        if(product.brandId == brand) return true;

        const matchedBrandsFromSubCategory = data.brands.filter((brand) => {
            if(brand.subCategoryId == subcategory) return true;
        })
        if(product.brandId in matchedBrandsFromSubCategory) return true;

        const matchedBrandsFromCategory = data.brands.filter((brand) => {
            if(brand.subCategoryId in data.subCategories.filter((sub) => {
                if(category == sub.categoryId) return true;
            })) return true;
        })
        if(product.brandId in matchedBrandsFromCategory) return true;
    });
}

export default async function Home({ searchParams }: any) {
    const params = await searchParams;
    const category = params.category;
    const subcategory = params.subcategory;
    const brand = params.brand;

    const productList = filterProducts(category, subcategory, brand);

    const filteredSubCategories = data.subCategories
        ? data.subCategories.filter( sub => sub.categoryId === category)
        : [];
    const filteredBrands = data.brands
        ? data.brands.filter(brand => brand.subCategoryId === subcategory)
        : [];

    return <ClientView productList={productList} categoryList={data.categories} 
    subCategoryList={filteredSubCategories} brandList={filteredBrands} />
}
