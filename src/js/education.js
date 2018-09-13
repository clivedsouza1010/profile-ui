/**
 * Created by clive on 12/11/16.
 */

import React, {Component} from 'react';
import Header from './common/header';
import SideBar from './common/sidebar';
import SlideShow from './common/slideshow';
import Footer from './common/footer';
import '../css/index.css';

class EducationContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="site_content">

          <SideBar />

          <SlideShow />

          <div id="content">
            <div className="content_item">
              <h2>Education</h2>
              <p>I have done my Masters of Science in Computer Science from
                Northeastern University, Boston, MA, USA and have done my Bachelor
                of Engineering in Information Technology from Mumbai University,
                INDIA. My interests include researching on topics related to
                Machine Learning (Supervised Learning) as well as applying these
                methods for advanced data prediction.</p>
              <div className="content_container">
                <h3>MS in Computer Science, Northeastern University, Boston,
                  MA</h3>
                <p>Graduated in Summer 2009 with a 3.25 GPA. Specialized in
                  Systems, Algorithms and Networks.</p>
              </div>
              <!--close content_container-->
              <div className="content_container">
                <h3>BE in Information Technology, Fr. Agnels, Vashi, Mumbai</h3>
                <p>Graduated in Summer 2006 with 61.27 percentage aggregate
                  marks (3.5 GPA)</p>
              </div>
              <!--close content_container-->
              <div className="content_container">
                <h3>Certifications</h3>
                <p>
                  <ul>
                    <li>Oracle Certified Java Programmer Certification (SCJP
                      6.0).</li>
                    <li>Oracle Certified JAVA EE 5 Web Component Developer
                      (SCWCD).</li>
                    <li>CloudU Cloud Computing Certification</li>
                  </ul>
                </p>
              </div>
              <!--close content_container-->
            </div>
            <!--close content_item-->
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default EducationContainer;
