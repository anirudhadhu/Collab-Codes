import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Homepage from './homepage';

const Incometax = () => {

  const [employeeType, setEmployeeType] = useState('unmarried');
  const [fiscalYear, setFiscalYear] = useState('2079/2080');
  const [monthlySalary, setMonthlySalary] = useState(0);
  const [numMonths, setNumMonths] = useState(12);
  const [annualDeduction, setAnnualDeduction] = useState({
    employeeType: 'married', // or 'unmarried'
    socialSecurityFund: 0,
    employeesProvidentFund: 0,
    citizenInvestmentTrust: 0,
    insurance: 0,
    spouseDeduction: 0, // add this line
  });
  const [tax, setTax] = useState(0);

  const handleEmployeeTypeChange = (event) => {
    setEmployeeType(event.target.value);
  };

  const handleFiscalYearChange = (event) => {
    setFiscalYear(event.target.value);
  };



  const handleMonthlySalaryChange = (event) => {
    setMonthlySalary(event.target.value);
  };

  const handleNumMonthsChange = (event) => {
    setNumMonths(event.target.value);
  };

  const handleSocialSecurityFundChange = (event) => {
    setAnnualDeduction({
      ...annualDeduction,
      socialSecurityFund: event.target.value,
    });
  };

  const handleEmployeesProvidentFundChange = (event) => {
    setAnnualDeduction({
      ...annualDeduction,
      employeesProvidentFund: event.target.value,
    });
  };

  const handleHomeClick = () => {
    ReactDOM.render(<Homepage />, document.body);
  };

  const handleInsuranceChange = (event) => {
    setAnnualDeduction({
      ...annualDeduction,
      insurance: event.target.value,
    });
  };

  const calculateTax = () => {
    let taxableIncome;
    if (employeeType === 'unmarried') {
      taxableIncome = monthlySalary *numMonths  - annualDeduction.socialSecurityFund - annualDeduction.employeesProvidentFund - annualDeduction.citizenInvestmentTrust - annualDeduction.insurance;
     
    } else if (employeeType === 'married') {
      taxableIncome = (monthlySalary * numMonths)  - annualDeduction.socialSecurityFund - annualDeduction.employeesProvidentFund - annualDeduction.citizenInvestmentTrust - annualDeduction.insurance - annualDeduction.spouseDeduction;
    }
    // Tax calculation formula
    let taxAmount = 0;
    if (taxableIncome <= 500000) {
      taxAmount = taxableIncome * 0.01;
    } else if (taxableIncome <= 700000) {
      taxAmount = 500000 * 0.01 + (taxableIncome - 500000) * 0.1;
    } else if (taxableIncome <= 1000000) {
      taxAmount = 500000 * 0.01 + 200000 * 0.1 + (taxableIncome - 700000) * 0.2;
    } else if (taxableIncome <= 2000000) {
      taxAmount = 500000 * 0.01 + 200000 * 0.1 + 300000 * 0.2 + (taxableIncome - 1000000) * 0.3;
    } else {
      taxAmount = 500000 * 0.01 + 200000 * 0.1 + 300000 * 0.2 + 1000000 * 0.3 + (taxableIncome - 2000000) * 0.36;
    }
  
    // Additional tax calculation formula for married employees
    if (employeeType === 'married') {
      if (taxableIncome <= 600000) {
        taxAmount = taxableIncome * 0.01;
      } else if (taxableIncome <= 800000) {
        taxAmount = 600000 * 0.01 + (taxableIncome - 600000) * 0.1;
      } else if (taxableIncome <= 1100000) {
        taxAmount = 600000 * 0.01 + 200000 * 0.1 + (taxableIncome - 800000) * 0.2;
      } else if (taxableIncome <= 2000000) {
        taxAmount = 600000 * 0.01 + 200000 * 0.1 + 300000 * 0.2 + (taxableIncome - 1100000) * 0.3;
      } else {
        taxAmount = 600000 * 0.01 + 200000 * 0.1 + 300000 * 0.2 + 900000 * 0.3 + (taxableIncome - 2000000) * 0.36;
      }
    }
    setTax(taxAmount);


    
  };


  return (   
    
 




<div style={{ display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', top:'-400px' }}>
  <div style={{ border: ' black', borderRadius: 10, padding: '70px 50px', marginBottom: '-50px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around',backgroundColor:'lightblue' , top:'-50px', position:'relative',top:'120px'  }}>
    <label htmlFor="employee-type" style={{ width: '150px', }}>Nature of Employee:</label>
    <select id="employee-type" value={employeeType} onChange={handleEmployeeTypeChange} style={{ width: '200px',marginBottom:'10px',border: '1px solid black', padding: 7, borderRadius: 10, backgroundColor: 'white', fontSize: 'small', fontWeight: 'bold', textAlign: 'center', color: 'black' , marginRight:30}}>
      <option value="unmarried">Unmarried</option>
      <option value="married">Married</option>
    </select>
  
    <label htmlFor="fiscal-year" style={{ width: '150px' }}>Fiscal Year:</label>
    <select id="fiscal-year" value={fiscalYear} onChange={handleFiscalYearChange} style={{ width: '200px',marginBottom:'10px', border: '1px solid black', padding: 7, borderRadius: 10, backgroundColor: 'white', fontSize: 'small', fontWeight: 'bold', textAlign: 'center', color: 'black' }}>
      <option value="2079/2080">2079/2080</option>
      <option value="2080/2081">2080/2081</option>
      {/* Add more options for other fiscal years */}
    </select>
    </div>


   <div style={{ display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100vh',  }}>
    <div style={{  borderRadius: 1, padding: '50px 50px', marginBottom: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around',backgroundColor:'lightblue' , top:'30px', position:'relative' }}>
      <h1 style={{fontSize:'15px', borderBottom:'1px solid black'}}>Annual Income</h1>
   

    <label htmlFor="monthly-salary" style={{ width: '150px' }}>Monthly Salary:</label>
    <input type="number" id="monthly-salary" value={monthlySalary} onChange={handleMonthlySalaryChange} style={{ width: '200px',marginBottom:'10px',border: '1px solid black', padding: 7, borderRadius: 10, backgroundColor: 'white', fontSize: 'small', fontWeight: 'bold', textAlign: 'center', color: 'black' }} />

    <label htmlFor="num-months" style={{ width: '150px' }}>Number of Months Worked:</label>
    <input type="number" id="num-months" value={numMonths} onChange={handleNumMonthsChange} style={{ width: '200px',marginBottom:'10px',border: '1px solid black', padding: 7, borderRadius: 10, backgroundColor: 'white', fontSize: 'small', fontWeight: 'bold', textAlign: 'center', color: 'black' }} />


    </div>

  <div style={{ display:'flex', 
  flexDirection: 'row',
   alignItems: 'center', 
   justifyContent: 'center',
    height: '100vh',
     marginLeft:10  }} >



      
    <div style={{  borderRadius: 1, padding: '20px 50px', marginBottom: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around',backgroundColor:'lightblue',top:'-15px', position:'relative', marginTop:'90px'  }}>
    <h1 style={{fontSize:'15px', borderBottom:'1px solid black'}}>Annual deduction</h1>

    <label htmlFor="social-security-fund" style={{ width: '150px' }}>Social Security Fund:</label>
    <input type="number" id="social-security-fund" value={annualDeduction.socialSecurityFund} onChange={handleSocialSecurityFundChange} style={{ width: '200px',marginBottom:'10px',border: '1px solid black', padding: 7, borderRadius: 10, backgroundColor: 'white', fontSize: 'small', fontWeight: 'bold', textAlign: 'center', color: 'black' }} />

    <label htmlFor="employees-provident-fund" style={{ width: '150px' }}>Employee's Provident Fund:</label>
    <input type="number" id="employees-provident-fund" value={annualDeduction.employeesProvidentFund} onChange={handleEmployeesProvidentFundChange} style={{ width: '200px',marginBottom:'10px',border: '1px solid black', padding: 7, borderRadius: 10, backgroundColor: 'white', fontSize: 'small', fontWeight: 'bold', textAlign: 'center', color: 'black' }} />


    <label htmlFor="insurance">Insurance:</label>
    <input type="number" id="insurance" value={annualDeduction.insurance} onChange={handleInsuranceChange} />
  
<button
  onClick={calculateTax}
  style={{
    marginTop: '20px', // Update this value to move the button down
    display: 'block',
    margin: '0 auto',
    border: 'none',
    backgroundColor: '#3d405b',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: '17px',
    padding: '10px',
    width: '130px',
    borderRadius: '4px',
    cursor: '-moz-grab'
  }}
>
  Calculate Tax
</button>    <div>
    <p>Tax Amount: {tax}</p></div>
 
    
  </div>
  </div>
  <div style={{marginTop: '30px',
      
        
    }}><button onClick={handleHomeClick}>Back</button> </div>
</div>

</div>



);
}

export default Incometax;













