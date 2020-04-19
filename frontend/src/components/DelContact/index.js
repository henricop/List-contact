import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';

import api from '../../services/api';

function DelContact() {
  const [email, setEmail] = useState('');
  const history = useHistory();

  //não funciona
  async function handleDel(e) {
  //   e.preventDefault();
  //   const data = {
  //     email,
  //   };
  //   try {
  //     await api.delete('del',data.email);

  //     alert(email)
  //   } catch (err) {
  //     alert('erro ao deletar,tente novamente', err);
  //   }
   }

  return (
    <>
      <Header />
      <div className="containerFormSearch">
        <h1>Pesquisar contato</h1>
        <form className="addFormSearch" onSubmit={handleDel}>
          <label>Email</label>
          <input
            type="text"
            placeholder="Digite um email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div className="table">
            <h1>Aqui vai a tabela</h1>
          </div>
          <button type="submit" className="button-search">Deletar Contato</button>
        </form>
      </div>
      <Link to="/" className="link-search">
        <FiArrowLeft size={36} color='#715c95' />
      </Link>
      <Footer />
    </>
  );
}

export default DelContact;