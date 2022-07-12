import { useState } from "react";
import { Link } from "react-router-dom";

import LoginWithEmail from "./loginWithEmail";

import handle from "../../../handle";

import "../index.scss";
import logo from "../img/logoD01.jpg";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState(false);

  return (
    <div className="form_page  bg-white rounded-lg shadow-lg py-4">
      {loginEmail && (
        <div className="go_back_form">
          <ion-icon
            name="chevron-back-sharp"
            onClick={() => {
              setLoginEmail(false);
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
        <span className="text-3xl font-bold">Chào mừng đến với D01</span>
      </div>
      {!loginEmail ? (
        <div className="list_btn container py-4">
          <div className="row">
            <div className="col-12">
              <div
                className="btn_item w-1/2  my-2"
                onClick={() => {
                  setLoginEmail(true);
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
              <div
                className="btn_item w-1/2  my-2"
                onClick={() => {
                  handle.signInWithFirebase("google");
                }}
              >
                <div className="btn_icon  text-red-600">
                  <ion-icon name="logo-google"></ion-icon>
                </div>
                <div className="btn_text">
                  <span>Tiếp tục với Google</span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="btn_item w-1/2  my-2"
                onClick={() => {
                  handle.signInWithFirebase("facebook");
                }}
              >
                <div className="btn_icon text-blue-700">
                  <ion-icon name="logo-facebook"></ion-icon>
                </div>
                <div className="btn_text">
                  <span>Tiếp tục với Facebook</span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="btn_item w-1/2  my-2"
                onClick={() => {
                  handle.signInWithFirebase("github");
                }}
              >
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
        <LoginWithEmail />
      )}
      <div className="redirect text-center py-4">
        <span>
          Bạn chưa có tài khoản?{" "}
          <Link
            to="/form/register"
            className="no-underline font-bold text-red-500 hover:text-red-400"
          >
            Đăng ký
          </Link>
        </span>
      </div>
    </div>
  );
}
