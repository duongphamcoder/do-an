import { useRef } from "react";
import { useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

import "./index.scss";

import NavbarCategory from "./navbar/navbar";

export default function Product({ children }) {
  const { category } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();

  const redirect = useNavigate();
  useEffect(() => {
    if (!Boolean(category) || !Boolean(searchParams.get("id"))) {
      redirect("/product/nike?id=62c68d23f2ae382289fad84f", { replace: true });
    }
  }, [redirect]);

  return (
    <>
      {category && (
        <div className="product_wraper flex relative">
          <NavbarCategory></NavbarCategory>
          <div className="product_content w-full">{children}</div>
        </div>
      )}
    </>
  );
}
