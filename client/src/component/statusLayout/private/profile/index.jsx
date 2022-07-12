import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../../config/firebase";

import coverImage from "./img/coverImage.jpg";
import "./index.scss";
function Profile() {
  const [userTemp, setUserTemp] = useState();
  const [user, loading, error] = useAuthState(auth);
  const redirect = useNavigate();
  useEffect(() => {
    if (!loading) {
      if (user.photoURL) {
        const obj = {
          uid: user.uid,
          photoURL: user.photoURL,
          displayName: user.displayName,
        };
        setUserTemp(obj);
      } else {
        getDoc(doc(db, "users", user.uid))
          .then((data) => {
            const result = data.data();
            const photoURL = result.image;
            const displayName = result.username;
            setUserTemp({
              uid: user.id,
              photoURL,
              displayName,
            });
            console.log(result);
          })
          .catch((error) => {
            console.log("get", error);
          });
      }
    }
  }, []);
  return (
    <div className="profile_wraper">
      <div className="container">
        <div className="profile_avatar mb-20">
          <div
            className="profile_cover_image bg-image h-80 rounded-4 relative"
            style={{ backgroundImage: `url("${coverImage}")` }}
          >
            <div
              className="profile_avatar--item bg-image absolute
             w-44 h-44 bg-white rounded-full"
              style={{
                backgroundImage: `${
                  userTemp ? `url('${userTemp.photoURL}')` : "#fff"
                }`,
              }}
            >
              <div className="">
                <label
                  htmlFor="image"
                  className="icon_update-image text-3xl font-extrabold absolute"
                >
                  <ion-icon name="add-outline"></ion-icon>
                </label>
                <input type="file" id="image" hidden accept=".jpg, .png" />
              </div>
            </div>
          </div>
        </div>
        <div className="profile_username text-center text-3xl font-black">
          <span>{userTemp && userTemp.displayName}</span>
        </div>
        <button
          onClick={() => {
            auth.signOut();
            redirect("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
