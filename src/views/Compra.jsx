import React, { useContext } from 'react';
import Context from '../context/Context';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Compra = () => {
  const { compra, limpiarCompra, addPizza, quitarPizza } = useContext(Context);

  // Función para limpiar la compra
  const handleLimpiarCompra = () => {
    limpiarCompra();
  };

  // Función para añadir una unidad de pizza al carrito
  const handleAñadirPizza = (pizza) => {
    addPizza(pizza); // Se pasa el objeto pizza completo
  };

  // Función para quitar una unidad de pizza del carrito
  const handleQuitarPizza = (id) => {
    quitarPizza(id); // Se pasa solo el ID, la cantidad se manejará internamente en el contexto
  };

  // Calcular el total de la compra
  const totalCompra = compra.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <card>
      <div className="compraContainer">
        <p className="compraTexto">Detalles del pedido:</p>
        <div className="compraPedido">
          {compra.map(item => (
            <div className="compraPizzaNombre" key={item.id}>
              <img height={"85px"} src={item.img} alt={item.name} />
              <h5>{item.name}</h5>
              <div>
                <h5>${item.price * item.quantity}</h5>
                <div>
                  <Button variant="outline-secondary" size="md" onClick={() => handleQuitarPizza(item.id)}>-</Button>
                  <span style={{margin: '0 10px'}}>{item.quantity}</span>
                  <Button variant="outline-secondary" size="md" onClick={() => handleAñadirPizza(item)}>+</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Mostrar el total de la compra */}
        <p>Total: ${totalCompra}</p>

        <div className="compraBotones">
          <Button className="compraBoton" variant="success">Ir a pagar</Button>
          <Link to={'/'}><Button className="compraBoton" variant="secondary">Seguir comprando</Button></Link>
          <Button className="compraBoton" variant="danger" onClick={handleLimpiarCompra}>Anular pedido</Button>
        </div>
      </div>
    </card>
  );
};

export default Compra;