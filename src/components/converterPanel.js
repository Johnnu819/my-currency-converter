import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrencySelector from "./currencySelector";
import { useState } from "react";
import CurrencyAmountInput from "./currencyAmountInput";
import ConvertButton from "./convertButton";
import ConversionOutput from "./conversionOutput";

const ConverterPanel = ({currency_options}) => {
    
    const [fromCurrency, setFromCurrency] = useState(currency_options[1]);
    const [toCurrency, setToCurrency] = useState(currency_options[2]);
    const [amount, setAmount] = useState(0)
    
    return(
        <div class = "card" style={{width: "100%"}}>
            <CurrencySelector label="from" value={fromCurrency} onChange={setFromCurrency} options={currency_options}/>
            <CurrencyAmountInput amount={amount} onChange={setAmount}></CurrencyAmountInput>
            <CurrencySelector label="to" value={toCurrency} onChange={setToCurrency} options={currency_options}/>
            <ConvertButton on_click = {() => alert("clicked")}/>
            <ConversionOutput amount = {amount}/>
        </div>
    );
};

export default ConverterPanel