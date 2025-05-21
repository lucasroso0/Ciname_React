import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './filme.css';

export default function Filme() {
  const [filme, setFilme] = useState({
    titulo: '',
    duracao: '',
    ano: '',
    diretor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilme({ ...filme, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Filme cadastrado:', filme);
    alert('Filme cadastrado com sucesso!');
    setFilme({ titulo: '', duracao: '', ano: '', diretor: '' });
  };

  return (
    <div 
      style={{
        backgroundImage: "url('/images/Sala_Cinema.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      <div className="filme-card">
        <h2 className="filme-title">🎬 Cadastro de Filme</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="Título"
            name="titulo"
            value={filme.titulo}
            onChange={handleChange}
          />
          <Input
            label="Duração (minutos)"
            name="duracao"
            type="number"
            value={filme.duracao}
            onChange={handleChange}
          />
          <Input
            label="Ano de Lançamento"
            name="ano"
            type="number"
            value={filme.ano}
            onChange={handleChange}
          />
          <Input
            label="Diretor"
            name="diretor"
            value={filme.diretor}
            onChange={handleChange}
          />
          <div className="text-end mt-4">
            <Button type="submit" variant="success">Salvar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}