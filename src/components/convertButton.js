import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ConvertButton = ({ on_click }) => {
    return (
      <button
      class = "btn btn-primary"
      onClick = {on_click}>
        Convert
        </button>)
  };
  
  export default ConvertButton;