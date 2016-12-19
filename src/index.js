import React from 'react';
import {render} from 'react-dom';
import Main from './js/main';
import MyWork from './js/mywork';
import './css/index.css';

/*ReactDOM.render(
  <Main />,
  document.getElementById('main')
);*/


import { Router, Route, hashHistory } from 'react-router'

render((
    <Router history={hashHistory}>
        <Route path="/" component={Main}/>
        <Route path="/home" component={Main}/>
        <Route path="/mywork" component={MyWork}/>
    </Router>
), document.getElementById('main'));
