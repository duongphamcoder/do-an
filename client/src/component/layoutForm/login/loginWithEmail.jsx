import { useState } from "react";
import handle from "../../../handle";

export default function LoginWithEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login_email_wraper my-4">
      <div className="form_email_login">
        <div className="w-1/2 m-auto">
          <label htmlFor="" className="font-bold">
            Email
          </label>
        </div>
        <div className="form_email_item w-1/2 ">
          <input
            type="text"
            className="w-full"
            placeholder="Địa chỉ email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form_email_item w-1/2 ">
          <input
            type="password"
            className="w-full"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div
        className="btn_login_email w-1/2"
        onClick={() => {
          handle.signInWithEmail(email, password);
        }}
      >
        <span>đăng nhập</span>
      </div>
    </div>
  );
}
