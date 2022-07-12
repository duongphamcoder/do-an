import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./header.scss";
function AdminHeader() {
  const redirect = useNavigate();
  const active = useRef(
    "admin_navbar--item active flex items-center px-4 py-2 hover:cursor-pointer"
  );
  const unActive = useRef(
    "admin_navbar--item flex items-center px-4 py-2 hover:cursor-pointer"
  );
  return (
    <div className="admin_header--wraper h-screen pt-3 pl-3 pb-3">
      <div className="admin_header--navbar-wraper h-full p-3 rounded-xl relative">
        <div className="admin_header--navbar-profile-user">
          <div className="admin_header--navbar-profile-user-avatar w-24 m-auto">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMJf32XCdIMPR005aLZbkk5TldBubjW2CfA&usqp=CAU"
              alt=""
              className="rounded-full"
            />
          </div>
          <div className="admin_header--navbar-profile-user-name text-center py-3 text-lg">
            <span className="capitalize  text-white">
              Wellcome <span className="uppercase">admin</span>
            </span>
          </div>
        </div>
        <div className="admin_header--navbar-list my-3">
          <NavLink
            to="/admin"
            className="admin_header--navbar-item flex text-white px-3 py-2 rounded-md"
          >
            <div className="admin_header--navbar-item-icon flex items-center text-xl font-extrabold">
              <ion-icon name="document-text-outline"></ion-icon>
            </div>
            <div className="admin_header--navbar--item-title px-3 text-md font-normal capitalize">
              <span>Dashboard</span>
            </div>
          </NavLink>
          <NavLink
            to="/admin-product"
            className="admin_header--navbar-item flex text-white px-3 py-2 rounded-md"
          >
            <div className="admin_header--navbar-item-icon flex items-center text-xl font-extrabold">
              <ion-icon name="receipt-outline"></ion-icon>
            </div>
            <div className="admin_header--navbar--item-title px-3 text-md font-normal capitalize">
              <span>Product</span>
            </div>
          </NavLink>
          <NavLink
            to="/admin-user"
            className="admin_header--navbar-item flex text-white px-3 py-2 rounded-md"
          >
            <div className="admin_header--navbar-item-icon flex items-center text-xl font-extrabold">
              <ion-icon name="people-circle-outline"></ion-icon>
            </div>
            <div className="admin_header--navbar--item-title px-3 text-md font-normal capitalize">
              <span>user</span>
            </div>
          </NavLink>
        </div>
        <div
          className=" btn-logout my-5 flex text-white px-3 py-2 rounded-md absolute"
          onClick={() => {
            localStorage.removeItem("adminLogin");
            redirect("/admin/login");
          }}
        >
          <div className="admin_header--navbar-item-icon flex items-center text-xl font-extrabold">
            <ion-icon name="log-out-outline"></ion-icon>
          </div>
          <div className="admin_header--navbar--item-title px-3 text-md font-normal capitalize">
            <span>logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
