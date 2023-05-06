
import Homepage from "./homepage";
import ReactDOM from 'react-dom';

function Viewhistory() {
    const handleHomeClick = () => {
        ReactDOM.render(<Homepage />, document.body);
      };
    

    return (
      <> 
  
        <div style={{marginTop: '30px',
      
        
    }}><button onClick={handleHomeClick}>Back</button> </div>
        
        
       
      </>
    );
  }
  

  export default Viewhistory;