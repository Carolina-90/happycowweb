import React, { Component } from "react";
import { connect } from "react-redux";
import { closeSearchModal } from "../actions";

class SearchModal extends Component {
  render() {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-white">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold flex  items-center justify-between my-8">
            Search HappyCow
            <div
              className="flex  "
              onClick={() => this.props.closeSearchModal()}
            >
              <svg
                className="w-6 h-6 text-gray-900 font-bold hover:text-red-600 cursor-pointer mr-4"
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
            </div>
          </h1>
        </div>
        <div className="flex mx-auto font-nunito font-extrabold text-sm text-gray-900 py-2 px-2 ">
          <ul className="flex w-full max-w-6xl mx-auto ">
            <li className="cursor-pointer mr-6 hover:text-purple-700"> All</li>
            <li className="cursor-pointer mr-6 hover:text-purple-700">
              Cities
            </li>
            <li className="cursor-pointer mr-6 hover:text-purple-700">
              Businesses
            </li>
            <li className="cursor-pointer mr-6 hover:text-purple-700">
              Famous
            </li>
            <li className="cursor-pointer mr-6 hover:text-purple-700">
              Recipes
            </li>
            <li className="cursor-pointer hover:text-purple-700"> Forum </li>
          </ul>
        </div>
        <div className="flex w-full max-w-6xl mx-auto max-w-2xl relative">
          <input
            className="flex-1  rounded-lg py-3 px-2  border border-gray-500 focus:outline-none focus:border-purple-600  focus:shadow-inner"
            //style={{ ":focus": "-webkit-focus-ring-color auto 1px" }}
            type="text"
            placeholder="Search all"
          />
          <button className="py-1 px-1 bg-purple-700 hover:bg-purple-500 flex absolute top-0 right-0 my-2 mx-2 items-center rounded-lg ">
            <span className="text-white text-md font-black justify-around items-center flex  ">
              <svg
                className="w-4 h-4 mx-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="mr-1">Search</span>
            </span>
          </button>
        </div>
      </div>
    );
  }
}
export default connect(null, {
  closeSearchModal,
})(SearchModal);
