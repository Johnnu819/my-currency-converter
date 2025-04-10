import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CurrencySelector = ({ label, value, onChange, options }) => {
  return (
    <div className="flex flex-col">
      <label for="currency-select" class="form-label">Select '{label}' currency</label>
      <select class="form-select" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;