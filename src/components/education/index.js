import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  h2: {
	   font: 'normal 165% Arial, Helvetica, sans-serif',
     color: '#5D5D5D',
  },
  h3: {
    font: 'normal 130% Arial, Helvetica, sans-serif',
    color: '#5D5D5D',
  },
  p: {
	  padding: '0 0 10px 0',
	  color: '#1D1D1D',
	  textShadow: '1px 1px #FFF',
	  lineHeight: '1.7em',
	  fontSize: '100%',
  }
}));

export default function Education() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h2 className={classes.h2}>Education</h2>
        <p className={classes.p}>I have done my Masters of Science in Computer Science from
          Northeastern University, Boston, MA, USA and have done my Bachelor
          of Engineering in Information Technology from Mumbai University,
          INDIA. My interests include researching on topics related to
          Machine Learning (Supervised Learning) as well as applying these
          methods for advanced data prediction.</p>
        <div className={classes.container}>
          <h3 className={classes.h3}>MS in Computer Science, Northeastern University, Boston,
            MA</h3>
          <p className={classes.p}>Graduated in Summer 2009 with a 3.25 GPA. Specialized in
            Systems, Algorithms and Networks.</p>
        </div>
        <div className={classes.container}>
          <h3 className={classes.h3}>BE in Information Technology, Fr. Agnels, Vashi, Mumbai</h3>
          <p className={classes.p}>Graduated in Summer 2006 with 61.27 percentage aggregate
            marks (3.5 GPA)</p>
        </div>
        <div className={classes.container}>
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
    </div>
  );
}
