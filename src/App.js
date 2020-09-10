import React, { Component } from "react";

import { connect } from "react-redux";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Offerts from "./components/Offerts";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Offerts />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(App);
