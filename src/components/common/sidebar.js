import React from 'react';
import { NavLink } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export const sideBarItems = (
  <div>
    <ListItem button component={NavLink} to="/" exact>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={NavLink} to="/work">
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Work Experience" />
    </ListItem>
    <ListItem button component={NavLink} to="/education">
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Education" />
    </ListItem>
    <ListItem button component={NavLink} to="/projects">
      <ListItemIcon>
        <AmpStoriesIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem button component={NavLink} to="/contact">
      <ListItemIcon>
        <ContactMailIcon />
      </ListItemIcon>
      <ListItemText primary="Contact" />
    </ListItem>
  </div>
);
