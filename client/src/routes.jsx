import { Fragment } from "react";

import Public from "./component/statusLayout/public";
import Private from "./component/statusLayout/private/";

import DefaultLayout from "./component/defaultLayout/index";
import Form from "./component/layoutForm/index";
import Login from "./component/layoutForm/login/login";
import Register from "./component/layoutForm/register/register";
import Home from "./component/statusLayout/public/home";
import Product from "./component/statusLayout/public/product/index";
import ProductInCategory from "./component/statusLayout/public/product/productItem/productInCategory";
import Details from "./component/statusLayout/public/product/productItem/details";
import Profile from "./component/statusLayout/private/profile";
import Admin from "./component/other";
import AdminWrap from "./component/other/AdminWrap";
import AdminHome from "./component/other/componentChildren/home";
import AdminProduct from "./component/other/componentChildren/product";
import AdminLogin from "./component/other/form/login";

export const Router = [
  {
    path: "/form/login",
    element: <Login />,
    childrenOf: Form,
    status: Public,
    defaultLayout: Fragment,
  },
  {
    path: "/form/register",
    element: <Register />,
    childrenOf: Form,
    status: Public,
    defaultLayout: Fragment,
  },
  {
    path: "/",
    element: <Home />,
    childrenOf: null,
    status: Public,
    defaultLayout: DefaultLayout,
  },
  // bắt trường hợp đối với tất cả đường dẫn con của product thì product luôn active
  {
    path: "/product",
    element: <Product />,
    childrenOf: null,
    status: Public,
    defaultLayout: DefaultLayout,
  },
  {
    path: "/product/:category",
    element: <ProductInCategory />,
    childrenOf: Product,
    status: Public,
    defaultLayout: DefaultLayout,
  },
  {
    path: "/product/:category/detail",
    element: <Details />,
    childrenOf: Product,
    status: Public,
    defaultLayout: DefaultLayout,
  },
  {
    path: "/user/profile",
    element: <Profile />,
    childrenOf: null,
    status: Private,
    defaultLayout: DefaultLayout,
  },
  {
    path: "/admin-product",
    element: <AdminProduct />,
    childrenOf: null,
    status: Admin,
    defaultLayout: AdminWrap,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
    childrenOf: null,
    status: Admin,
    defaultLayout: null,
  },
  {
    path: "/admin",
    element: <AdminHome />,
    childrenOf: null,
    status: Admin,
    defaultLayout: AdminWrap,
  },
];

/*
path -> đường dẫn trang
element -> giao diện  trang
childrenOf -> giao diện này thuộc con của giao diện nào
status -> trang này là trang public hay private
defaultLayout -> Xác định xem này có thuộc giao diện riêng nào hay không,
                nếu không thì sẽ thuộc trang mặc định

*/
