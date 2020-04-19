import React from 'react';
import './style.css';


export default function ContactItem({cont}){
  return(
    <li>
      <div className="container-item">
        <h1 className="h1-item">{cont.name_contact}</h1>
        <p className="p-item">
          {cont.email}
        </p>
        <p className="p-itemrua">
          {cont.rua} - {cont.number_contact} - {cont.bairro}
        </p>
        <hr/>
        <p className="p-itemfrase">{cont.frase}</p>
      </div>
    </li>

  );
}