import NavbarListProduct from "./navbar";
import ProductItem from "./item";

export default function ProductInCategory() {
  return (
    <div className="list_product_with_category--wraper px-2">
      <NavbarListProduct></NavbarListProduct>
      <ProductItem></ProductItem>
    </div>
  );
}
