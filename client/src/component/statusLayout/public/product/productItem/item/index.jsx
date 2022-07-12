import { useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
function ProductItem() {
  const [id, setID] = useSearchParams();
  const [products, setProducts] = useState();
  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_URI_SERVER
        }/product/list-product?category=${id.get("id")}`
      )
      .then((data) => {
        const result = data.data;
        console.log("PRITEM", result);
        setProducts(result);
      });
  }, [id]);
  return (
    <div className="conten_home--wraper product_item--wraper my-1  ">
      <div className="">
        <div className="row">
          {products &&
            products.products.map((item) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12"
                  key={item._id}
                >
                  <Link
                    to={`/product/nike/detail?id=${item._id}`}
                    className="home_list_product--item mt-3  block"
                  >
                    <div
                      className="home_list_product--item-image h-48 bg-green-500 rounded-2xl"
                      style={{
                        backgroundImage: `url('${item.photoURL}')`,
                        backgroundClip: "border-box",
                        backgroundOrigin: "border-box",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="home_list_product--item-image-modal items-center justify-center">
                        <span className="home_list_product--item-image-modal-btn bg-white px-4 py-2 ">
                          Chi tiết
                        </span>
                      </div>
                    </div>
                    <div className="home_list_product--item-name my-2">
                      <span className="text-base ">{item.name}</span>
                    </div>
                    <div className="home_list_product--item-name my-2 text-center">
                      <span className="text-red-500 font-bold text-xl">
                        {item.price}
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
