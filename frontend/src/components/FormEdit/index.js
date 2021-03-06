import React from 'react';
import './style.css';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';



function FormEdit(){
  return(
    <>
      <Header/>
      <div className="containerFormSearch">
        <h1>Pesquisar contato</h1>
        <form className="addFormSearch">
          <label>Email</label>
          <input type="text" placeholder="Digite um email"/>
          <div className="table">
            <h1>Aqui vai a tabela</h1>
          </div>
          <Link to="/alter"><button type="submit" className='button-edit'>Confirmar</button></Link>
        </form>
      </div>
      <Link to="/" className="link-search">
        <FiArrowLeft size={36} color='#715c95' />
      </Link>
      <Footer/>
    </>
  );
}

export default FormEdit;