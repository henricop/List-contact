import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {FiArrowLeft} from 'react-icons/fi';
import './style.css';
import { Link } from 'react-router-dom';




function ViewAlter(){
  return(
    <>
      <Header/>
      <div className="containerForm">
        <h1>Alterar Contato de : COLOCAR O NOME DE QUEM É AQ</h1>
        <form className="addForm">
          <div className="nome">
            <label>Nome</label>
            <input type="text" />
          </div>
          <div className="email">
            <label>Email</label>
            <input type="text" />
          </div>
        
          <div className="end">
          <label>Endereço</label>
            <input type="text" className="bairro" />
            <input type="text" className="rua" />
            <input type="text" className="numb" style={{textAlign:'center'}}/>
          </div>
          <div className="frase">
            <label>Frase de destaque</label>
            <input type="text"/>
          </div>
          <button type="submit">Alterar Contato</button>
        </form>
      </div>
      <Link to="/edit" className="link-add">
        <FiArrowLeft size={36} color='#715c95' />
      </Link>
      <Footer/>
    </>
  );
}


export default ViewAlter;