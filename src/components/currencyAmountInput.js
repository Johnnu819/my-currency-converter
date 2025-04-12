import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CurrencyAmountInput = ({amount, onChange}) => {
    return(
        <div className="flex flex-col">
            <label for="amount_input" class="form-label">Enter Value</label>
            <input type="number" class="form-control" 
                   id="amount_input" value={amount} onChange={(e) => onChange(e.target.value)}/>         
        </div>
    );
};

export default CurrencyAmountInput