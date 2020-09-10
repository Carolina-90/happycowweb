import React, { Component } from "react";

export default class SearchModal extends Component {
  render() {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-white">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold">
            Search HappyCow
          </h1>
        </div>
      </div>
    );
  }
}
