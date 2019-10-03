import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';

render((
  <Router>
    <App />
  </Router>
), document.getElementById('main'));
