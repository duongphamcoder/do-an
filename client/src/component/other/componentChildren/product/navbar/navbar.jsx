import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./navbar.scss";
function AdminNavProduct({ props }) {
  return (
    <div
      className="admin_nav_product--wraper h-16 bg-white rounded-lg 
    shadow-md flex items-center justify-center"
    >
      <div className="admin_nav_product-list bg-slate-100 inline-flex p-1 rounded-xl relative">
        <div
          className={`admin_nav_product-list--item ${
            props.indexNav === 0 && "active rounded-xl shadow-md"
          }  flex items-center px-3 py-2 `}
          onClick={() => {
            props.setIndexNav(0);
          }}
        >
          <div className="flex items-center text-xl">
            <ion-icon name="list" className=""></ion-icon>
          </div>
          <span className="capitalize px-2">all product</span>
        </div>
        <div
          className={`admin_nav_product-list--item ${
            props.indexNav === 1 && "active rounded-xl shadow-md"
          }  flex items-center px-3 py-2 `}
          onClick={() => {
            props.setIndexNav(1);
          }}
        >
          <div className="flex items-center text-xl">
            <ion-icon name="create"></ion-icon>
          </div>
          <span className="capitalize px-2">add product</span>
        </div>
        <div
          className={`admin_nav_product-list--item ${
            props.indexNav === 2 && "active rounded-xl shadow-md"
          }  flex items-center px-3 py-2 `}
          onClick={() => {
            props.setIndexNav(2);
          }}
        >
          <div className="flex items-center text-xl">
            <ion-icon name="settings"></ion-icon>
          </div>
          <span className="capitalize px-2">setting</span>
        </div>
      </div>
    </div>
  );
}

export default AdminNavProduct;
