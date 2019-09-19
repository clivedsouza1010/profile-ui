import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export const sideBarItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Work Experience" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Education" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AmpStoriesIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ContactMailIcon />
      </ListItemIcon>
      <ListItemText primary="Contact" />
    </ListItem>
  </div>
);
