import React from "react";
import { useDispatch } from "react-redux";
import { setView } from "../../reduxToolkit/features/modalSlice";

const ResetPassword = () => {
  const dispatch = useDispatch();
  return (
    <form className="flex flex-col items-center w-full gap-4 text-gray-900">
      <div className="flex flex-col gap-4 items-center max-w-[230px] text-center">
        <img src="logo.png" alt="" />
        <h4 className="text-xl font-bold">Rest your Password</h4>
        <p>
          Enter the email associated with your account and we'll send you a
          reset link
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <input
          className="border-gray-300 rounded-lg"
          type="text"
          placeholder="Email"
        />

        <button className=" self-center px-6  text-sm md:text-base  py-2 font-bold text-white bg-[#57007B] rounded hover:bg-blue-700">
          Reset Password
        </button>
        <div className="text-xs text-center">
          <button
            type="button"
            onClick={() => {
              dispatch(setView({ view: "Login" }));
            }}
            className="ml-1 font-semibold text-blue-700"
            href="/"
          >
            LOGIN
          </button>
          <span> - OR -</span>
          <button
            type="button"
            onClick={() => {
              dispatch(setView({ view: "Signup" }));
            }}
            className="ml-1 font-semibold text-blue-700"
            href="/"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResetPassword;
