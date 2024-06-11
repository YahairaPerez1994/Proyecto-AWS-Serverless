import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS aquí
import Home from './vistabienvenida/home';
import Selection from './vistabienvenida/selection';
import PrecioporDia from './preciodia/preciopordia';
import PrecioHistorico from './prechistorico/preciohistorico';
import NavigationBar from './layouts/navbar'; // Importa el componente Navbar

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const location = useLocation();
  const showNavbar = !['/', '/selection'].includes(location.pathname);

  return (
    <>
      {showNavbar && <NavigationBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/preciopordia" element={<PrecioporDia />} />
        <Route path="/preciohistorico" element={<PrecioHistorico />} />

      </Routes>
    </>
  );
};

export default App;
