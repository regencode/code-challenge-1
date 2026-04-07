
export interface Product {
    id: string;
    brandId: string;
    name: string;
    price: number;
}
export function ProductCell(props: Product) {
  return (
    <div className="border border-white">     
        <img 
        className="w-[80%] mx-auto"
        src="https://placehold.co/600x400/png" />
        <div className="w-[80%] mx-auto flex flex-row justify-between">
            <h3 className="text-xl">{props.name}</h3>
            <p>Rp {props.price}</p>
        </div>
    </div>
  )
}

