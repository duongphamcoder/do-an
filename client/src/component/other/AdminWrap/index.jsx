import AdminHeader from "./header/header";
import "./index.scss";
function AdminWrap({ children }) {
  return (
    <div className="dashboar_wraper h-screen overflow-hidden bg-gray-100">
      <div className="row">
        <div className="d-xl-block col-xl-2 d-none">
          <AdminHeader></AdminHeader>
        </div>
        <div className="col-xl-10 col-12">
          <div className="admin_content--wrap pt-3 pr-2 h-screen">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminWrap;
