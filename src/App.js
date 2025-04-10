import logo from './logo.svg';
import './App.css';
import "./components/currencySelector.js"
import CurrencySelector from './components/currencySelector.js';
import { useState } from "react";

function App() {

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const currencyOptions = ["USD", "EUR", "GBP", "JPY"];

  return (

    
    <CurrencySelector 
    label="To"
            value={toCurrency}
            onChange={setToCurrency}
            options={currencyOptions}></CurrencySelector>
  );
}

export default App;
