import React from 'react';
import Header from './components/Header';
import Body from './components/body';
import Footer from './components/footer';
//import './css/styles.css';

const HomePage = () => {
  return (
    <div className="main-wrapper" style={{backgroundImage: `url(/images/Mauritius1.svg)`, backgroundSize: "cover"}}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;
