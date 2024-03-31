import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../context/Context';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  const { pizzas, addPizza } = useContext(Context);

  const handleAddPizza = (pizza) => {
    addPizza(pizza);
  }

  return (
    <div>
      <header>
        <div className="pizza-banner">
          <p className="banner-texto">¡Pizzería Mamma Mía!</p>
          <p className="banner-texto2">¡Tenemos las mejores pizzas del mundo mundial que podrás encontrar!</p>
          <hr className="linea" />
        </div>
      </header>
      <section>
        {pizzas.map((pizza) => (
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <hr className="hr-banner" />
              <Card.Title>Ingredientes:</Card.Title>
              <Card.Text>
                {pizza.ingredients.map((ingrediente) => (
                  <div key={pizza.id}> 🍕 {ingrediente}</div>
                ))}
              </Card.Text>
              <hr />
              <Card.Title>
                ${pizza.price}
              </Card.Title>
              <Link to={`/detalles/${pizza.id}`}>
                <Button variant="info" className="custom-btn">Ver más 🤔 </Button></Link>
              <Link
                to={`/compra`}
                onClick={() => handleAddPizza(pizza)}
              >
                <Button variant="success">Añadir 🛒  </Button></Link>
            </Card.Body>
          </Card>
        ))}
      </section>
    </div>

  )
}

export default Home