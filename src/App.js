import logo from './logo.svg';
import './App.css';
import "./components/currencySelector.js"
import { useState } from "react";
import CurrencySelector from './components/currencySelector.js';
import ConvertButton from './components/convertButton.js';
import ConverterPanel from './components/converterPanel.js';

function App() {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const currencyOptions = ["USD", "EUR", "GBP", "JPY"];

  return (
    <div class = "card" style={{width: "30%"}}>
      <ConverterPanel currency_options={currencyOptions}></ConverterPanel>
    </div>
  );
}

export default App;
