import React, { createContext, useState, useEffect } from "react";

const Context = createContext({});

export function Provider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [compra, setCompra] = useState([]);
  const [error, setError] = useState(null);

  const getPizzas = async () => {
    try {
      const res = await fetch("/pizzas.json");
      if (!res.ok) {
        throw new Error('No se pudieron cargar las pizzas');
      }
      const data = await res.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al cargar las pizzas:", error);
      setError('Hubo un problema al cargar las pizzas. Por favor, intenta de nuevo más tarde.');
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  // Carro compras
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
    totalCompra: calcularTotalCompra(),
    limpiarCompra,
    error,
  };

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
}

export default Context;
