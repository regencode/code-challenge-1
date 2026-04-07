export interface IdNamePair {
  id: string;
  name: string;
}

export interface Category extends IdNamePair {}
export interface SubCategory extends IdNamePair {
  categoryId: string;
}
export interface Brand extends IdNamePair {
  subCategoryId: string;
}
export interface Product {
  id: string;
  brandId: string;
  name: string;
  price: number;
}