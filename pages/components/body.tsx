import React from 'react';
import Table from '../components/Table';

const Body = () => {
    return (
      <div className="d-flex align-items-center">
        <div className="container my-auto">
          <div className="row">
            <div className="col-md-12 col-sm-12 elipa-info" style={{backgroundColor: "#124aa1", padding: "50px", boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.25)"}}>
              <br></br>
              <p className="text-white text-center alert">
              Our registration portal is getting a makeover for a smoother experience! To complete your registration and access our enhanced services, please submit your KYC documents to <a href='mailto:sales@ipayafrica.com' style={{color: "#f29103", }}>sales@ipayafrica.com</a>. We appreciate your cooperation in this process. Thank you for choosing us!
              </p>
              <p className="text-center text-white tagline" >
                <span style={{color: "#f29103", }}>i</span >Pay: Payments made <span style={{ color: "#f29103", fontStyle: "italic" }}>Easy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Body;
