import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ContactItem from '../ContactItem';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import './style.css';
import api from '../../services/api';


function ListAllContacts() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    async function loadContacts() {
      const response = await api.get('/list');
      setContact(response.data);
    }
    loadContacts();
  }, [])
  return (
    <>
      <Header />
      <div className="containerall">
        <h1 className="headerone">Lista Completa de contatos</h1>
        <div className="table">
          <ul>
            {contact.map(cont => (
              <ContactItem key={cont.id} cont={cont} />
            ))}
          </ul>
        </div>
      </div>
      <Link to="/" className="link-search">
        <FiArrowLeft size={36} color='#715c95' />
      </Link>
      <Footer />
    </>
  );
}

export default ListAllContacts;