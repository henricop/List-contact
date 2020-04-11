import React from 'react';
import './style.css';


function Main(props){
  props = {
    name : 'henrico'
  }
  return(
    <ul>
      <li className="list">Adiciona contato</li>
      <li className="list">Pesquisa contato</li>
      <li className="list">Edita contato</li>
      <li className="list">Lista contato</li>
      <li className="list">Deleta contato</li>
    </ul>
  )};

export default Main;