import React, { useState } from 'react';
import Header from './header';
import videoSource from './Assets/Images/VideoOlivos.mp4'; 
import WhatsappButton from './components/whatsapp';
import image1 from './Assets/Images/aceite.png';
import receta1 from './Assets/Images/receta1.jpg'
import BotonDeslizante from './components/botondeslizante';
import './styles.css';

function Home() {
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredButtonIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredButtonIndex(null);
  };

  return (
    <div>
      <Header />
      <div className="videoBackground">
        <video autoPlay loop muted className="videoStyle">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="textOverlay">
          <h1 className="textStyle">Oli de les valls</h1>
        </div>
      </div>

      <div className="subtitleStyle1">Los más vendidos</div>

      <div className="productContainer">
        <div className="productItem">
          <img src={image1} alt="Producto 1" className="productImage" />
          <div>
            <p className="productTextStyle1">Aceite</p>
            <p className="productTextStyle2">Aceite de oliva virgen extra</p>
            <p className="productPriceStyle">32€</p>
          </div>
          <button
            className="buttonStyle"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            SELECCIONAR OPCIONES
          </button>
        </div>
        <div className="productItem">
          <img src={image1} alt="Producto 1" className="productImage" />
          <div>
            <p className="productTextStyle1">Aceite</p>
            <p className="productTextStyle2">Aceite de oliva virgen extra</p>
            <p className="productPriceStyle">6€</p>
          </div>
          <button
            className="buttonStyle"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            SELECCIONAR OPCIONES
          </button>
        </div>
        <div className="productItem">
          <img src={image1} alt="Producto 1" className="productImage" />
          <div>
            <p className="productTextStyle1">Aceite</p>
            <p className="productTextStyle2">Aceite de oliva virgen extra</p>
            <p className="productPriceStyle">10€</p>
          </div>
          <button
            className="buttonStyle"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            SELECCIONAR OPCIONES
          </button>
        </div>
      </div>

      <div className="newsContainer">
        <div className="subtitleStyle2">Noticias y Recetas</div>
        <div className="newsItemsContainer">
          <div className="newsItem">
            <img src={receta1} alt="Noticia 1" className="newsImage" />
            <div>
              <p className="newsTextStyle1">Título de la noticia 1</p>
              <p className="newsTextStyle2">Descripción de la noticia 1</p>
              <button className="newsButtonStyle">LEER MÁS</button>
            </div>
          </div>
          <div className="newsItem">
            <img src={receta1} alt="Noticia 2" className="newsImage" />
            <div>
              <p className="newsTextStyle1">Título de la noticia 2</p>
              <p className="newsTextStyle2">Descripción de la noticia 2</p>
              <button className="newsButtonStyle">LEER MÁS</button>
            </div>
          </div>
          <div className="newsItem">
            <img src={receta1} alt="Noticia 3" className="newsImage" />
            <div>
              <p className="newsTextStyle1">Título de la noticia 3</p>
              <p className="newsTextStyle2">Descripción de la noticia 3</p>
              <button className="newsButtonStyle">LEER MÁS</button>
            </div>
          </div>
        </div>
      </div>
      <BotonDeslizante/>
      <WhatsappButton />
    </div>
  );
}

export default Home;