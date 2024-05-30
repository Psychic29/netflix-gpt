import React, { useEffect } from "react";
import LOGO_IMG from "../Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_ICON } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/GPTSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  const showGPTSearch = useSelector(store => store.GPT.showGPTSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignout = () => {
    signOut(auth).then(() => {}).catch(error => {
      // An error happened.
      navigate("/error");
    });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };
  return (
    <div className="absolute z-10 flex justify-between w-full p-8">
      <img className="mt-1 w-56 h-16 cover" src={LOGO_IMG} alt="logo-img" />

      {user &&
        <div className="flex justify-end items-center">
          {!showGPTSearch &&
            <button
              className="text-white -mt-5 font-bold mx-5 p-2 bg-purple-700 rounded-lg"
              onClick={handleGPTSearchClick}
            >
              GPT Search
            </button>}
          <div>
            <img
              src={USER_ICON}
              className="mt-1 w-14 cover rounded-lg"
              alt="user-icon"
            />
            <button
              onClick={handleSignout}
              className="text-red-500 my-2 cursor-pointer font-bold"
            >
              Sign Out
            </button>
          </div>
        </div>}
    </div>
  );
};

export default Header;
