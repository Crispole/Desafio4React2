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
          alt="Icono de pizza" />
        <NavLink to="/" className="titulo" aria-label="Ir a la página principal">Pizzería Mamma Mía!</NavLink>
      </div>
      <div className='navdos'>
        <img
          className="carro-compra"
          src="src/assets/img/carrito.png"
          alt="Icono de carrito de compras" />
        <NavLink to="/compra" className="titulo" aria-label={`Ver carrito, total actual: $${totalCompra}`}>${totalCompra}</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
