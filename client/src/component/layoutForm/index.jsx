import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import backround from "./img/backgroundForm.jpg";

export default function Form({ children }) {
  const navi = useNavigate();
  auth.onAuthStateChanged((user) => {
    if (user) {
      navi(-1, { replace: true });
    }
    console.log("auth change in Form page");
  });
  return (
    <div
      className="form_wraper w-screen h-screen bg-center bg-no-repeat bg-cover flex justify-center items-center"
      style={{
        backgroundImage: `url("${backround}")`,
      }}
    >
      {children}
    </div>
  );
}
