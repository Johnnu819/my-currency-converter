import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ConversionOutput = ({amount}) => {
    
    return(  
        <label class="form-label">{amount}</label>
    );
};

export default ConversionOutput