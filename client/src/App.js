import { createContext, Fragment, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import { Router } from "./routes";
import Error from "./component/defaultLayout/errorPage/404";

export const authProvider = createContext();

function App() {
  return (
    <div className="relative App">
      <BrowserRouter>
        <Routes>
          {Router.map((item, index) => {
            const DefaultLayout = item.defaultLayout
              ? item.defaultLayout
              : Fragment;
            const Wraper = item.childrenOf ? item.childrenOf : Fragment;
            const Element = item.element;
            const Status = item.status || Fragment;
            return (
              <Route
                path={item.path}
                element={
                  <DefaultLayout>
                    <Status>
                      <Wraper>{Element}</Wraper>
                    </Status>
                  </DefaultLayout>
                }
              />
            );
          })}
          <Route path="*" element={<Error>Error</Error>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
