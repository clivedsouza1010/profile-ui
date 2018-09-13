/**
 * Created by clive on 12/11/16.
 */

import React, {Component} from 'react';
import image1 from '../images/image1.jpg';
import Header from './common/header';
import SideBar from './common/sidebar';
import SlideShow from './common/slideshow';
import Footer from './common/footer';
import '../css/index.css';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="site_content">

                    <SideBar />

                    <SlideShow />

                    <div id="content">
                        <div className="content_item">
                            <h1>Welcome</h1>
                            <p>This website is created in React.js</p>

                            <div className="content_imagetext">
                                <div className="content_image">
                                    <img src={image1} alt="image1"/>
                                </div>
                                <p>
                                    <h3>Experience</h3>
                                    <br /> Over 10 years of experience in developing JAVA/J2EE and Web
                                    applications for Retail, BFSI, Healthcare as well as insurance
                                    projects. My prime expertise has been in the development of large
                                    enterprise applications and the usage of best development
                                    practices. Currently working as a Lead Engineer developing Single Page Apps
                                    using React, Redux, Material UI, LoopBack, Node.js.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;
