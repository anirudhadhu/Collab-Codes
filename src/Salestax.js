import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Homepage from './homepage';

const Salestax = () => {

  const [price, setPrice] = useState();
  const [taxRate, setTaxRate] = useState();
  const [tax, setTax] = useState();

  const calculateTax = () => {
    const calculatedTax = (price * taxRate) / 100;
    setTax(calculatedTax);
  };

  const handleHomeClick = () => {
    ReactDOM.render(<Homepage />, document.body);
  };

  return (
    
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60vh',
      width:'1060px',
      padding: '10px',
      backgroundColor: 'lightblue',
    }}>

      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Tax Rate:
        <input type="number" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} />
      </label>
      <button onClick={calculateTax}>Calculate Tax</button>
      <p>Tax: {tax}</p>

      <div style={{marginTop: '30px',
      
        
    }}><button onClick={handleHomeClick}>Back</button> </div>
    </div>
  );
}

export default Salestax;