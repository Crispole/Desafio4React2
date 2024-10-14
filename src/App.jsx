import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import { Provider } from './context/Context';

const Home = lazy(() => import('./views/Home'));
const Compra = lazy(() => import('./views/Compra'));
const Detalles = lazy(() => import('./views/Detalles'));

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/compra" element={<Compra />} />
              <Route path="/detalles" element={<Detalles />} />
              <Route path="/detalles/:id" element={<Detalles />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
