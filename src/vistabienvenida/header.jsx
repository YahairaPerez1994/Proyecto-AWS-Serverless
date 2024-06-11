import React from 'react';
import logo from '../img/logo.png'; // Importa tu logo
import './header.css'; // Importa los estilos CSS

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
    </header>
  );
};

export default Header;
