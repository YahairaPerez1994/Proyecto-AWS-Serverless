import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './preciohistorico.css';
import PlayaContenHis from './playacontenhis';

const PrecioHistorico = () => {
  const [selectedTab, setSelectedTab] = useState('playa');

  return (
    <div className="historico-page">
      <div className="historico-container">
        <div className="texto-titulo">Precio Histórico</div>
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
          {selectedTab === 'playa' && <PlayaContenHis />} {/* Renderizamos PlayaContent si la pestaña seleccionada es "Playa" */}
        </div>
      </div>
      <footer className="footer">
        2024 - Marítimo Informado
      </footer>
    </div>
  );
};



export default PrecioHistorico;