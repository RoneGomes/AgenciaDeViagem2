import Header from "./components/Header";
import Footer from "./components/Footer";
import Voo from "./pages/Voo";
import Aluguel from "./pages/Aluguel";
import Cliente from "./pages/Cliente";

import Pacote from "./pages/Pacote";
import Contato from "./pages/Contato";
import Hotel from "./pages/Hotel";
import Login from "./pages/Login";

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Cliente />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Voo" element={<Voo />} />
            <Route path="/Hotel" element={<Hotel />} />
            <Route path="/Aluguel" element={<Aluguel />} />
            <Route path="/Pacote" element={<Pacote />} />
            <Route path="/Contato" element={<Contato />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>

    </>
  )
}

export default App;
