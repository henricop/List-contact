import React from 'react';
import './style.css';

function FormAdd(){
  return(
    <div className="containerForm">
      <h1>Adicionar um novo contato</h1>
      <form className="addForm">
        <label>Nome</label>
        <input type="text" placeholder="Digite um nome"/>

        <label>Email</label>
        <input type="text" placeholder="Digite um email"/>

        <label>Senha</label>
        <input type="password" placeholder="Digite uma senha"/>

        <button type="submit">Adicionar Contato</button>

      </form>
    </div>
  );
}
export default FormAdd;