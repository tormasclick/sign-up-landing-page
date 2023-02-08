import React from 'react';
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
              Lot B441, Rue de I'Institute, Ebene, Mauritius.
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
              <table className="table table-borderless" style={{width: "500px", float: "right"}}>
                <tbody>
                  <tr>
                    <td>
                      <p className="text-white text-left country-title">COUNTRIES</p>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                    <a href='https://mu.elipa.global/' target={'_blank'}>
                    <img src="/images/mauritius-icon.png" alt="mauritius" className="country-flag"
                    onMouseEnter={e => {
                    e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                    }}
                    onMouseLeave={e => {
                    e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                    }}
                    />
                    Mauritius
                    </a>
                    </td>
                    <td>
                      <a href='https://elipa.rw/' target={'_blank'}>
                      <img src="/images/rwanda-icon.png" alt="rwanda" className="country-flag"
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                        }}
                        onMouseLeave={e => {
                        e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                        }} 
                        /> 
                       Rwanda
                       </a>
                    </td>
                    <td>
                      <a href='https://mu.elipa.global/#' target={'_blank'}>
                      <img src="/images/somalia-icon.png" alt="rwanda" className="country-flag"
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                        }}
                        onMouseLeave={e => {
                        e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                        }}
                      /> 
                       Somalia
                       </a>
                    </td>
                    <td>
                      <a href='https://elipa.co.tz/' target={'_blank'}>
                      <img src="/images/tanzania-icon.png" alt="tanzania" class="country-flag" 
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                      }}
                      onMouseLeave={e => {
                      e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                      }}
                    /> 
                     Tanzania
                     </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href='https://ipayafrica.com/' target={'_blank'}>
                      <img src="/images/kenya-icon.png" alt="kenya" className="country-flag" 
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                        }}
                        onMouseLeave={e => {
                        e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                        }}
                      /> 
                       Kenya
                       </a>
                    </td>
                    <td>
                      <a href='https://elipa.cd/' target={'_blank'}>
                      <img src="/images/democratic-republic-of-congo-icon.png" alt="DRC" className="country-flag" 
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                        }}
                        onMouseLeave={e => {
                        e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                        }}
                      />
                       DR Congo
                       </a>
                      </td>
                    <td>
                      <a href='https://mu.elipa.global/' target={'_blank'}>
                        <img src="/images/malawi-icon.png" alt="malawi" class="country-flag" 
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                          }}
                          onMouseLeave={e => {
                          e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                          }}
                        /> 
                         Malawi
                         </a>
                        </td>
                        <td>
                          <a href='https://mu.elipa.global/' target={'_blank'}>
                        <img src="/images/nigeria-icon.png" alt="nigeria" class="country-flag" 
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                          }}
                          onMouseLeave={e => {
                          e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                          }}
                        /> 
                         Nigeria
                         </a>
                        </td>
                  </tr>
                  <tr>
                    <td>
                    <a href='https://elipa.co.ug/' target={'_blank'}>
                        <img src="/images/uganda-icon.png" alt="Uganda" class="country-flag" 
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                          }}
                          onMouseLeave={e => {
                          e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                          }}
                        /> 
                        Uganda
                        </a>
                        </td>
                    <td>
                    <a href='https://elipa.tg/' target={'_blank'}>
                        <img src="/images/togo-icon.png" alt="togo" class="country-flag" 
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                          }}
                          onMouseLeave={e => {
                          e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                          }}
                        /> 
                         Togo
                         </a>
                        </td>
                    <td>
                    <a href='#'>
                      <img src="/images/zambia-icon.png" alt="zambia" class="country-flag" 
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                      }}
                      onMouseLeave={e => {
                      e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                      }}
                    /> 
                     Zambia
                     </a>
                    </td>
                    <td>
                    <a href='#'>
                        <img src="/images/burundi-icon.png" alt="burundi" class="country-flag" 
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                          }}
                          onMouseLeave={e => {
                          e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                          }}
                        /> 
                         Burundi
                         </a>
                        </td>
                  </tr> 
                  </tbody>
                </table>  
                </p>           
        </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Body;
  

/**const Body = () => {
  return (
    <div className="d-flex align-items-center">
      <div className="container my-auto">
        <div className="row">
          <div className="col-md-6 col-sm-12 elipa-info" style={{backgroundColor: "#124aa1", padding: "20px", boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.25)"}}>
            <p className="text-white text-left contact-title">CONTACT US</p>
            <p className="text-white text-left contacts">
              <i className="fa fa-map-marker" aria-hidden="true"></i> 
              Office 2, Level 4, ICONEBENE,<br />
              Lot B441, Rue de I'Institute, Ebene, Mauritius.
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
              <table className="table table-borderless" style={{width: "385px", float: "right"}}>
                <tbody>
                  <tr>
                    <td>
                      <p className="text-white text-left country-title">COUNTRIES</p>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="images/mauritius-icon.png" alt="mauritius" className="country-flag" /> 
                      Mauritius
                    </td>
                    <td>
                      <img src="images/rwanda-icon.png" alt="rwanda" className="country-flag" /> 
                      Rwanda
                    </td>
                    <td>
                      <img src="images/somalia-icon.png" alt="rwanda" className="country-flag" /> 
                      Somalia
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="images/kenya-icon.png" alt="kenya" className="country-flag" /> 
                      Kenya
                    </td>
                    <td>
                      <img src="images/democratic-republic-of-congo-icon.png" alt="DRC" className="country-flag" />
                      DR Congo
                      </td>
                    <td>
                        <img src="images/malawi-icon.png" alt="malawi" class="country-flag" /> 
                        Malawi
                        </td>
                  </tr>
                  <tr>
                    <td>
                        <img src="images/uganda-icon.png" alt="kenya" class="country-flag" /> 
                        Uganda
                        </td>
                    <td>
                        <img src="images/togo-icon.png" alt="togo" class="country-flag" /> 
                        Togo
                        </td>
                    <td><img src="images/zambia-icon.png" alt="zambia" class="country-flag" /> 
                    Zambia
                    </td>
                  </tr>
                  <tr>
                    <td><img src="images/tanzania-icon.png" alt="tanzania" class="country-flag" /> 
                    Tanzania
                    </td>
                    <td>
                        <img src="images/nigeria-icon.png" alt="nigeria" class="country-flag" /> 
                        Nigeria
                        </td>
                    <td>
                        <img src="images/burundi-icon.png" alt="burundi" class="country-flag" /> 
                        Burundi
                        </td>
                  </tr>
                  </tbody>
                </table>  
                </p>           
        </div>
      </div>
    </div>
    );
}

export default Body;**/