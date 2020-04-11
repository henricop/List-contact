import React from 'react';
import './style.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App(){
  return (
    <div className="App">
      <Header className="navbar bg-primery" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
