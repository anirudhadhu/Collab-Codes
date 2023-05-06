import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Homepage from './homepage';

const VatTaxCalculator = () => {
  const [price, setPrice] = useState(0);
  const [vatRate, setVatRate] = useState(13);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleVatRateChange = (event) => {
    setVatRate(event.target.value);
  };
  const handleHomeClick = () => {
    ReactDOM.render(<Homepage />, document.body);
  };

  const calculateVatTax = () => {
    const vatTax = price * vatRate;
    return vatTax.toFixed(2);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '10px',
      backgroundColor: 'lightblue',
    }}>
      <h2>VAT Tax Calculator</h2>
      <div>
        <label>
          Price (excl. VAT):
          <input type="number" value={price} onChange={handlePriceChange} />
        </label>
      </div>
      <div>
        <label>
          VAT Rate:
          <input type="number" step="0.01" value={vatRate} onChange={handleVatRateChange} />
        </label>
      </div>
      <div>
        <button onClick={calculateVatTax}>Calculate VAT Tax</button>
      </div>
      <div>
        {price > 0 && (
          <div>
            VAT Tax: NPR {calculateVatTax()} 
          </div>
        )}
        <div style={{marginTop: '30px',
      
        
    }}><button onClick={handleHomeClick}>Back</button> </div>
      </div>
    </div>
  );
};

export default VatTaxCalculator;
