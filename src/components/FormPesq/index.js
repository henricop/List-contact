import React from 'react';
import './style.css';

function FormAdd(){
  return(
    <div className="containerForm">
      <h1>Pesquisar contato</h1>
      <form className="addForm">
        <label>Email</label>
        <input type="text" placeholder="Digite um email"/>
        <button type="submit">Procurar Contato</button>
        <div className="table">
          <h1>Aqui vai a tabela</h1>
        </div>
      </form>
    </div>
  );
}
export default FormAdd;