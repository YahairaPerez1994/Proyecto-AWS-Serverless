import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './preciopordia.css';
import PlayaContent from './playacontent'; // Importamos el componente PlayaContent

const PrecioPorDia = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('playa');

  const handleEnter = () => {
    navigate('/selection');
  };

  return (
    <div className="precio-page">
      <div className="precio-container">
        <div className="texto-titulo">Precio por día</div>
        <div className="tab-container">
          <button
            className={`tab-button ${selectedTab === 'playa' && 'active'}`}
            onClick={() => setSelectedTab('playa')}
          >
            Playa
          </button>
        </div>
        <div className="linea-horizontal"></div>
        <div className="content">
          {selectedTab === 'playa' && <PlayaContent />} {/* Renderizamos PlayaContent si la pestaña seleccionada es "Playa" */}
        </div>
      </div>
      <footer className="footer">
        2024 - Marítimo Informado
      </footer>
    </div>
  );
};

export default PrecioPorDia;
