import './App.css';
import "./components/currencySelector.js"
import ConverterPanel from './components/converterPanel.js';

function App() {

  return (
    <div class = "card" style={{width: "30%"}}>
      <ConverterPanel/>
    </div>
  );
}

export default App;
