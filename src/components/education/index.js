import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

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
    height: 'auto',
  },
  h2: {
	   font: 'normal 165% Arial, Helvetica, sans-serif',
     color: '#5D5D5D',
  },
  h3: {
    font: 'normal 130% Arial, Helvetica, sans-serif',
    color: '#5D5D5D',
  },
  p: {
	  color: '#1D1D1D',
	  textShadow: '1px 1px #FFF',
	  fontSize: '100%',
  }
}));

export default function Education() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
              <p>
              <h3>Education</h3>
              </p>
              <p className={classes.p}>I have done my Masters of Science in Computer Science from
                Northeastern University, Boston, MA, USA and have done my Bachelor
                of Engineering in Information Technology from Mumbai University,
                INDIA. My interests include researching on topics related to
                Machine Learning (Supervised Learning) as well as applying these
                methods for advanced data prediction.</p>
              <div>
                <h3 className={classes.h3}>MS in Computer Science, Northeastern University, Boston,
                  MA</h3>
                <p className={classes.p}>Graduated in Summer 2009 with a 3.25 GPA. Specialized in
                  Systems, Algorithms and Networks.</p>
              </div>
              <div>
                <h3 className={classes.h3}>BE in Information Technology, Fr. Agnels, Vashi, Mumbai</h3>
                <p className={classes.p}>Graduated in Summer 2006 with 61.27 percentage aggregate
                  marks (3.5 GPA)</p>
              </div>
              <div>
                <h3 className={classes.h3}>Certifications</h3>
                <p className={classes.p}>
                  <ul>
                    <li>Oracle Certified Java Programmer Certification (SCJP
                      6.0).</li>
                    <li>Oracle Certified JAVA EE 5 Web Component Developer
                      (SCWCD).</li>
                    <li>CloudU Cloud Computing Certification</li>
                  </ul>
                </p>
              </div>
              </Paper>
            </Grid>
          </Grid>
    </div>
  );
}
