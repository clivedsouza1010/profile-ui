import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './js/main';
// import MyWorkContainer from './js/mywork';
// import EducationContainer from './js/education';
// import ProjectsContainer from './js/projects';
// import './css/index.css';
import { Route, HashRouter } from 'react-router-dom'

render((
  <HashRouter>
    <Route path="/" component={Main}/>
    <Route path="/home" component={Main}/>
  </HashRouter>
), document.getElementById('main'));
