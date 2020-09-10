import React, { Component } from "react";

export default class Offerts extends Component {
  render() {
    return (
      <div className="w-full mx-auto ">
        <div className="z-0 text-gray-900 relative flex w-full max-w-6xl py-2 mx-auto font-nunito flex justify-between ">
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
        <div className="flex w-full max-w-6xl mx-auto mt-8">
          <div className="rounded-lg w-64 relative">
            <div className="absolute top-0 left-0 -ml-6 -mt-2">
              <img
                src="https://d1mvj2ulps5lli.cloudfront.net/other/friend-tag-list-group.svg"
                className="h-12 w-12"
              />
            </div>
            <div className="w-10 h-10 bg-white absolute top-0 right-0 rounded-full m-2 items-center flex justify-center">
              <span className="text-center">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="red"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </span>
            </div>
            <img
              className="h-48 w-full rounded-lg object-cover object-center"
              src={
                "https://images.happycow.net/venues/400x400/54/36/hcmp54367_531823.jpeg"
              }
            />
            <span className="items-center block flex ">
              <img
                src={require("../assets/category/category_veg-store2.svg")}
                className="h-4 w-4"
              />
              <span className="ml-2 text-green-800 font-bold hover:text-green-500 cursor-pointer ">
                La Maison Vegan
              </span>
            </span>
            <span className="text-xs font-extrabold text-gray-600 mb-4 ">
              Puteaux, France
            </span>
            <div className="flex mb-2 mt-2">
              <ul className="flex grid grid-cols-5 gap-1">
                <li>
                  <svg
                    className="w-4 h-4"
                    fill="#FFDF00"
                    stroke="#FFDF00"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    className="w-4 h-4"
                    fill="#FFDF00"
                    stroke="#FFDF00"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    className="w-4 h-4"
                    fill="#FFDF00"
                    stroke="#FFDF00"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    className="w-4 h-4"
                    fill="#FFDF00"
                    stroke="#FFDF00"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    className="w-4 h-4"
                    fill="#FFDF00"
                    stroke="#FFDF00"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                </li>
              </ul>
              <span className="ml-4 text-xs text-gray-700"> 6 reviews</span>
            </div>
            <span className="font-nunito text-gray-800 text-md">
              Vegan and organic retail shop est. 2018. Stocking specialty
              plant-based foods and goods, including vega...
            </span>
          </div>
        </div>
      </div>
    );
  }
}
