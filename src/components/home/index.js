import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import image1 from '../../images/image1.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 440,
  },
}));

export default function Home() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
              <p>
              <h3>Welcome</h3>
              </p>
              <br />
              <p>
                Over 10 years of experience in developing JAVA/J2EE and Web
                applications for Retail, BFSI, Healthcare as well as insurance
                projects. My prime expertise has been in the development of large
                enterprise applications and the usage of best development
                practices. Currently working as a Lead Engineer developing Single Page Apps
                using React, Redux, Material UI, LoopBack, Node.js.
              </p>
              <img src={image1} alt="image1"/>
              </Paper>
            </Grid>
          </Grid>
    </div>
  );
}
