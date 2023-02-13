
import React from 'react';

const Table = () => {
  return (
    <table className="table table-borderless" style={{width: "500px", float: "right"}}>
      <tbody>
        <tr>
          <td>
            <a href='https://mu.elipa.global/' target={'_blank'}>
              <i className="elipa_icon elipa_mauritius-flag country-flag spin"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                }}
              ></i>
              <span style={{float: "center"}}>Mauritius</span>
            </a>
          </td>
          <td>
            <a href='https://elipa.rw/' target={'_blank'}>
              <i className="elipa_icon elipa_rwanda-flag country-flag"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                }}
              ></i>
              Rwanda
            </a>
          </td>
          <td>
            <a href='https://mu.elipa.global/#' target={'_blank'}>
              <i className="elipa_icon elipa_somalia-flag country-flag"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                }}
              ></i>
              Somalia
            </a>
          </td>
          <td>
            <a href='https://elipa.co.tz/' target={'_blank'}>
              <i className="elipa_icon elipa_tanzania-flag country-flag"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                }}
              ></i>
              Tanzania
            </a>
          </td>
        </tr>
        <tr>
                    <td>
                      <a href='https://ipayafrica.com/' target={'_blank'}>
                      <i className="elipa_icon elipa_kenya-flag country-flag"
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                      }}
                      onMouseLeave={e => {
                      e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                      }}
                    ></i>
                       Kenya
                       </a>
                    </td>
                    <td>
                      <a href='https://elipa.cd/' target={'_blank'}>
                      <i className="elipa_icon elipa_drc-flag country-flag"
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                      }}
                      onMouseLeave={e => {
                      e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                      }}
                    ></i>
                       DR Congo
                       </a>
                      </td>
                    <td>
                      <a href='https://mu.elipa.global/' target={'_blank'}>
                      <i className="elipa_icon elipa_malawi-flag country-flag"
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                      }}
                      onMouseLeave={e => {
                      e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                      }}
                    ></i>
                         Malawi
                         </a>
                        </td>
                        <td>
                          <a href='https://mu.elipa.global/' target={'_blank'}>
                          <i className ="elipa_icon elipa_nigeria-flag country-flag"
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                      }}
                      onMouseLeave={e => {
                      e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                      }}
                    ></i>
                         Nigeria
                         </a>
                        </td>
                  </tr>
                  <tr>
                    <td>
                    <a href='https://elipa.co.ug/' target={'_blank'}>
                    <i className ="elipa_icon elipa_uganda-flag country-flag"
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                      }}
                      onMouseLeave={e => {
                      e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                      }}
                    ></i>
                        Uganda
                        </a>
                        </td>
                    <td>
                    <a href='https://elipa.tg/' target={'_blank'}>
                    <i className="elipa_icon elipa_togo-flag country-flag"
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                      }}
                      onMouseLeave={e => {
                      e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                      }}
                    ></i> 
                         Togo
                         </a>
                        </td>
                    <td>
                    <a href='#'>
                    <i className="elipa_icon elipa_zambia-flag country-flag"
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                      }}
                      onMouseLeave={e => {
                      e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                      }}
                    ></i>
                     Zambia
                     </a>
                    </td>
                    <td>
                    <a href='#'>
                    <i className="elipa_icon elipa_burundi-flag country-flag"
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'rotate(360deg) scale(1.2)';
                      }}
                      onMouseLeave={e => {
                      e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                      }}
                    ></i>
                         Burundi
                         </a>
                        </td>
                  </tr> 
                  </tbody>
                </table> 
                );
            }
            
            export default Table;
