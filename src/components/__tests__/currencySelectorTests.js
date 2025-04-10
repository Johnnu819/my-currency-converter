import React from 'react';
import ReactDOMClient from 'react-dom/client';
import CurrencySelector from '../currencySelector.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOMClient.createRoot(div).render(<CurrencySelector 
    label = "to"
    value = "USD"
    onChange = "EUR"
    options = {["JPY", "EUR", "USD"]}/>);
});