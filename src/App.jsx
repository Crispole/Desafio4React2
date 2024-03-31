import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'

import Home from './views/Home'
import Compra from './views/Compra';
import Detalles from './views/Detalles';

import { Provider } from './context/Context';

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compra" element={<Compra />} />
            <Route path="/detalles" element={<Detalles />} />
            <Route path="/detalles/:id" element={<Detalles />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App