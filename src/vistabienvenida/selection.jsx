import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'; // Importa el componente Button de Bootstrap
import './selection.css'; // Importa los estilos
import Header from '../vistabienvenida/header'; // Importa el componente Header (asegúrate de usar la ruta correcta y el nombre del archivo correcto)

const Selection = () => {
  const navigate = useNavigate();

  const preciopordia = () => {
    navigate('/preciopordia');
  }; 
  const preciohistorico = () => {
    navigate('/preciohistorico');
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header /> {/* Importa y utiliza el componente Header */}
      <div className="selection-container">
        {/* <h1 className="titulo">Selecciona una opción</h1> */}
        <div className="selection-buttons">
          <Button onClick={preciopordia} className="selection-button">Precio por día</Button>
        </div>
        <div className="selection-buttons">
          <Button onClick={preciohistorico} className="selection-button">Precio histórico</Button>
        </div>
      </div>
      <footer className="footer">
        2024 - Marítimo Informado
      </footer>
    </div>
  );
};

export default Selection;
