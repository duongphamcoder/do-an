import { useState } from "react";
import { Link } from "react-router-dom";

import RegisterWithEmail from "./registerWithEmail";

import "../index.scss";
import logo from "../img/logoD01.jpg";

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState(false);

  return (
    <div className="form_page  bg-white rounded-lg shadow-lg py-4">
      {registerEmail && (
        <div className="go_back_form">
          <ion-icon
            name="chevron-back-sharp"
            onClick={() => {
              setRegisterEmail(false);
            }}
          ></ion-icon>
        </div>
      )}
      <div className="logo flex justify-center">
        <Link to="/" className=" ">
          <img src={logo} alt="" srcset="" className="block w-24 h-24" />
        </Link>
      </div>
      <div className="title text-center py-2">
        <span className="text-3xl font-bold">Đăng ký tài khoản D01</span>
      </div>
      {!registerEmail ? (
        <div className="list_btn container py-4">
          <div className="row">
            <div className="col-12">
              <div
                className="btn_item w-1/2  my-2"
                onClick={() => {
                  setRegisterEmail(true);
                }}
              >
                <div className="btn_icon">
                  <ion-icon name="person-outline"></ion-icon>
                </div>
                <div className="btn_text">
                  <span>Sử dụng email</span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="btn_item w-1/2  my-2">
                <div className="btn_icon  text-red-600">
                  <ion-icon name="logo-google"></ion-icon>
                </div>
                <div className="btn_text">
                  <span>Tiếp tục với Google</span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="btn_item w-1/2  my-2">
                <div className="btn_icon text-blue-700">
                  <ion-icon name="logo-facebook"></ion-icon>
                </div>
                <div className="btn_text">
                  <span>Tiếp tục với Facebook</span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="btn_item w-1/2  my-2">
                <div className="btn_icon">
                  <ion-icon name="logo-github"></ion-icon>
                </div>
                <div className="btn_text">
                  <span>Tiếp tục với Github</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <RegisterWithEmail />
      )}
      <div className="redirect text-center py-4">
        <span>
          Bạn đã có tài khoản?
          <Link
            to="/form/login"
            className="no-underline font-bold text-red-500 hover:text-red-400"
          >
            Đăng nhập
          </Link>
        </span>
      </div>
    </div>
  );
}
