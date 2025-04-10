import logo from './logo.svg';
import './App.css';
import "./components/currencySelector.js"
import { useState } from "react";
import CurrencySelector from './components/currencySelector.js';
import ConvertButton from './components/convertButton.js';

function App() {

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const currencyOptions = ["USD", "EUR", "GBP", "JPY"];

  return (

    
    <ConvertButton on_click = {() => alert("clicked")}/>
  );
}

export default App;
