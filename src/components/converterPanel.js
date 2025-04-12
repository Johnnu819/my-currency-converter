import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrencySelector from "./currencySelector";
import { useState } from "react";
import CurrencyAmountInput from "./currencyAmountInput";
import ConvertButton from "./convertButton";
import ConversionOutput from "./conversionOutput";
import useExchangeRates from "../api/useExchangeRates";

const ConverterPanel = () => {
    

    const exchange_rates = useExchangeRates()
    const [amount, setAmount] = useState(0)
    const currency_options = exchange_rates ? Object.keys(exchange_rates) : [];
    const [fromCurrency, setFromCurrency] = useState(currency_options[1]);
    const [toCurrency, setToCurrency] = useState(currency_options[2]);

    const convert = () => {
        if (!exchange_rates || !exchange_rates[fromCurrency] || !exchange_rates[toCurrency]) return 0;
        const inBase = amount / exchange_rates[fromCurrency]; // amount in base (EUR)
        const converted = inBase * exchange_rates[toCurrency];
        return converted.toFixed(2);
      };
    
    return(
        <div class = "card" style={{width: "100%"}}>
            <CurrencySelector label="from" value={fromCurrency} onChange={setFromCurrency} options={currency_options}/>
            <CurrencyAmountInput amount={amount} onChange={setAmount}></CurrencyAmountInput>
            <CurrencySelector label="to" value={toCurrency} onChange={setToCurrency} options={currency_options}/>
            <ConvertButton on_click = {() => alert("clicked")}/>
            <ConversionOutput amount = {convert()}/>
        </div>
    );
};

export default ConverterPanel