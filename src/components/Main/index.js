import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import Header from '../Header';
import Footer from '../Footer';



function Main(props){
  // props = {
  //   name : 'henrico'
  // }
  return(
    <>
      <Header/>
      <ul className="list-main">
        <Link to="/add"><li className="list">Adiciona contato</li></Link>
        <Link to="/search"><li className="list">Pesquisa contato</li></Link>
        <Link to="/edit"><li className="list">Edita contato</li></Link>
        <Link to="/list"><li className="list">Lista contato</li></Link>
        <Link to="/del"><li className="list">Deleta contato</li></Link>
      </ul>
      <Footer/>
    </>
    
  )};

export default Main;