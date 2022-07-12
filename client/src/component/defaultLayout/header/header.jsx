import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./header.scss";
import logo from "../../layoutForm/img/logoD01.jpg";
import { auth, db } from "../../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Header() {
  const [search, setSearch] = useState("");
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsubrice = auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        let photoURL = user.photoURL;
        let displayName = user.displayName;
        if (photoURL) {
          const obj = {
            uid,
            photoURL,
            displayName,
          };
          setCurrentUser(obj);
        } else {
          getDoc(doc(db, "users", uid))
            .then((data) => {
              const result = data.data();
              photoURL = result.image;
              displayName = result.username;
              setCurrentUser({
                uid,
                photoURL,
                displayName,
              });
            })
            .catch((error) => {
              console.log("get", error);
            });
        }
      } else {
        setCurrentUser();
      }
    });
    return () => {
      unsubrice();
    };
  }, []);
  return (
    <div className="header_wraper">
      <div className="header_main container flex items-center justify-between">
        <div className="md:w-1/5 lg:w-2/5">
          <div className="logo w-20 h-20">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="header_controller md:w-4/5 lg:w-3/5 flex items-center justify-between">
          <div className="header_search hidden md:flex items-center">
            <input
              type="text"
              value={search}
              placeholder="Nhập tên sản phẩn cân tìm...."
              className="placeholder:italic w-80 placeholder:text-sm"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <ion-icon name="search-outline"></ion-icon>
            {search && (
              <div className="modal_search">
                <div className="modal_search--title flex items-center">
                  <div className="modal_search--icon flex items-center">
                    <ion-icon name="search-outline"></ion-icon>
                  </div>
                  <div className="px-2">
                    <span>Kết quả tìm kiếm cho '{search}'</span>
                  </div>
                </div>
                <div className="modal_search--values"></div>
              </div>
            )}
          </div>
          <div className="block md:hidden px-5">
            <Link
              to="/search"
              className="text-xl flex items-center text-gray-500 hover:text-gray-700"
            >
              <ion-icon name="search-outline"></ion-icon>
            </Link>
          </div>
          {!Boolean(currentUser) ? (
            <div className="header_btn_login">
              <Link to="/form/login" className="btn_login">
                Đăng nhập
              </Link>
            </div>
          ) : (
            <Link to="/user/profile">
              <img
                src={currentUser.photoURL}
                alt=""
                srcset={currentUser.photoURL}
                className="w-10 h-10 rounded-full"
                title={currentUser.displayName}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
