import React, { useState } from 'react';

const CadastroClientes = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cadastro de Cliente:', { nome, telefone });
  };

  return (
    <div className="p-6 bg-green-50">
      <h1 className="text-3xl text-center font-semibold text-green-600">Cadastro de Clientes</h1>
      <form onSubmit={handleSubmit} className="mt-4 max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-lg" htmlFor="nome">Nome do Cliente</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg" htmlFor="telefone">Telefone</label>
          <input
            id="telefone"
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 mt-4 bg-green-500 text-white rounded">Cadastrar Cliente</button>
      </form>
    </div>
  );
};

export default CadastroClientes;
