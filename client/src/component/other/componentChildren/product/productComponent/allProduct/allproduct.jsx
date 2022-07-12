import "./index.scss";

function AdminAllProduct() {
  return (
    <div className="admin_allProduct--wraper">
      <div className="admin_allProduct--table relative bg-white pt-10 px-4 rounded-lg shadow-xl">
        <div className="admin_allProduct--table-tag absolute  rounded-md py-4 drop-shadow-xl">
          <span className="capitalize text-white text-xl font-bold px-3">
            product
          </span>
        </div>
        <div className="py-3">
          <table className="w-full table-auto">
            <thead>
              <tr className="capitalize">
                <th>name</th>
                <th>price</th>
                <th>sold</th>
                <th>in stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="product_item--profile flex items-center">
                    <div className="product_item--profile-image w-10">
                      <img
                        src="https://vn-test-11.slatic.net/p/deb3a4ae33cdf6308e955c056c49d82b.jpg"
                        alt=""
                        className="rounded-lg"
                      />
                    </div>
                    <div className="product_item--profile-name px-3">
                      <span className="font-semibold">quần thể thao Nike</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-sm font-medium text-gray-400">
                    1.000.000
                  </span>
                </td>
                <td>
                  <span className="font-semibold text-gray-400">100</span>
                </td>
                <td>
                  <span className="font-semibold text-gray-400">100</span>
                </td>
                <td>
                  <span className="font-semibold text-gray-400 capitalize hover:cursor-pointer hover:text-gray-700">
                    edit
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="product_item--profile flex items-center">
                    <div className="product_item--profile-image w-10">
                      <img
                        src="https://vn-test-11.slatic.net/p/deb3a4ae33cdf6308e955c056c49d82b.jpg"
                        alt=""
                        className="rounded-lg"
                      />
                    </div>
                    <div className="product_item--profile-name px-3">
                      <span className="font-semibold">quần thể thao Nike</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-sm font-medium text-gray-400">
                    1.000.000
                  </span>
                </td>
                <td>
                  <span className="font-semibold text-gray-400">100</span>
                </td>
                <td>
                  <span className="font-semibold text-gray-400">100</span>
                </td>
                <td>
                  <span className="font-semibold text-gray-400 capitalize hover:cursor-pointer hover:text-gray-700">
                    edit
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminAllProduct;
