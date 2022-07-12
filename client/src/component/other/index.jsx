import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Admin({ children }) {
  const redirect = useNavigate();

  useEffect(() => {
    const check = localStorage.getItem("adminLogin");
    if (!check) {
      redirect("/admin/login");
    }
  }, []);
  return <>{children}</>;
}

export default Admin;
