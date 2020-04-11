import React from 'react';
import './style.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import FormAdd from './components/FormAdd';
// import FormPesq from './components/FormPesq';


function App(){
  return (
    <div className="App">
      <Header className="navbar bg-primery" />
      <Main />
      {/* <FormPesq/> */}
      <Footer />
    </div>
  );
}

export default App;
