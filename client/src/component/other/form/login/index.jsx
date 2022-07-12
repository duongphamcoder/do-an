import { useState } from "react";
import { useNavigate } from "react-router-dom";
import handle from "../../../../handle";
import image from "./img/image_login.jpg";
import "./index.scss";
function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const redirect = useNavigate();
  return (
    <div className="admin_login--wraper flex items-center justify-center">
      <div className="admin_login--form-wraper bg-white rounded-xl ">
        <div class="row h-full">
          <div className="col-lg-7 col-md-6 d-none d-md-block ">
            <div className="admin_login--form-image h-full">
              <img src={image} alt="" className="block h-full" />
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-12">
            <div className=" admin_login--form-items flex flex-col justify-center items-center">
              <div className="admin_login--form-items-title my-4 text-blue-400">
                <h1 className="uppercase">admin login</h1>
              </div>
              <div className="admin_login--form-items-input">
                <div className="admin_login--form-items-input-item flex w-80  rounded-3xl px-3 my-3">
                  <div className=" flex items-center text-2xl text-sky-500">
                    <ion-icon name="person-outline"></ion-icon>
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={username}
                      className="w-full bg-transparent outline-none py-2 px-3 placeholder:text-xs"
                      placeholder="Vui lòng điền vào trường này..."
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="admin_login--form-items-input-item flex w-80  rounded-3xl px-3 my-3">
                  <div className=" flex items-center text-2xl text-sky-500">
                    <ion-icon name="key-outline"></ion-icon>
                  </div>
                  <div className="flex-1">
                    <input
                      type={eye ? "text" : "password"}
                      value={password}
                      className="w-full bg-transparent outline-none py-2 px-3 placeholder:text-xs"
                      placeholder="Vui lòng điền vào trường này..."
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div
                    className=" flex items-center text-2xl text-gray-500 cursor-pointer"
                    onClick={() => {
                      setEye(!eye);
                    }}
                  >
                    {!eye ? (
                      <ion-icon name="eye-outline"></ion-icon>
                    ) : (
                      <ion-icon name="eye-off-outline"></ion-icon>
                    )}
                  </div>
                </div>
                <div className="admin_login--form-items-control">
                  <div
                    className="admin_login--form-items-control-item text-sm text-right
                   text-gray-400 cursor-pointer hover:text-gray-700"
                  >
                    <span>Forgot password?</span>
                  </div>
                  <div className="admin_login--form-items-control-item text-center py-4">
                    <button
                      className="admin_login--form-items-control-item-btn 
                    inline-block uppercase px-5 py-2 text-center text-white rounded-3xl cursor-pointer shadow-md"
                      onClick={async () => {
                        if (username === "" || password === "") {
                          alert("Vui lòng điền đầy đủ thông tin...");
                        } else {
                          handle.handleLoginAdminPage(
                            username,
                            password,
                            redirect
                          );
                        }
                      }}
                    >
                      login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
