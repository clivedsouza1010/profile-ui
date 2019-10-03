import React, {Component} from 'react';
import Header from './common/header';
import SideBar from './common/sidebar';
import SlideShow from './common/slideshow';
import Footer from './common/footer';
import '../css/index.css';

class ProjectsContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="site_content">

          <SideBar />

          <SlideShow />

          <div id="content">
            <div className="content_item">
              <h2>Latest Projects</h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProjectsContainer;
