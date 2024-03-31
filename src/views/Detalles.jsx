import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../context/Context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Detalles() {

  const params = useParams();
  const { pizzas, addPizza } = useContext(Context);

  const pizzaSeleccionada = (id) => pizzas.find((pizza) => pizza.id === id);
  const pizza = pizzaSeleccionada(params.id);

  const handleAddPizza = (pizza) => {
    addPizza(pizza);
  }

  return (
    <Card className="detallesCard" style={{ width: '72rem' }}>

      <Card.Body>
        <div className="detallesTarjeta">
          <img className="detallesImagen" src={pizza.img} alt={pizza.name} />
          <div>
            <Card.Title className="detallesTexto">Pizza {pizza.name}</Card.Title>
            <hr className="detallesHr" />
            <p>{pizza.desc}</p>
            <p>Ingredientes</p>
            <Card.Text>
              {pizza.ingredients.map((ingrediente) => (
                <div key={pizza.id}> 🍕 {ingrediente}</div>
              ))}
            </Card.Text>
            <div className="detallesPrecioBoton">
              <Card.Title className="detallesTexto">Precio: ${pizza.price} </Card.Title>
              <Link to={`/compra`}><Button
                variant="success"
                onClick={() => handleAddPizza(pizza)}
              >Añadir 🛒  </Button></Link>
            </div>
            {/*  <hr className="detallesHr" /> */}
          </div>
          <br /><br />
        </div>
      </Card.Body>
    </Card>
  )
}

