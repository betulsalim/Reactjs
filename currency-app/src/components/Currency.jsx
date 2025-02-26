import React from "react";
import "../css/Currency.css";
import { TbArrowRightToArc } from "react-icons/tb";
import axios from "axios";
let BASE_URL ="https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_1V9mvBljZdWBexDtdRdAkOSEimUVW0QEAXiGDHz6";
let EXCHANGE_API = `${BASE_URL}?apikey=${API_KEY}`;
export const Currency = () => {
  const [amount, setAmount] = React.useState();
  const [fromCurrency, setFromCurrency] = React.useState('USD');
  const [toCurrency, setToCurrency] = React.useState('TRY');
  const [result, setResult] = React.useState();

  const exchange = async () => {
    // console.log(amount);
    // console.log(fromCurrency);
    // console.log(toCurrency);
    const response = await axios.get(`${EXCHANGE_API}&base_currency=${fromCurrency}`);
    console.log(response.data);
    console.log(response.data.data[toCurrency]) * amount;
    const result = ((response.data.data[toCurrency]) * amount).toFixed(2); //. dan sonra 2 tane sayı gelsin diye toFixed(2) kullandık.
    setResult(result);
  }

  return (
    <div className="currency-div">
      <div className="header">
        <h3 className="title">
          Döviz Kuru Uygulaması
        </h3>
      </div>
      <div>
      <input value={amount} onChange={(event) => setAmount(event.target.value)} type="number" className="amount"
      placeholder="Amount" />
      <select onChange={(event) => setFromCurrency(event.target.value)} className="from-currency-select">
        <option className="from-currency-option1">USD</option>
        <option className="from-currency-option2">EUR</option>
        <option className="from-currency-option3">TRY</option>
      </select>
      <TbArrowRightToArc style={{fontSize: '30px', marginLeft: '20px',color: 'white',backgroundColor:'blueviolet',
        borderRadius: '50%', padding: '10', border: '1px solid blueviolet'
      }} />
      <select onChange={(event) => setToCurrency(event.target.value)} className="to-currency-select">
        <option className="to-currency-option1">TRY</option>
        <option className="to-currency-option2">USD</option>
        <option className="to-currency-option3">EUR</option>
      </select>

      <input value={result} onChange={(event) => setResult(event.target.value)} type="number" className="result"
      placeholder="Result" />
      <div className="button-div" >
      <button onClick={exchange} className="button">Çevir</button>
      </div>

      </div>

    </div>
  );
};
