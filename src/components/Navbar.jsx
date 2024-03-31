import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../context/Context'; // Importa el contexto

const Navbar = () => {
  const { totalCompra } = useContext(Context); // Obtiene el total de la compra del contexto

  return (
    <nav>
      <div className='navuno'>
        <img
          className="pizza-slice"
          src="src/assets/img/Pizza_icon.png"
          alt="pizza" />
        <NavLink to="/" className="titulo">Pizzería Mamma Mía!</NavLink>
      </div>
      <div className='navdos'>
        <img
          className="carro-compra"
          src="src/assets/img/carrito.png"
          alt="carro compra" />
        {/* Muestra el total de la compra en el navbar */}
        <NavLink to="/compra" className="titulo">${ totalCompra }</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;