import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/App';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={() => (<div> Página 404 </div>)} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
