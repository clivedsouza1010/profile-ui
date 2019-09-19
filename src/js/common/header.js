/**
 * Created by clive on 12/11/16.
 */

import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import '../../css/index.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

class Header extends Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {

  }

  render() {
    const classes = useStyles();
  const [value] = React.useState(0);

    return (
      <header>
      <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={this.handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
        <nav>
          <div id="menubar">
            <ul id="nav">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/mywork">Work Experience</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <div id="banner">
          <div id="welcome">
            <h3>
              Clive <span>D'Souza</span>
            </h3>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
