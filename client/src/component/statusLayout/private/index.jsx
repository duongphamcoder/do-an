import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../../config/firebase";

function Private({ children }) {
  const redirect = useNavigate();
  useEffect(() => {
    if (!auth.currentUser) {
      redirect("/form/login");
    }
  }, []);
  return <>{children}</>;
}

export default Private;
