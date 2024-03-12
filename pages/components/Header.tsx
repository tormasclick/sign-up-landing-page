import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JavaScript loaded');
        // You can initialize any Bootstrap components here if needed
      })
      .catch((error) => console.error('Error loading Bootstrap JavaScript:', error));
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo-wrapper">
          <a href='#'>
            <i className="ipay_icon ipay_ipay logo-icon" style={{ width: "100%" }}></i>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="icon">
                  <img alt="Home" src="https://www.ipayafrica.com/sites/default/files/menuimage/home.svg" />
                </div>
                Home
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><a className="dropdown-item" href="https://www.ipayafrica.com/info/About-Us">About us</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="icon">
                  <img alt="Solution" src="https://www.ipayafrica.com/sites/default/files/menuimage/Solution.svg" />
                </div>
                Our Solutions
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li><a className="dropdown-item" href="https://www.ipayafrica.com/solutions/personal">Personal</a></li>
                <li><a className="dropdown-item" href="https://www.ipayafrica.com/solutions/business">Business</a></li>
                <li><a className="dropdown-item" href="https://www.ipayafrica.com/Solutions/Affiliates-Developers">Affiliates & Developers</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.ipayafrica.com/blog">
                <div className="icon">
                  <img alt="Blog" src="https://www.ipayafrica.com/sites/default/files/menuimage/Blog.svg" />
                </div>
                Blog
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="icon">
                  <img alt="Contact" src="https://www.ipayafrica.com/sites/default/files/menuimage/Contact%20Us.svg" />
                </div>
                Contact Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                <li><a className="dropdown-item" href="https://www.ipayafrica.com/contact-us">Get In Touch</a></li>
                <li><a className="dropdown-item" href="https://www.ipayafrica.com/careers">Careers</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.ipayafrica.com/merchant-register/?rc=RC000000#/registration" target='_blank' rel="noreferrer">
                <div className="icon">
                  <img alt="Register" src="https://www.ipayafrica.com/sites/default/files/menuimage/Developers%20API.svg" />
                </div>
                Register
              </a>
            </li>
          </ul>
        </div>
        <a className="button" href="https://backoffice.ipayafrica.com/index.php/login" target="_blank" rel="noreferrer">
          <img alt="Login" height="30" src="https://www.ipayafrica.com/sites/default/files/merchant.svg" width="30" />
          Merchant Login
        </a>
      </nav>
    </header>
  );
}

export default Header;
