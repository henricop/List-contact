import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';


export default function FormAdd() {
  const [name_contact, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [number_contact, setNumb] = useState(0);
  const [frase, setFrase] = useState('');
  const history = useHistory();

  async function handleNewContact(e) {
    e.preventDefault();
    const data = {
      name_contact,
      email,
      bairro,
      rua,
      number_contact,
      frase
    };
    try {
      await api.post('/add', data)
      alert("Contato Cadastrado com sucesso");
      history.push('/');
    } catch (error) {
      alert('erro ao cadastrar novo contato,tente novamente');
    }
  }

  return (
    <>
      <Header />
      <div className="containerForm">
        <h1>Adicionar um novo contato</h1>
        <form className="addForm" onSubmit={handleNewContact}>
          <div className="nome">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite um nome"
              value={name_contact}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="email">
            <label>Email</label>
            <input
              type="text"
              placeholder="Digite um Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="end">
            <label>Endereço</label>
            <input
              type="text"
              className="bairro"
              placeholder="Bairro"
              value={bairro}
              onChange={e => setBairro(e.target.value)}
            />
            <input
              type="text"
              className="rua"
              placeholder="Rua"
              value={rua}
              onChange={e => setRua(e.target.value)}
            />
            <input
              type="number"
              className="numb"
              placeholder="N°"
              style={{ textAlign: 'center' }}
              value={number_contact}
              onChange={e => setNumb(e.target.value)}
            />
          </div>
          <div className="frase">
            <label>Frase de destaque</label>
            <input
              type="text"
              placeholder="Digite a frase"
              value={frase}
              onChange={e => setFrase(e.target.value)}
            />
          </div>
          <button type="submit">Adicionar Contato</button>
        </form>
      </div>
      <Link to="/" className="link-add">
        <FiArrowLeft size={36} color='#715c95' />
      </Link>
      <Footer />
    </>
  );
};
