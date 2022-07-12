import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./home.scss";
import { useState } from "react";

export default function ContentHome() {
  const idProduct = useRef("123");
  const [homes, setHomes] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URI_SERVER}`)
      .then((data) => {
        const result = data.data;
        console.log("Home", result);
        setHomes(result);
      })
      .catch((err) => {
        console.log("Home", err);
      });
  }, []);

  return (
    <>
      {homes && (
        <div className="conten_home--wraper my-3 ">
          <div className="home_title py-2 text-center ">
            <span className="text-3xl font-black subpixel-antialiased">
              Sản phẩm nổi bật
            </span>
          </div>
          {homes.category.map((item, index) => {
            return (
              <div className="" key={item["name"]}>
                <div className="home_list_product--title text-2xl font-black py-2 uppercase">
                  {item["name"]}
                </div>
                <div className="row">
                  {homes.data[index].map((temp) => {
                    return (
                      <div
                        className="col-lg-3 col-md-4 col-sm-6 col-12"
                        key={temp.name}
                      >
                        <Link
                          to={`/product/${item["name"]}/detail?id=${temp._id}`}
                          className="home_list_product--item"
                        >
                          <div
                            className="home_list_product--item-image h-48 bg-green-500 rounded-2xl"
                            style={{
                              backgroundImage: `url('${temp.photoURL}')`,
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
                            <span className="text-base ">{temp.name}</span>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
