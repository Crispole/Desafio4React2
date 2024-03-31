import React, { createContext, useState, useEffect } from "react";

const Context = createContext({});

export function Provider({ children }) {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    const res = await fetch("/pizzas.json");
    const data = await res.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  // Carro compras
  const [compra, setCompra] = useState([]);

  const addPizza = (pizza) => {
    const existingPizzaIndex = compra.findIndex(item => item.id === pizza.id);

    if (existingPizzaIndex !== -1) {
      const updatedCompra = [...compra];
      updatedCompra[existingPizzaIndex].quantity++;
      setCompra(updatedCompra);
    } else {
      setCompra([...compra, { ...pizza, quantity: 1 }]);
    }
  };

  const quitarPizza = (id) => {
    const existingPizzaIndex = compra.findIndex(item => item.id === id);

    if (existingPizzaIndex !== -1) {
      const updatedCompra = [...compra];
      updatedCompra[existingPizzaIndex].quantity--;
      if (updatedCompra[existingPizzaIndex].quantity === 0) {
        updatedCompra.splice(existingPizzaIndex, 1);
      }
      setCompra(updatedCompra);
    }
  };

  // Función para calcular el total de la compra
  const calcularTotalCompra = () => {
    return compra.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Función para limpiar la lista de compra
  const limpiarCompra = () => {
    setCompra([]);
  };

  const globalState = {
    pizzas,
    compra,
    setCompra,
    addPizza,
    quitarPizza,
    totalCompra: calcularTotalCompra(), // Añade el total de la compra al estado global
    limpiarCompra, // Agrega la función limpiarCompra al estado global
  };

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
}

export default Context;