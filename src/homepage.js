import React from 'react';
import './App.css';

const Homepage = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <p>
           
          </p>
        </header>
        <div className="content">
        </div>
        <footer className="footer">
          <h1>About BASS</h1>
          <p>
BASS is a tax calculation system that provides businesses with an efficient and accurate way to calculate and manage their taxes. The system is designed to simplify the complex process of tax calculation and help businesses comply with tax laws and regulations.</p>
        </footer>
      </div>

      <div>
        <div className="buttons_upper">
          <button className="large-button"></button> 
          <button className="large1-button"></button>  
        </div>
        <div className="lower_buttons">
          <button className="small-button"></button>
          <button className="small1-button"></button> 
          <div className="viewhistory">
            <button>View history</button>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Homepage;
