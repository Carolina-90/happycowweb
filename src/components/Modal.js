import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../actions";

function Modal({ closeModal }) {
  return (
    <div>
      <div className=" fixed top-0 left-0 w-full h-screen bg-gray-700 bg-opacity-50 items-center justify-around">
        <div
          style={{ top: "6rem", left: "50%" }}
          className="grid grid-cols-2 gap-0 bg-white flex absolute bg-white rounded shadow-lg w-auto h-auto transform -translate-x-1/2"
        >
          <div className="py-2 px-2">
            <h3 className="text-2xl text-gray-900 font-extrabold mb-2 ">
              Login to your account
            </h3>
            <form className="flex flex-col">
              <label className="mb-1 font-extrabold" for="username">
                Username or Email
              </label>
              <input
                type="text"
                placeholder="UserName or Email"
                name="username"
                className="border rounded border-gray-400 py-2 px-3 mb-2 "
              />
              <label className="mb-1 font-extrabold " for="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="border rounded border-gray-400 py-2 px-3"
              />
              <div className="flex items-center mb-3">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                <span className=" font-extrabold">
                  Remember me on this device
                </span>
              </div>
              <input
                type="submit"
                className="border rounded border-purple-700 px-2 py-2 my-2 bg-purple-600 text-white cursor-pointer hover:bg-purple-500 hover:border-purple-500 font-extrabold"
                value="Login"
              />
              <a className="text-purple-500 text-center cursor-pointer mb-6">
                Reset Password
              </a>
              <div className="w-full flex justify-center border-t-2 border-opacity-25">
                <span className="font-extrabold text-center bg-white transform -translate-y-1/2">
                  OR
                </span>
              </div>
              <input
                type="submit"
                className=" rounded border-black px-2 py-2 my-2 bg-gray-900 text-white cursor-pointer hover:bg-opacity-50 hover:border-opacity-50 font-extrabold"
                value="Register"
              />
            </form>
          </div>
          <div className="relative overflow-hidden">
            <img
              src={require("../assets/login-social.jpg")}
              className="h-full w-full"
            />
          </div>
          <button
            onClick={() => closeModal()}
            className="absolute top-0 right-0 h-8 w-8 bg-white rounded mt-3 mr-3 flex justify-center items-center"
          >
            <span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default connect(null, { closeModal })(Modal);
