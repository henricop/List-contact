import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './components/Main';
import FormAdd from './components/FormAdd';
import FormPesq from './components/FormPesq';
import FormEdit from './components/FormEdit';
import ViewAlter from './components/ViewAlter';
import ListAllContacts from './components/ListAllContacts';
import DelContact from './components/DelContact';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/add" component={FormAdd}/>
        <Route path="/search" component={FormPesq}/>
        <Route path="/edit" component={FormEdit}/>
        <Route path="/alter" component={ViewAlter}/>
        <Route path="/list" component={ListAllContacts}/>
        <Route path="/del" component={DelContact}/>
      </Switch>
    </BrowserRouter>
  );
}

