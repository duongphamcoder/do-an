import { useNavigate } from "react-router-dom";

import "./404.scss";
import error from "./img/errorImage1.jpg";

export default function Error() {
  const redirect = useNavigate();
  return (
    <div
      className="error_wraper w-screen h-screen"
      style={{
        backgroundImage: `url("${error}")`,
        backgroundOrigin: "content-box",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="error_back_btn">
        <span
          onClick={() => {
            redirect(-1);
          }}
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
          Trở về
        </span>
      </div>
    </div>
  );
}
