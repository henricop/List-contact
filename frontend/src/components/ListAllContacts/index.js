import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom';
import './style.css';


function ListAllContacts(){
  return(
    <>
      <Header/>
        <div className="containerall">
          <h1 className="headerone">Lista Completa de contatos</h1>
          <div className="table">
            <p>aqui tem uma tabela</p>
            <p>aqui tem uma tabela</p>
            <p>aqui tem uma tabela</p>
            <p>aqui tem uma tabela</p>
            <p>aqui tem uma tabela</p>
          </div>
        </div>
        <Link to="/" className="link-search">
        <FiArrowLeft size={36} color='#715c95' />
      </Link>
      <Footer/>
    </>
  );
}

export default ListAllContacts;