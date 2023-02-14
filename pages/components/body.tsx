import React from 'react';
import Table from '../components/Table';

const Body = () => {
    return (
      <div className="d-flex align-items-center">
        <div className="container my-auto">
          <div className="row">
          <div className="col-md-6 col-sm-12 elipa-info" style={{backgroundColor: "#124aa1", padding: "20px", boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.25)"}}>
            <p className="text-white text-left contact-title">CONTACT US</p>
            <br></br>
            <p className="text-white text-left contacts">
              <i className="fa fa-map-marker" aria-hidden="true"></i> 
                Office 2, Level 4, ICONEBENE,<br />
              Lot B441, Rue de I&apos;nstitute, Ebene, Mauritius.
            </p>
            <p className="text-white text-left contacts">
              <i className="fa fa-phone" aria-hidden="true"></i> +230 5788 5975
            </p>
            <p className="text-white text-left contacts">
              <i className="fa fa-envelope" aria-hidden="true"></i> 
              <a href="mailto:info@elipa.global">info@elipa.global</a>
            </p>
          </div>
          <div className="col-md-6 col-sm-12 elipa-info" style={{backgroundColor: "#124aa1", padding: "20px", boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.25)"}}>
            <p className="text-white text-right">
            <span className="text-white text-left country-title">COUNTRIES</span>
            </p>
            <Table />      
        </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Body;
