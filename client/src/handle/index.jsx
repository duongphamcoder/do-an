import { auth, db } from "../config/firebase";
import {
  setDoc,
  doc,
  getDocs,
  query,
  collection,
  where,
} from "firebase/firestore";
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import axios from "axios";

class Hanlde {
  // đăng nhập bằng fb, gg hoặc github
  signInWithFirebase(action) {
    switch (action) {
      case "facebook": {
        const fbProvider = new FacebookAuthProvider();
        signInWithPopup(auth, fbProvider)
          .then((result) => {})
          .catch((error) => {
            console.log("Error Fb", error);
          });

        break;
      }
      case "google": {
        const ggProvider = new GoogleAuthProvider();
        signInWithPopup(auth, ggProvider)
          .then((result) => {})
          .catch((error) => {
            console.log(error);
          });
        break;
      }
      default: {
        auth.signOut();
        console.log("Can not find Action");
        break;
      }
    }
  }

  // đăng nhập bằng email
  signInWithEmail(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Hanle", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Hanle", errorMessage);
      });
  }

  // đăng ký bằng email
  async signUpWithEmail(email, password, username, image, OTP, setIsOTP) {
    const verifyOTP = localStorage.getItem("OTP") === OTP.trim();
    if (verifyOTP) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            username,
            image,
            email: email.toLowerCase(),
          });
          console.log("Signup with email");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } else {
      setIsOTP(true);
    }
  }

  // xử lý gửi mã xác nhận
  async handleSendOTP(email, setIsEmail, onSendOTP) {
    const q = query(collection(db, "users"), where("email", "==", email));
    const result = await getDocs(q);
    if (result.size == 0) {
      const respone = await axios.post(`http://localhost:5000/user/sendOTP`, {
        email,
      });
      const data = respone.data;
      if (data.error) {
        console.log("Send mail failed..");
        onSendOTP(false);
      } else {
        localStorage.removeItem("OTP");
        const code = data.code;
        const timeClear = 10000 * 6 * 2;
        localStorage.setItem("OTP", code);
        setTimeout(() => {
          localStorage.removeItem("OTP");
        }, timeClear);
      }
    } else {
      setIsEmail(true);
      console.log("Email da ton tai");
    }
  }

  // xử lý đăng nhập trang admin
  async handleLoginAdminPage(username, password, redirect) {
    const resqone = await axios.post(
      `${process.env.REACT_APP_URI_SERVER}/user/login`,
      {
        username,
        password,
      }
    );
    const result = resqone.data;
    if (result.err) {
      localStorage.setItem("adminLogin", result._id);
      redirect("/admin");
    } else {
      alert(result.messsage);
    }
  }

  // xử lý thêm vào giỏ hàng
  handleAddToCart(product_id, size, amount, redirect) {
    if (auth.currentUser) {
      if (!Boolean(size)) {
        alert(`chưa chọn size ${size}`);
      } else {
        alert(`bạn đã chọn size có id: ${size}`);
      }
    } else {
      redirect("/form/login");
    }
  }

  // xử lý up ảnh lên cloudinary
  async handleUploadCloudinary(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ikplw4ix");
    formData.append("api_key", "355975891631955");
    formData.append("api_secret", "bF31cB70H4CAJ65_6q2RyP5Zjc8");
    return axios
      .post("https://api.cloudinary.com/v1_1/dsqs1mruw/image/upload", formData)
      .then((res) => res.data);
  }
}

export default new Hanlde();
