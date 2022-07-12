import "./index.scss";

function AdminHome() {
  return (
    <div className="admin_home--wraper" style={{ height: "3000px" }}>
      <div className="admin_home--information-wraper py-4">
        <div className="row">
          <div className="col-3">
            <div className="admin_home--information-manage bg-white h-40 rounded-xl relative">
              <div
                className="admin_home--information-manage-tag absolute
               w-20 h-20 bg-gray-800 rounded-xl text-white text-3xl flex items-center justify-center"
              >
                <span>
                  <ion-icon name="card"></ion-icon>
                </span>
              </div>
              <div className="admin_home--information-manage-content p-3">
                <div className="admin_home--information-manage-content-item-firt capitalize text-right">
                  <span
                    className="admin_home--information-manage-content-item-title
                   text-md text-gray-400 font-normal block"
                  >
                    total money
                  </span>
                  <span
                    className="admin_home--information-manage-content-item-title
                   text-3xl text-black font-bold block"
                  >
                    $53k
                  </span>
                </div>
                <hr className=" dark breakpoint" />
                <div className="admin_home--information-manage-content-item-last">
                  <span className="raito text-zinc-400">
                    <span className="text-green-600 font-bold">+55%</span> than
                    last week
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="admin_home--information-manage bg-white h-40 rounded-xl relative">
              <div
                className="admin_home--information-manage-tag absolute
               w-20 h-20 bg-pink-600 rounded-xl text-white text-3xl flex items-center justify-center"
              >
                <span>
                  <ion-icon name="person-circle"></ion-icon>
                </span>
              </div>
              <div className="admin_home--information-manage-content p-3">
                <div className="admin_home--information-manage-content-item-firt capitalize text-right">
                  <span
                    className="admin_home--information-manage-content-item-title
                   text-md text-gray-400 font-normal block"
                  >
                    all user
                  </span>
                  <span
                    className="admin_home--information-manage-content-item-title
                   text-3xl text-black font-bold block"
                  >
                    1.200
                  </span>
                </div>
                <hr className=" dark breakpoint" />
                <div className="admin_home--information-manage-content-item-last">
                  <span className="raito text-zinc-400">
                    <span className="text-green-600 font-bold">+5%</span> than
                    last week
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="admin_home--information-manage bg-white h-40 rounded-xl relative">
              <div
                className="admin_home--information-manage-tag absolute
               w-20 h-20 bg-pink-600 rounded-xl text-white text-3xl flex items-center justify-center"
              >
                <span>
                  <ion-icon name="person-circle"></ion-icon>
                </span>
              </div>
              <div className="admin_home--information-manage-content p-3">
                <div className="admin_home--information-manage-content-item-firt capitalize text-right">
                  <span
                    className="admin_home--information-manage-content-item-title
                   text-md text-gray-400 font-normal block"
                  >
                    all user
                  </span>
                  <span
                    className="admin_home--information-manage-content-item-title
                   text-3xl text-black font-bold block"
                  >
                    1.200
                  </span>
                </div>
                <hr className=" dark breakpoint" />
                <div className="admin_home--information-manage-content-item-last">
                  <span className="raito text-zinc-400">
                    <span className="text-green-600 font-bold">+5%</span> than
                    last week
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="admin_home--information-manage bg-white h-40 rounded-xl relative">
              <div
                className="admin_home--information-manage-tag absolute
               w-20 h-20 bg-red-500 rounded-xl text-white text-3xl flex items-center justify-center"
              >
                <span>
                  <ion-icon name="file-tray-full"></ion-icon>
                </span>
              </div>
              <div className="admin_home--information-manage-content p-3">
                <div className="admin_home--information-manage-content-item-firt capitalize text-right">
                  <span
                    className="admin_home--information-manage-content-item-title
                   text-md text-gray-400 font-normal block"
                  >
                    no process
                  </span>
                  <span
                    className="admin_home--information-manage-content-item-title
                   text-3xl text-black font-bold block"
                  >
                    1.200
                  </span>
                </div>
                <hr className=" dark breakpoint" />
                <div className="admin_home--information-manage-content-item-last">
                  <span className="raito text-zinc-400">
                    <span className="text-green-600 font-bold">+5%</span> than
                    last week
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
