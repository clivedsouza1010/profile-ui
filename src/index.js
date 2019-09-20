import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './js/main';
import Home from './js/home';
import { Redirect, Route, BrowserRouter } from 'react-router-dom';

render((
  <BrowserRouter>
    <Route path="/" component={Main}/>
  </BrowserRouter>
), document.getElementById('main'));
