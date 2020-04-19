import React, { useState, useEffect } from 'react';
import './style.css';
import Header from '../Header';
import Footer from '../Footer';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

export default function FormAdd() {
  const [name_contact, setName] = useState('');
  const history = useHistory();

  //não funciona também
  async function handleSearch(e) {
    // e.preventDefault();
    // try {
    //   const contact = await api.get('/search',{
    //     where:{
    //       "name_contact":name_contact
    //     }
    //   });
    //   if (name_contact !== contact.data.name_contact) {
    //     alert('Contato não pertence ao banco de dados')
    //   }
    //   alert(contact.data);
    //   history.push('/');
    // } catch (error) {
    //   alert(error);
    // }
  }

  return (
    <>
      <Header />
      <div className="containerFormSearch">
        <h1>Pesquisar contato</h1>
        <form className="addFormSearch" onSubmit={handleSearch}>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite um nome"
            value={name_contact}
            onChange={e => setName(e.target.value)}
          />
          <div className="table">
            <h1>Aqui vai a tabela</h1>
          </div>
          <button type="submit" className="button-search">Verificar Contato</button>
        </form>
      </div>
      <Link to="/" className="link-search">
        <FiArrowLeft size={36} color='#715c95' />
      </Link>
      <Footer />
    </>
  );
}