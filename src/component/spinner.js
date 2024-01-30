import React, { Component } from "react";
import spinnerImage from "./Spinner-5.gif";

class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={spinnerImage} className="my-3" alt="Loadingimage" />
      </div>
    );
  }
}

export default Spinner;
