import ClientView from "./ClientView"
import { data } from "./data"

export const dynamic = 'force-dynamic';
function integerID(id: string) {
    return parseInt(id.at(1) as string);
}
function filterProducts(category? : string, subcategory? : string, brand? : string) {
    let result = data.products;
    if(!category) return result;
    if(integerID(category)%2 == 1) result = result.slice(0, result.length/2);
    else                         result = result.slice(result.length/2, result.length);
    if(!subcategory) return result;
    if(integerID(subcategory)%2 == 1) result = result.slice(0, result.length/2);
    else                         result = result.slice(result.length/2, result.length);
    if(!brand) return result;
    return result.filter((p) => integerID(p.brandId) == integerID(brand));
}

export default async function Home({ searchParams }: any) {
    const params = await searchParams
    const category = params.category
    const subcategory = params.subcategory
    const brand = params.brand
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
