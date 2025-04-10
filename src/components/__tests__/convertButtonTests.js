import React from 'react';
import ReactDOMClient from 'react-dom/client';
import CurrencySelector from '../convertButton.js';
import ConvertButton from '../convertButton.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOMClient.createRoot(div).render(<ConvertButton on_click={() => 3}/>);
});