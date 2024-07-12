import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home.jsx';
import NossaHistoria from './pages/NossaHistoria.jsx';
import OndeEstamos from './pages/OndeEstamos.jsx';
import Fundadores from './pages/Fundadores.jsx';
import Carisma from './pages/Carisma.jsx';
import Missao from './pages/Missao';
import Vocacional from './pages/Vocacional';
import Espiritualidade from './pages/Espiritualidade';
import Oracoes from './pages/Oracoes';
import NosAjude from './pages/NosAjude';
import Contato from './pages/Contato';
import Footer from './components/Footer';  // Importar o footer

const App = () => (
  <Router basename="/comunidade">
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nossa-historia" element={<NossaHistoria />} />
          <Route path="/onde-estamos" element={<OndeEstamos />} />
          <Route path="/fundadores" element={<Fundadores />} />
          <Route path="/carisma" element={<Carisma />} />
          <Route path="/missao" element={<Missao />} />
          <Route path="/vocacional" element={<Vocacional />} />
          <Route path="/espiritualidade" element={<Espiritualidade />} />
          <Route path="/oracoes" element={<Oracoes />} />
          <Route path="/nos-ajude" element={<NosAjude />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
