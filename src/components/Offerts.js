import React, { Component } from "react";

export default class Offerts extends Component {
  render() {
    return (
      <div className="z-10 text-gray-900 relative flex w-full max-w-6xl py-12 mx-auto font-nunito flex justify-between ">
        <div>
          <h3 className="text-3xl text-gray-700 font-extrabold ">
            Vegan Food Near Me
          </h3>
          <a className="text-purple-700 text-xs flex">
            <span className=" flex items-center font-extrabold">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </span>
            Use My Location
          </a>
        </div>

        <div>
          <span className="text-purple-700 font-extrabold flex">
            View All
            <span className=" flex items-center font-extrabold">
              <svg
                className="w-4 h-4 items-center "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </span>
          </span>
        </div>
      </div>
    );
  }
}
