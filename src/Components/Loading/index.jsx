import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class Loading extends React.Component {
  render() {
    return <Loader type="ThreeDots" color="#fff" height={40} width={80} />;
  }
}
