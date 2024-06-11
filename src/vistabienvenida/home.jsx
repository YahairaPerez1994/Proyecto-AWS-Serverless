import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import MaritimoInformado from '../img/MaritimoInformado.png'; // Importa la imagen

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Añadir la clase al montar el componente
    document.body.classList.add('home-background');
    
    // Eliminar la clase al desmontar el componente
    return () => {
      document.body.classList.remove('home-background');
    };
  }, []);

  const handleIngresar = () => {
    navigate('/selection');
  };

  return (
    <div className="inicio-container">
      <img src={MaritimoInformado} alt="Imagen de inicio" className="fondo-imagen" />
      <div className="overlay">
        {/* <div className="texto-bienvenidos">¡BIENVENIDOS!</div> */}
        <div className="texto-imagen">
          {/* <p>Lorem ipsum dolor sit amet,<br />
            consectetuer adipiscing elit, sed<br />
            diam nonummy nibh euismod<br />
            tincidunt ut laoreet dolore.</p> */}
        </div>
        <button onClick={handleIngresar} className="button">Ingresar</button>
        <div className='texto-fuente'>
          {/* <p>Fuente de información: FONDEPES - PRODUCE - FONDEPES -<br />
             PRODUCE - FONDEPES.</p> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
