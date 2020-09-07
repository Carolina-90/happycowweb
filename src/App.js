import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <nav className="navbar border-b-4 border-primary-500 sm:relative font-nunito border-b-4 border-purple-600">
        <div className="container flex items-center px-4 md:px-2 xl:max-w-full xl:pl-8 xl:pr-8">
          <div className="items-center md:mr-2">
            <a
              className="navbar-brand ml-4 mr-4 md:mr-0 md:ml-0"
              href="/"
              title="Homepage"
            >
              <img
                src={require("./assets/logo.svg")}
                alt="Happycow Logo"
                className="h-8"
              />
            </a>
          </div>

          <div className="flex flex-1">
            <ul className=" flex flex-1 justify-start items-center text-gray-700 font-extrabold ">
              <li className="ml-8 cursor-pointer flex relative hover:bg-purple-700 hover:text-white h-full items-center">
                Restaurants & Stores
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="chevron-down w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <ul className="absolute top-0 left-0 mt-16 bg-purple-700 text-white font-light z-20 px-4 py-4">
                  <li className="border-b-2 border-gray-200">B&B Retreats</li>
                  <li className="border-b-2 border-gray-200">Add a Listing</li>
                  <li className="border-b-2 border-gray-200">
                    Update a listing
                  </li>
                  <li className="border-b-2 border-gray-200">Write Reviews</li>
                  <li className="border-b-2 border-gray-200">
                    Upgrade My Listing
                  </li>
                  <li className="border-b-2 border-gray-200">Search</li>
                  <li className="border-b-2 border-gray-200">Mobile Version</li>
                </ul>
              </li>
              <li className="ml-8 cursor-pointer flex relative hover:text-white hover:bg-purple-700 h-full items-center">
                Veg Topics
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="chevron-down w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <ul className="absolute top-0 left-0 mt-16 bg-purple-700 text-white font-light z-20 px-4 py-4">
                  <li className="border-b-2 border-gray-200 py-1">Forum</li>
                  <li className="border-b-2 border-gray-200 py-1">Recipes</li>
                  <li className="border-b-2 border-gray-200 py-1">Travel</li>
                  <li className="border-b-2 border-gray-200 py-1">Health</li>
                  <li className="border-b-2 border-gray-200 py-1">
                    Going Vegan
                  </li>
                  <li className="border-b-2 border-gray-200 py-1">
                    Veg Protein
                  </li>
                  <li className="border-b-2 border-gray-200 py-1">
                    Famous Veg{" "}
                  </li>
                  <li className="border-b-2 border-gray-200 py-1">Humor </li>
                  <li className="border-b-2 border-gray-200 py-1">
                    VegIQ Test
                  </li>
                  <li className="border-b-2 border-gray-200 py-1">
                    Vegetarianims{" "}
                  </li>
                  <li className="border-b-2 border-gray-200 py-1">Raw Food </li>
                  <li className="border-b-2 border-gray-200 py-1">
                    Environment{" "}
                  </li>
                  <li className="border-b-2 border-gray-200 py-1">
                    All Topics{" "}
                  </li>
                </ul>
              </li>
              <li className="ml-8 cursor-pointer">Community</li>
              <li className="ml-8 cursor-pointer">Blog</li>
              <li className="ml-8 cursor-pointer">Feed The Cow</li>
            </ul>
            <ul
              id="navbar-logged-in"
              className="nav nav-right logged-in flex hidden items-center md:ml-auto md:h-60"
            ></ul>
            <ul
              id="navbar-logged-out"
              className="nav nav-right logged-out md:flex items-center md:ml-auto md:h-60 justify-end"
            >
              <li className="flex justify-center w-full md:w-auto mt-6 mb-6">
                <a
                  href="/add-listing"
                  className="text-purple-500 border-2 border-purple-700 rounded px-3 py-2"
                >
                  Add Listing
                </a>
              </li>
              <li className="hidden md:block md:mr-10">
                <button
                  type="button"
                  className="text-white bg-purple-700 rounded px-3 py-2 border-2 border-purple-700  ml-4 hover:bg-opacity-75"
                  data-trigger="modal"
                  data-hc-target=".modal-login"
                  data-click="observer"
                  data-observe-type="nav-login-join-dialog"
                >
                  Login / Join
                </button>
              </li>
            </ul>
          </div>
          <div className="navbar-notifications hidden flex-0-0-auto md:pr-2"></div>
          <div className="navbar-mobile-btn flex-0-0-auto ml-auto md:hidden">
            <button
              type="button"
              className="py-1 px-2 bg-primary-500 hover:bg-primary-300 rounded-md text-xs activated"
              data-trigger="modal"
              data-hc-target=".modal-login"
              data-click="observer"
              data-observe-type="nav-login-join-dialog"
            >
              Login / Join
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
