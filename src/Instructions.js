import React from "react";
import Homepage from "./homepage";
import ReactDOM from "react-dom";

const InstructionPage = () => {
  const handleHomeClick = () => {
    ReactDOM.render(<Homepage />, document.body);
  };

  return (
    
    <div >
      <div style={{ marginTop: "0px" }}>
        <button onClick={handleHomeClick}>Back</button>{" "}
      </div>

      <h1>Tax Instruction Page</h1>
      <div className="card-container">
        <div className="card" >
          <h3>Income Tax</h3>
          <p>
            Income tax is a tax on your income. If you are employed, your
            employer will usually deduct income tax from your pay and send it to
            the government on your behalf. If you are self-employed, you will
            need to file an income tax return and pay any tax owed to the
            government.
          </p>
        </div>
        <div className="card" >
          <h3>Sales Tax</h3>
          <p>
            Sales tax is a tax on goods and services sold in your state. If you
            sell goods or services, you may be required to collect sales tax and
            send it to the government. To collect sales tax, you will need to
            register with your state's tax authority and obtain a sales tax
            permit.
          </p>
        </div>
        <div className="card">
          <h3>Vehicle Tax</h3>
          <p>
            Vehicle tax is a tax on vehicles, such as cars, trucks, and
            motorcycles. In most cases, you will need to pay vehicle tax when
            you purchase a new or used vehicle. The amount of vehicle tax you
            owe depends on the value of the vehicle and other factors.
          </p>
        </div>
        <div className="card">
          <h3>Value Added Tax (VAT)</h3>
          <p>
            Value Added Tax (VAT) is a tax on the value added to goods and
            services at each stage of production or distribution. VAT is
            typically charged as a percentage of the price of the goods or
            services. In some countries, VAT is known as a goods and services
            tax (GST).
          </p>
        </div>
      </div>

      <h3>How to Use Our System</h3>
      <p>
        To use our system, choose from one of the four tax types: Income Tax,
        Sales Tax, VAT Tax, or Vehicle Tax. You can also view your calculation
        history by clicking on the `View History` button. Please note that you
        must be logged in to access the `View History` page. On this page, you
        can edit your previous calculations or delete any unwanted calculations.
      </p>

      
    </div>
  );
};

export default InstructionPage;
