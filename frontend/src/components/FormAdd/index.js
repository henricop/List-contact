import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {FiArrowLeft} from 'react-icons/fi';
import './style.css';
import { Link } from 'react-router-dom';

function FormAdd(){
  return(
    <>
      <Header/>
      <div className="containerForm">
        <h1>Adicionar um novo contato</h1>
        <form className="addForm">
          <div className="nome">
            <label>Nome</label>
            <input type="text" placeholder="Digite um nome"/>
          </div>
          <div className="email">
            <label>Email</label>
            <input type="text" placeholder="Digite um Email"/>
          </div>
        
          <div className="end">
          <label>Endereço</label>
            <input type="text" className="bairro" placeholder="Bairro"/>
            <input type="text" className="rua" placeholder="Rua"/>
            <input type="text" className="numb" placeholder="N°" style={{textAlign:'center'}}/>
          </div>
          <div className="frase">
            <label>Frase de destaque</label>
            <input type="text" placeholder="Digite a frase"/>
          </div>
          <button type="submit">Adicionar Contato</button>
        </form>
      </div>
      <Link to="/" className="link-add">
        <FiArrowLeft size={36} color='#715c95' />
      </Link>
      <Footer/>
    </>
  );
}
export default FormAdd;