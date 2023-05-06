
import React from 'react';
import Homepage from './homepage';
import ReactDOM from 'react-dom';



function AboutUs() {

    const handleHomeClick = () => {
        ReactDOM.render(<Homepage />, document.body);
      };
    
    return (
        <div>
            <nav style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
                <h1>BAAS</h1>
                <div>
                    {/* Add future navigation options here */}
                </div>
            </nav>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, justo vel fermentum tincidunt, velit velit luctus nisl, non lacinia velit nulla vel velit. Sed euismod diam vel velit lacinia, vel tincidunt metus tincidunt.</p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{padding: '10px'}}>
                    <img src="team.jpg" alt="Team Picture" style={{width: '150px', height: '150px'}} />
                    <p>Team Leader</p>
                </div>
                <div style={{padding: '10px'}}>
                    <img src="placeholder.jpg" alt="Placeholder" style={{width: '150px', height: '150px'}} />
                    <p>Developer</p>
                </div>
                <div style={{padding: '10px'}}>
                    <img src="placeholder.jpg" alt="Placeholder" style={{width: '150px', height: '150px'}} />
                    <p>Designer</p>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{padding: '10px'}}>
                    <img src="placeholder.jpg" alt="Placeholder" style={{width: '150px', height: '150px'}} />
                    <p>Marketing</p>
                </div>
                <div style={{padding: '10px'}}>
                    <img src="placeholder.jpg" alt="Placeholder" style={{width: '150px', height: '150px'}} />
                    <p>Support</p>
                </div>
            </div>
            <h3> Our Supervisors</h3>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{padding: '10px'}}>
                    <img src="supervisor1.jpg" alt="Supervisor 1" style={{width: '150px', height: '150px'}} />
                    <p>Supervisor 1</p>
                </div>
                <div style={{padding: '10px'}}>
                    <img src="supervisor2.jpg" alt="Supervisor 2" style={{width: '150px', height: '150px'}} />
                    <p>Supervisor 2</p>
                </div>
                <div style={{padding: '10px'}}>
                    <img src="supervisor3.jpg" alt="Supervisor 3" style={{width: '150px', height: '150px'}} />
                    <p>Supervisor 3</p>
                </div>
            </div>
            <div style={{marginTop: '30px',
      
        
    }}><button onClick={handleHomeClick}>Back</button> </div>
  

        </div>
    );
}

export default AboutUs;