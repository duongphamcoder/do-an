import { useState } from "react";
import AdminNavProduct from "./navbar/navbar";
import AdminAllProduct from "./productComponent/allProduct/allproduct";
import AdminAddProduct from "./productComponent/addProduct/addproduct";
function AdminProduct() {
  const [indexNav, setIndexNav] = useState(0);
  return (
    <div className="admin_product--wraper pr-5">
      <AdminNavProduct props={{ indexNav, setIndexNav }}></AdminNavProduct>
      <div className="py-5">
        {indexNav === 0 ? <AdminAllProduct /> : <AdminAddProduct />}
      </div>
    </div>
  );
}

export default AdminProduct;
