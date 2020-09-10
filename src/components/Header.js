import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(" ${require("../assets/background1.png")} ")`,
        }}
        className="relative w-full h-64 bg-cover bg-center flex flex-col items-center justify-center font-nunito "
      >
        <div class="w-full absolute left-0" style={{ bottom: "-175px" }}>
          <svg
            data-name="Cta layer"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1366 217"
            preserveAspectRatio="xMaxYMax meet"
          >
            <path
              d="M0,601a1849.2,1849.2,0,0,1,370-47c246.77-6.15,360,41.14,613,38,95.54-1.19,226.52-9.76,383-42q-.26,108.75-.5,217.5H-.5Z"
              fill="#ffffff"
              transform="translate(0 -550)"
            ></path>
          </svg>
        </div>
        <h1
          className="text-4xl text-white font-black "
          style={{
            textShadow: "0 1px 5px rgba(0,0,0,0.85)",
            fontSize: "2.5rem",
          }}
        >
          Find Vegan Restaurants Nearby
        </h1>
        <form className="flex w-full max-w-4xl ">
          <input
            className="flex-1 py-4 px-4 rounded-tl-lg rounded-bl-lg "
            type="text"
            placeholder="Search for city, region or zipcode"
          />
          <button className="h-14 w-16 bg-purple-700 hover:bg-purple-500 flex justify-center items-center rounded-tr-lg rounded-br-lg ">
            <span className="text-white text-xl font-black">
              <svg
                class="w-6 h-6"
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
            </span>
          </button>
        </form>
      </div>
    );
  }
}
