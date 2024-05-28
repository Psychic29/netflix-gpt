import React from "react";
import LOGO_IMG from "../Netflix_Logo_PMS.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignout = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className="absolute z-10 flex justify-between w-full p-8">
      <img className="mt-1 w-56 h-16 cover" src={LOGO_IMG} alt="logo-img" />

      {user && <div>
        <img
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
          className="mt-1 w-14 cover"
          alt="user-icon"
        />
        <button onClick={handleSignout} className="text-red-700 my-2 cursor-pointer  ">Sign Out</button>
      </div>
      }
    </div>
  );
};

export default Header;
