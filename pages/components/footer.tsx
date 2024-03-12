import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark py-3">
      <div className="container">
        <p className="text-center text-white">
          Copyright &copy; {new Date().getFullYear()} iPay
        </p>
      </div>
    </footer>
  );
};

export default Footer;
