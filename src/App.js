import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ConsertoRelogios from './pages/ConsertoRelogios';
import CadastroClientes from './pages/CadastroClientes';
import EmissaoNota from './pages/EmissaoNota';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conserto-relogios" element={<ConsertoRelogios />} />
          <Route path="/cadastro-clientes" element={<CadastroClientes />} />
          <Route path="/emissao-nota" element={<EmissaoNota />} />
          <Route path="*" element={<div>Erro 404 - Página não encontrada</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
