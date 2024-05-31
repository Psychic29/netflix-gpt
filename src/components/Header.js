import React, { useEffect } from "react";
import LOGO_IMG from "../Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/GPTSlice";
import { changeLanguage } from "../utils/configSlice";

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

  const handleLanguageChange = e => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full z-30">
      <div className="md:flex md:justify-between">
        <img
          className="mx-auto md:mx-0 w-56 h-16"
          src={LOGO_IMG}
          alt="logo-img"
        />
        {user &&
          <div className="md:m-3 mx-auto w-fit md:flex-row flex flex-col justify-center items-center">
            {showGPTSearch &&
              <select
                className="text-white font-bold bg-gray-700 rounded-lg p-2 m-1"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map(language =>
                  <option key={language.identifier} value={language.identifier}>
                    {language.name}
                  </option>
                )}
              </select>}
            <button
              className="text-white font-bold bg-purple-700 rounded-lg p-2 m-1"
              onClick={handleGPTSearchClick}
            >
              {!showGPTSearch ? "GPT Search" : "Home Page"}
            </button>

            <img
              src={USER_ICON}
              className="w-14 cover rounded-lg p-1 m-1"
              alt="user-icon"
            />
            <button
              onClick={handleSignout}
              className="text-red-500 my-2 cursor-pointer font-bold"
            >
              Sign Out
            </button>
          </div>}
      </div>
    </div>
  );
};

export default Header;

/**
 * <div className="absolute z-10 flex justify-between w-full p-8">
      <img className="mt-1 w-56 h-16 cover" src={LOGO_IMG} alt="logo-img" />

      {user &&
        <div className="flex justify-end items-center">
          {showGPTSearch &&
            <select
              className="text-white -mt-5 font-bold p-2 bg-gray-700 rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map(language =>
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              )}
            </select>}
          <button
            className="text-white -mt-5 font-bold mx-5 p-2 bg-purple-700 rounded-lg"
            onClick={handleGPTSearchClick}
          >
            {!showGPTSearch ? "GPT Search" : "Home Page"}
          </button>
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
 * 
 * 
 */
