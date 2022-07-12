import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import handle from "../../../../../../handle/index";
import "./detail.scss";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
function Details() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [product, setProduct] = useState();
  const [sizes, setSizes] = useState();
  const [selectSize, setSelectSize] = useState();
  const [amountOfSize, setAmountOfSize] = useState();
  const active = useRef(
    "detail_product--infor-sizes-item active px-3 py-2 rounded-sm bg-slate-100 mx-2 hover:cursor-pointer hover:bg-slate-500 hover:text-white"
  );
  const unActive = useRef(
    "detail_product--infor-sizes-item px-3 py-2 rounded-sm bg-slate-100 mx-2 hover:cursor-pointer hover:bg-slate-500 hover:text-white"
  );

  const redirect = useNavigate();
  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_URI_SERVER
        }/product/details?id=${searchParams.get("id")}`
      )
      .then((data) => {
        const result = data.data;
        console.log("Details", result);
        setProduct(result.product);
        setSizes(result.sizes);
        setAmountOfSize(result.sizeOfProduct);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div
      className="details_wraper 
        container "
    >
      {product && (
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div
              className="detail_product--image  
        h-80 rounded-md"
              style={{
                backgroundImage: `url('${product.photoURL}')`,
                backgroundClip: "border-box",
                backgroundOrigin: "border-box",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="detail_product--infor">
              <div className="detail_product--infor-name pb-1">
                <span className="text-3xl font-extrabold ">{product.name}</span>
              </div>
              <div className="detail_product--infor-price py-2">
                <span className="text-red-500 text-xl ">{product.price}</span>
              </div>
              <div className="detail_product--infor-desc">
                <span className="italic">{product.desc}</span>
              </div>
              <div className="detail_product--infor-sizes py-3 flex items-center justify-center text-black">
                {sizes &&
                  sizes.map((item, index) => {
                    return (
                      <div
                        className={
                          selectSize === index
                            ? active.current
                            : unActive.current
                        }
                        key={item._id}
                        onClick={() => {
                          setSelectSize(index);
                        }}
                      >
                        <span className="">{item.name}</span>
                      </div>
                    );
                  })}
              </div>
              {Boolean(selectSize + 1) && (
                <div className="detail_product--infor-sizes-details text-center pb-3">
                  <span>
                    <span>Còn:</span>
                    <span className="text-lg font-bold">
                      {amountOfSize[selectSize].amount}
                    </span>{" "}
                    sản phẩm
                  </span>
                </div>
              )}
              <div className="detail_product--infor-btn">
                <span
                  className="flex items-center justify-center w-40 h-14 m-auto 
            text-white font-extrabold text-md  hover:cursor-pointer hover:bg-red-400 hover:text-slate-400"
                  onClick={() => {
                    handle.handleAddToCart(
                      searchParams.get("id"),
                      selectSize + 1 ? sizes[selectSize]._id : "",
                      1,
                      redirect
                    );
                  }}
                >
                  Thêm vào giỏ
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
