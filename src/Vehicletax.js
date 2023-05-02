import React, { useState } from 'react';

const Vehicletax = () => {
const [vehicleType, setVehicleType] = useState('bike');
const [ccType, setCcType] = useState('100');

const [vehicleTax, setVehicleTax] = useState(0);

const handleVehicleTypeChange = (event) => {
setVehicleType(event.target.value);
};

const handleCcTypeChange = (event) => {
setCcType(event.target.value);
};

const calculateVehicleTax = () => {

    let tax = 0;

    if (vehicleType === 'bike') {
      if (ccType <= 125) {
        tax = 2800;
      } else if (ccType <= 160) {
        tax = 4500;
      } else if (ccType <= 250) {
        tax = 5500;
      } else if (ccType <= 400) {
        tax = 9000;
      } else if (ccType <= 650) {
        tax = 20000;
      } else {
        tax = 30000;
      }
    } else if (vehicleType === 'car') {
      if (ccType <= 1000) {
        tax = 21000;
      } else if (ccType <= 1500) {
        tax = 23500;
      } else if (ccType <= 2000) {
        tax = 25500;
      } else if (ccType <= 2500) {
        tax = 35500;
      } else if (ccType <= 2900) {
        tax = 41000;
      } else {
        tax = 41000 + (Math.floor((ccType - 2900) / 100) * 2500);
      }
    }










// ...
setVehicleTax(tax);
};

return (












    <><div>
         <nav className="navbar" style={{display:'flex',justifyContent:'space-between', alignItems:'center', backgroundColor:'white',padding:'10px',boxShadow:'0 2px 4px rgb(129, 128, 128)'}}
>

      <div className="navbar__left">
        <img src={require('./images/1logo.png')} alt="Logo" style={{ width: "100px", height: "50px" }} />
      </div>



      <div className="navbar__right">
        <ul className="navbar__links"
        
        style={{display:'flex', listStyle:'none', margin:'0', padding:0, marginLeft:'2rem', color:'black', fontWeight:'bold', }}>


          <li style={{marginRight:'10px'}}><a href="/">Home</a></li>


          <li style={{marginRight:'10px'}}><a href="/about">About Us</a></li>


          <li style={{marginRight:'10px'}}><a href="/instructions">Instructions</a></li>
          
          
        </ul>
      </div>
    </nav>

        
        
        
        
        
        
        
        
        
        
        </div><div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        width: '150vh',
        border: '0px solid blue',
        borderRadius: '10px',
        padding: '10px',
        backgroundColor: 'lightblue',
        transform: 'translateY(2cm)',
        margin: 'auto',
    }}>
        <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: 'blue'
        }}>
            Vehicle Tax Calculator
        </h1>
        <div style={{ marginBottom: '20px' }}>
            <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
                Vehicle Type:
            </label>
            <select
                value={vehicleType}
                onChange={handleVehicleTypeChange}
                style={{ padding: '5px', borderRadius: '5px' }}
            >
                <option value="bike">Bike</option>
                <option value="car">Car</option>
            </select>
        </div>
        <div style={{ marginBottom: '20px' }}>
            <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
                CC Type:
            </label>
            <input
                type="text"
                value={ccType}
                onChange={handleCcTypeChange}
                style={{ padding: '5px', borderRadius: '5px' }} />
        </div>
        <button
            onClick={calculateVehicleTax}
            style={{
                padding: '10px',
                background: 'blue',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
        >
            Calculate Tax
        </button>
        <div style={{
            marginTop: '20px',
            fontWeight: 'bold'
        }}>
            Vehicle Tax: {vehicleTax}
        </div>
    </div></>

);
};

export default Vehicletax;