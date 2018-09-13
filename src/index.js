import React from 'react';
import {render} from 'react-dom';
import Main from './js/main';
import MyWorkContainer from './js/mywork';
import EducationContainer from './js/education';
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
        <Route path="/mywork" component={MyWorkContainer}/>
      <Route path="/education" component={EducationContainer}/>
    </Router>
), document.getElementById('main'));
