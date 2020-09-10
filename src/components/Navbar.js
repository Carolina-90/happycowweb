import React, { Component } from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { openModal, openSearchModal } from "../actions";
import SearchModal from "./SearchModal";
class Navbar extends Component {
  renderModal = () => {
    if (this.props.showModal === false) return null;
    return <Modal />;
  };

  renderSearchModal = () => {
    if (this.props.showSearchModal === false) return null;
    return <SearchModal />;
  };

  render() {
    return (
      <nav className="navbar border-b-4 border-primary-500 sm:relative font-nunito border-b-4 border-purple-600  items-center z-10">
        <div className="container flex items-center px-4 md:px-2 xl:max-w-full xl:pl-8 xl:pr-8 h-16">
          <div className="flex xl:hidden items-center mx-2">
            <span>
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="gray"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </div>
          <div className="items-center md:mr-2">
            <a
              className="navbar-brand ml-4 mr-4 md:mr-0 md:ml-0"
              href="/"
              title="Homepage"
            >
              <img
                src={require("../assets/logo.svg")}
                alt="Happycow Logo"
                className="h-10"
              />
            </a>
          </div>

          <div className="hidden xl:flex flex-1 ">
            <ul className=" flex flex-1 justify-start items-center text-gray-700 font-extrabold ">
              <li className="group ml-8 cursor-pointer flex relative hover:bg-purple-700 hover:text-white h-full items-center px-2">
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
                <ul className="group-hover:block hidden w-full absolute top-0 left-0 mt-16 bg-purple-700 text-white font-light z-20 px-4 py-4 grid grid-cols-1 gap-0">
                  <li className="border-b border-gray-200 items-center py-1">
                    B&B Retreats
                  </li>
                  <li className="border-b border-gray-200 items-center py-1">
                    Add a Listing
                  </li>
                  <li className="border-b border-gray-200 items-center py-1">
                    Update a listing
                  </li>
                  <li className="border-b border-gray-200 items-center py-1">
                    Write Reviews
                  </li>
                  <li className="border-b border-gray-200 items-center py-1">
                    Upgrade My Listing
                  </li>
                  <li className="border-b border-gray-200 items-center py-1">
                    Search
                  </li>
                  <li className="items-center pt-1">Mobile Version</li>
                </ul>
              </li>
              <li className="group ml-8 cursor-pointer flex relative hover:text-white hover:bg-purple-700 h-full items-center px-2">
                <div className="flex">
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
                </div>
                <div className="group-hover:block hidden">
                  <ul className="w-48 absolute top-0 left-0 mt-16 bg-purple-700 text-white font-light z-20 px-4 py-4 grid grid-cols-1 gap-0">
                    <li className="border-b border-gray-200 items-center py-1">
                      Forum
                    </li>
                    <li className="border-b border-gray-200 items-center py-1">
                      Recipes
                    </li>
                    <li className="border-b border-gray-200 items-center py-1">
                      Travel
                    </li>
                    <li className="border-b border-gray-200 items-center py-1">
                      Health
                    </li>
                    <li className="border-b border-gray-200 items-center py-1">
                      Going Vegan
                    </li>
                    <li className="border-b border-gray-200 items-center py-1">
                      Veg Protein
                    </li>
                    <li className="border-b border-gray-200 items-center py-1">
                      Famous Veg
                    </li>
                    <li className="border-b border-gray-200 items-center py-1">
                      Humor
                    </li>
                    <li className="border-b border-gray-200 items-center py-1">
                      VegIQ Test
                    </li>
                    <li className="border-b border-gray-200 items-center py-1">
                      Vegetarianims
                    </li>
                    <li className="border-b border-gray-200 items-center py-1">
                      Raw Food
                    </li>
                    <li className="border-b border-gray-200 items-center py-1">
                      Environment
                    </li>
                    <li className="items-center pt-1">All Topics </li>
                  </ul>
                </div>
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
                  onClick={() => this.props.openModal()}
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

          <div className="navbar-mobile-btn flex flex-0-0-auto ml-auto xl:hidden">
            <span
              className="mr-2 text-purple-700 cursor-pointer "
              onClick={() => this.props.openSearchModal()}
            >
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
            <button
              onClick={() => this.props.openModal()}
              type="button"
              className="py-1 px-2 text-white font-nunito bg-purple-700 hover:bg-purple-300 rounded-md text-xs activated"
              data-trigger="modal"
              data-hc-target=".modal-login"
              data-click="observer"
              data-observe-type="nav-login-join-dialog"
            >
              Login / Join
            </button>
          </div>
        </div>
        {this.renderModal()}
        {this.renderSearchModal()}
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showModal: state.ui.showModal,
    showSearchModal: state.ui.showSearchModal,
  };
};

export default connect(mapStateToProps, {
  openModal,
  openSearchModal,
})(Navbar);
