import React, { useState } from 'react'

const Salestax = () => {

const [price, setPrice]=useState(0);
const [salespercent, setsalespercent]=useState(0);

const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handlesalespercentChange = (event) => {
    setsalespercent(event.target.value);
  };

  const calculateSalesTax = () => {
    
  }







 return (
<div> 
    <h2>Sales Tax Calculator</h2>
    <div>
        <label>
            Sales amount:
            <input type="number" value={salespercent} onChange={handlesalespercentChange} />
        </label>
    </div>
    <div>
        <label>
            Sales amount :
            <input type="number" value={price} onChange={handlePriceChange} />
        </label>
    </div>
 <div>
 <button onClick={calculateSalesTax}>Calculate Sales Tax</button>

 </div>

</div>




  );
};


export default Salestax;