import React, { useRef, useState } from "react";
import { validateData } from "../utils/validateData";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSigninForm, setIsSigninForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
  };

  const handleButtonSubmit = () => {
    const ValidateMessage = validateData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(ValidateMessage);
    if (ValidateMessage) return;

    if (!isSigninForm) {
      // sign Up form logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName }));
            navigate("/browse");
          }).catch((error) => {
            setErrorMessage(error.message)
          });
          navigate("/browse")
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrorMessage(errorCode);
        });
    } else {
      // sign In form logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate("/browse")
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrorMessage(errorCode);
        });

    }
  };

  return (
    <>
      <div>
        <Header />
        <img
          className="absolute h-screen w-full brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
        <div className="absolute h-full w-full flex justify-center items-center">
          <div className="text-white p-8 bg-black bg-opacity-60">
            <h1 className="m-4 p-2 text-3xl font-semibold">
              {isSigninForm ? "Sign In" : "Sign Up"}
            </h1>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-80 h-[65%]  flex flex-col justify-center items-center"
            >
              {!isSigninForm && (
                <input
                  ref={name}
                  className="w-72 m-4 p-2 rounded-lg text-black"
                  type="text"
                  placeholder="Name"
                />
              )}
              <input
                ref={email}
                className="w-72 m-2 p-2 rounded-lg text-black"
                type="text"
                placeholder="Email"
              />
              <input
                ref={password}
                className="w-72 m-4 p-2 rounded-lg text-black"
                type="password"
                placeholder="Password"
              />

              <button
                className="w-72 m-4 p-2 rounded-lg bg-red-700"
                onClick={handleButtonSubmit}
              >
                {isSigninForm ? "Sign In" : "Sign Up"}
              </button>
            </form>
            {errorMessage === null ? (
              <></>
            ) : (
              <span className="m-4 p-2 text-red-600 text-lg font-bold">
                {errorMessage}
              </span>
            )}
            {isSigninForm ? (
              <p className="m-4 p-2 text-sm ">
                New To Netflix? <br />{" "}
                <span
                  onClick={toggleSigninForm}
                  className="cursor-pointer font-semibold underline"
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p className="m-4 p-2 text-sm">
                Already have an account ?<br />{" "}
                <span
                  onClick={toggleSigninForm}
                  className="cursor-pointer font-semibold underline"
                >
                  LogIn instead
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
