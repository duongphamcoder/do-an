import { useEffect } from "react";
import { useState } from "react";

import handle from "../../../handle";

export default function RegisterWithEmail() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [OTP, setOTP] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isYourName, setIsYourName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isOTP, setIsOTP] = useState(false);
  const [actionSendOTP, setActionSendOTP] = useState(true);

  const handleCheckFiledNull = (username, email, password, OTP) => {
    if (username || email || password || OTP) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    console.log("Send OTP Failed");
  }, [actionSendOTP]);

  return (
    <div className="register_email_wraper">
      <div className="your_name w-1/2">
        <label htmlFor="yourName" className="font-bold">
          Tên của bạn?
        </label>
        <input
          type="text"
          placeholder="Họ và tên của bạn"
          className={`your_name--item block w-full py-2 px-3 my-2 ${
            isYourName && "error"
          }`}
          id="yourName"
          value={username}
          onChange={(e) => {
            if (!e.target.value.trim()) {
              setIsYourName(true);
            } else {
              setIsYourName(false);
            }
            setUsername(e.target.value);
          }}
          onBlur={(e) => {
            if (!e.target.value.trim()) {
              setIsYourName(true);
            } else {
              setIsYourName(false);
            }
          }}
        />
      </div>
      <div className="form_email_register  my-4 ">
        <div className="w-1/2 mx-auto">
          <label htmlFor="" className="font-bold">
            Email
          </label>
        </div>
        <div className={`form_email_item ${isEmail && "error"} w-1/2`}>
          <input
            type="text"
            className="w-full"
            placeholder="Địa chỉ email"
            value={email}
            onChange={(e) => {
              // kiểm tra xem email đó hợp lệ hay không hoặc có để trống không
              if (
                !e.target.value.trim() ||
                !e.target.value.match(
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
              ) {
                setIsEmail(true);
              } else {
                setIsEmail(false);
              }
              setEmail(e.target.value);
            }}
            onBlur={(e) => {
              if (
                !e.target.value.trim() ||
                !e.target.value.match(
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
              ) {
                setIsEmail(true);
              } else {
                setIsEmail(false);
              }
            }}
          />
        </div>
        {isEmail && (
          <div className="w-1/2 mx-auto text-xs text-red-500">
            <span>Email đã tồn tại. Vui lòng nhập Email khác. </span>
          </div>
        )}
        <div className={`form_email_item ${isPassword && "error"} w-1/2`}>
          <input
            type="password"
            className="w-full"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => {
              if (!e.target.value.trim() || e.target.value.length < 8) {
                setIsPassword(true);
              } else {
                setIsPassword(false);
              }
              setPassword(e.target.value);
            }}
            onBlur={(e) => {
              if (!e.target.value.trim() || e.target.value.length < 8) {
                setIsPassword(true);
              } else {
                setIsPassword(false);
              }
            }}
          />
        </div>
        <div className="w-1/2 mx-auto text-xs text-gray-500">
          <span>Gợi ý: Mật khẩu phải có ít nhất 8 ký tự.</span>
        </div>
        <div className={`form_email_item w-1/2 mt-3 flex ${isOTP && "error"}`}>
          <input
            type="text"
            className="w-full"
            placeholder="Nhập mã xác nhận"
            value={OTP}
            onChange={(e) => {
              if (!e.target.value.trim()) {
                setIsOTP(true);
              } else {
                setIsOTP(false);
              }
              setOTP(e.target.value);
            }}
            onBlur={(e) => {
              if (!e.target.value.trim()) {
                setIsOTP(true);
              } else {
                setIsOTP(false);
              }
            }}
          />
          <div className="w-44 p-1">
            <span
              className="flex items-center justify-center w-full h-full resend_code cursor-pointer text-white bg-green-700 hover:bg-green-600"
              onClick={() => {
                handle.handleSendOTP(email, setIsEmail);
              }}
            >
              Gửi mã
            </span>
          </div>
        </div>
        {isOTP && (
          <div className="w-1/2 mx-auto text-xs text-red-500">
            <span>OTP không đúng. Vui lòng chọn Gửi mã để nhận mã mới.</span>
          </div>
        )}
      </div>
      <div
        className="btn_login_email w-1/2"
        onClick={(e) => {
          handleCheckFiledNull(isEmail, isPassword, isYourName, isOTP) &&
            handle.signUpWithEmail(
              email,
              password,
              username,
              "https://kolsvietnam.vn/admin/upload/default-avatar.png",
              OTP,
              setIsOTP
            );
        }}
      >
        <span>đăng ký</span>
      </div>
    </div>
  );
}
