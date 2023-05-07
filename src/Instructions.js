import React from "react";
import Homepage from "./homepage";
import ReactDOM from "react-dom";
import "./instruction.css";

const InstructionPage = () => {
  const handleHomeClick = () => {
    ReactDOM.render(<Homepage />, document.body);
  };

  return (
    <div>
      <div style={{ marginTop: "0px", marginLeft: "1300px" }}>
        <button onClick={handleHomeClick}>Back</button>{" "}
      </div>

      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "30px",
          color: "black",
        }}
      >
        Tax Instruction Page
      </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div class="Income">
          <div class="Income-details">
            <p class="text-body">About Income Tax</p>
          </div>
          <button class="Income-button">
            In Nepal, income tax is governed by the Income Tax Act, 2058 (2002)
            and its subsequent amendments. The act outlines the rules and
            regulations for the taxation of income earned by individuals,
            businesses, and corporations in Nepal.Income tax is a tax on your
            income. If you are employed, your employer will usually deduct
            income tax from your pay and send it to the government on your
            behalf. If you are self-employed, you will need to file an income
            tax return and pay any tax owed to the government. Individuals in
            Nepal are required to pay income tax on their earnings, which are
            classified into various tax brackets depending on the amount earned.
            The tax rate ranges from 1% to 30%, with higher rates applied to
            higher income earners.
          </button>
        </div>

        <div class="Vehicle">
          <div class="Vehicle-details">
            <p class="text-body">About Vehicle Tax</p>
          </div>
          <button class="Vehicle-button">
            In Nepal, vehicle tax is a tax that is imposed on the ownership or
            use of motor vehicles. The vehicle tax is collected by the
            government of Nepal and is used to fund various public services,
            such as road maintenance and infrastructure development. The amount
            of vehicle tax you owe depends on the value of the vehicle and other
            factors.Overall, vehicle tax and other taxes and fees associated
            with owning or using a vehicle in Nepal can be significant, and it
            is important for vehicle owners to be aware of their obligations and
            to comply with the applicable rules and regulations.
          </button>
        </div>

        <div class="VAT">
          <div class="VAT-details">
            <p class="text-body">About Value Added Tax</p>
          </div>
          <button class="VAT-button">
            Value Added Tax (VAT) is a tax on the value added to goods and
            services at each stage of production or distribution. VAT is
            typically charged as a percentage of the price of the goods or
            services. In some countries, VAT is known as a goods and services
            tax (GST).
          </button>
        </div>

        <div class="sales">
          <div class="sales-details">
            <p class="text-body">Sales Added Tax</p>
          </div>
          <button class="sales-button">
            Sales tax is a tax on goods and services sold in your state. If you
            sell goods or services, you may be required to collect sales tax and
            send it to the government. To collect sales tax, you will need to
            register with your state's tax authority and obtain a sales tax
            permit.
          </button>
        </div>
      </div>

      <div class="using">
        <div class="using-details">
          <p class="text-body">How to Use Our System ?</p>
        </div>
        <button class="using-button">
          To use our system, choose from one of the four tax types: Income Tax,
          Sales Tax, VAT Tax, or Vehicle Tax. You can also view your calculation
          history by clicking on the `View History` button. Please note that you
          must be logged in to access the `View History` page. On this page, you
          can edit your previous calculations or delete any unwanted
          calculations.
        </button>
      </div>
    </div>
  );
};

export default InstructionPage;
