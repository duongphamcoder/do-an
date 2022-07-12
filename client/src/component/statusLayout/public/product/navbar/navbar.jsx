import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./navbar.scss";
import { useState } from "react";

function NavbarCategory() {
  const [categorys, setCategorys] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URI_SERVER}/product/category`)
      .then((data) => {
        const result = data.data;
        console.log("NavPr", result);
        setCategorys(result);
      })
      .catch((error) => {
        console.log("NavPr", error);
      });
  }, []);
  return (
    <div className="nav_bar--wraper w-80 ">
      <div
        className="navbar--title text-center 
                  text-2xl font-bold underline"
      >
        <span>Danh sách</span>
      </div>
      <div className="navbar_list_category">
        <ul className="p-0">
          {categorys &&
            categorys.categorys.map((item, index) => {
              return (
                <li
                  className="navbar_list_category--item my-2 font-bold text-lg"
                  key={item["name"]}
                >
                  <NavLink
                    to={`/product/${item["name"]}?id=${item["_id"]}`}
                    className="link block px-4 py-2 uppercase"
                  >
                    {item["name"]}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default NavbarCategory;
