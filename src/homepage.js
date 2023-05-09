import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Incometax from "./Incometax";
import Vehicletax from "./Vehicletax";
import Vattax from "./Vattax";
import Salestax from "./Salestax";
import Navbar from "./Navbar";
import Viewhistory from "./Viewhistory";

function Homepage() {
  const handleIncometaxClick = () => {
    ReactDOM.render(<Incometax />, document.body);
  };

  const handlevehicletaxClick = () => {
    ReactDOM.render(<Vehicletax />, document.body);
  };

  const handlevattaxClick = () => {
    ReactDOM.render(<Vattax />, document.body);
  };

  const handlesalestaxClick = () => {
    ReactDOM.render(<Salestax />, document.body);
  };

  const handleViewHistoryClick = () => {
    ReactDOM.render(<Viewhistory />, document.body);
  };

  return (
    <>
      <Navbar />
      <div className="Image">
        {/* The App component */}
        <div className="App">
          {/* The header section */}
          <header className="App-header">
            <p>{/* Placeholder text */}</p>
          </header>
          {/* The content section */}
          <div className="content">{/* Empty */}</div>
          {/* The footer section */}
          <footer className="footer">
            {/* The about section */}
            <h1 className="B">About BASS</h1>
            <p className="A">
              {/* Description of BASS */}
              BASS is a tax calculation system that provides businesses with an
              efficient and accurate way to calculate and manage their taxes.
              The system is designed to simplify the complex process of tax
              calculation and help businesses comply with tax laws and
              regulations.
            </p>
            <p className="rights">
            © All Rights Reserved 2023
          </p>
          </footer>
          
        </div>

        {/* The buttons section */}
        <div>
          {/* The upper buttons */}
          <div className="buttons_upper">
            {/* Incometax button */}
            <div className="card1" onClick={handleIncometaxClick}>
              <div className="card-details1">
                <p className="text-body1">Income Tax</p>
              </div>
              <button className="card-button1">Calculate</button>
            </div>
            {/* Large 1 button */}
            <div className="card2" onClick={handlevehicletaxClick}>
              <div className="card-details2">
                <p className="text-body2">Vehicle Tax</p>
              </div>
              <button className="card-button2">Calculate</button>
            </div>
          </div>
          {/* The lower buttons */}
          <div className="lower_buttons">
            {/* Small button */}
            <div className="card3" onClick={handlevattaxClick}>
              <div className="card-details3">
                <p className="text-body3">VAT Tax</p>
              </div>
              <button className="card-button3">Calculate</button>
            </div>
            {/* Small 1 button */}
            <div className="card4" onClick={handlesalestaxClick}>
              <div className="card-details4">
                <p className="text-body4">Sales Tax</p>
              </div>
              <button className="card-button4">Calculate</button>
            </div>

          </div>
        </div>
      </div>
       {/* The View history button */}
       <div style={{ marginTop: "-70px", marginLeft: "735px"}}>
        <button onClick={handleViewHistoryClick}>View history</button>
      </div>
    </>
  );
}

export default Homepage;
