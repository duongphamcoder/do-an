import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../../../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import "./index.scss";

const products = [
  {
    photoURL:
      "https://salt.tikicdn.com/ts/tmp/90/ea/b6/46a59ab7220f5bf29c4c2b624e8c651d.jpg",
    name: "tên sản phẩm",
    size: "m",
    _id: "123",
    quantity: "1",
    price_default: "1.000.000",
    total: "1.000.000",
  },
  {
    photoURL:
      "https://salt.tikicdn.com/ts/tmp/90/ea/b6/46a59ab7220f5bf29c4c2b624e8c651d.jpg",
    name: "tên sản phẩm",
    size: "s",
    _id: "1233",
    quantity: "2",
    price_default: "500.000",
    total: "1.000.000",
  },
];

function Cart() {
  const [user, loading, error] = useAuthState(auth);
  const [payments, setPayment] = useState([]);
  const [carts, setCarts] = useState([]);

  function handlePayment(_id) {
    setPayment((prev) => {
      if (prev.includes(_id)) {
        return prev.filter((item) => item !== _id);
      }
      return [...prev, _id];
    });
  }

  useEffect(() => {
    if (user) {
      axios
        .get(`${process.env.REACT_APP_URI_SERVER}/user/cart?id=${user.uid}`)
        .then((res) => {
          setCarts(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  function handleUpdateQuantity(index, step) {
    const control_change_quantity_input = document.querySelectorAll(
      ".control_change_quantity--input>input"
    )[index];
    const control_change_quantity_toltal = document.querySelectorAll(
      ".control_change_quantity--toltal>span"
    )[index];
    const quantity = +control_change_quantity_input.value + step;
    if (quantity === 0) {
      return;
    }
    control_change_quantity_input.value = quantity;
    let totalTemp =
      products[index].price_default.replaceAll(".", "") * quantity + "";
    let dotsIndex = totalTemp.length - 3;
    while (dotsIndex > 0) {
      const temp1 = totalTemp.substring(0, dotsIndex);
      const temp2 = totalTemp.substring(dotsIndex);
      totalTemp = temp1 + "." + temp2;
      dotsIndex -= 3;
    }
    control_change_quantity_toltal.textContent = totalTemp;
  }

  return (
    <div className="shopping_cart_wraper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="shopping_cart_title text-center pb-3">
              <h1 className="capitalize font-bold font-mono">shopping cart</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8 ">
            <div className="shopping_cart_list_product--wraper bg-gray-50 rounded-lg overflow-hidden py-3 px-4">
              {products.map((item, index) => {
                return (
                  <div
                    className="shopping_cart_list_product--item flex justify-between py-3 border-b-2"
                    key={item._id}
                  >
                    <div className="flex items-center">
                      <div
                        className="shopping_cart_list_product--item-image w-28 h-32 bg-green-500 rounded-lg"
                        style={{
                          backgroundImage: `url('${item.photoURL}')`,
                          backgroundClip: "border-box",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div className="shopping_cart_list_product--item-profile px-3">
                        <div className="shopping_cart_list_product--item-profile-name text-lg font-bold py-2">
                          <span>{item.name}</span>
                        </div>
                        <div className="shopping_cart_list_product--item-profile-size py-1">
                          <span>
                            Size: <span className="uppercase">{item.size}</span>
                          </span>
                        </div>
                        <div className="shopping_cart_list_product--item-profile-control flex py-1">
                          <div
                            className="shopping_cart_list_product--item-profile-control-item bg-blue-500 
                          text-xl flex items-center p-2 mr-2 rounded-lg text-white font-extrabold shadow-md hover:bg-blue-600 cursor-pointer"
                          >
                            <ion-icon name="trash-sharp"></ion-icon>
                          </div>
                          <div
                            className={`shopping_cart_list_product--item-profile-control-item 
                            bg-white text-xl flex items-center p-2 mr-2 rounded-lg ${
                              payments.includes(item._id)
                                ? "text-red-500"
                                : "text-gray-400"
                            } font-extrabold shadow-md  cursor-pointer`}
                            onClick={() => {
                              handlePayment(item._id);
                            }}
                          >
                            <ion-icon name="heart-sharp"></ion-icon>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="control_change_quantity">
                      <div className="flex">
                        <button
                          className={`control_change_quantity--btn border h-10 flex items-center px-2 rounded-md cursor-pointer bg-blue-500 hover:bg-blue-600 text-white text-xl`}
                          onClick={() => {
                            handleUpdateQuantity(index, -1);
                          }}
                        >
                          <ion-icon name="remove-sharp"></ion-icon>
                        </button>
                        <div className="control_change_quantity--input mx-2">
                          <input
                            type="text"
                            className="w-14 h-10 rounded-sm py-2 px-1 border outline-none"
                            value={item.quantity}
                            disabled={true}
                            onChange={(e) => {}}
                          />
                        </div>
                        <button
                          className="control_change_quantity--btn border h-10 flex items-center
                         px-2 rounded-md cursor-pointer bg-blue-500 hover:bg-blue-600 text-white text-xl"
                          onClick={() => {
                            handleUpdateQuantity(index, 1);
                          }}
                        >
                          <ion-icon name="add-sharp"></ion-icon>
                        </button>
                      </div>
                      <div
                        className="control_change_quantity--toltal text-center
                        py-3 font-semibold text-lg
                      "
                      >
                        <span>{item.total}</span>
                      </div>
                      <div className="btn_update_cart text-center">
                        <span className="inline-block text-xs  uppercase bg-green-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-green-600">
                          cập nhật
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-4 ">
            <div className="payment-wraper bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
