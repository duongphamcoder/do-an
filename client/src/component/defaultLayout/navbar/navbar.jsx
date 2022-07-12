import { useRef } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.scss";

export default function Navbar() {
  const unActive = useRef(
    "navbar_item flex flex-col justify-center items-center px-3 py-2 mb-2 rounded-lg cursor-pointer"
  );
  const active = useRef(
    "navbar_item active flex flex-col justify-center items-center px-3 py-2 mb-2 rounded-lg cursor-pointer"
  );
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? active.current : unActive.current
        }
      >
        <div className="navbar_item--icon text-2xl">
          <ion-icon name="home-outline"></ion-icon>
        </div>
        <span className="text-xs font-bold">Home</span>
      </NavLink>
      <NavLink
        to="/product"
        className={({ isActive }) =>
          isActive ? active.current : unActive.current
        }
      >
        <div className="navbar_item--icon text-2xl">
          <ion-icon name="file-tray-stacked-outline"></ion-icon>
        </div>
        <span className="text-xs font-bold">Product</span>
      </NavLink>
      <NavLink
        to="/user/cart"
        className={({ isActive }) =>
          isActive ? active.current : unActive.current
        }
      >
        <div className="navbar_item--icon text-2xl">
          <ion-icon name="cart-outline"></ion-icon>
        </div>
        <span className="text-xs font-bold">Cart</span>
      </NavLink>
    </>
  );
}
