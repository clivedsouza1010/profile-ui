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
                            <p>This website is created in Spring, Hibernate and Jquery.</p>

                            <div className="content_imagetext">
                                <div className="content_image">
                                    <img src={image1} alt="image1"/>
                                </div>
                                <p>
                                    <h3>Experience</h3>
                                    <br /> Over 4.5 years of experience in developing JAVA/J2EE based
                                    applications for the BFSI, Healthcare as well as insurance
                                    projects. My prime expertise has been in the development of large
                                    enterprise applications and the usage of best development
                                    practices. I have a keen interest in working in research projects
                                    which combines the usage of Machine Learning and adaptive JAVA for
                                    advanced data prediction. Currently working as a Sr Software
                                    Engineer with hands-on experience on JAVA/J2EE, Spring, JQuery,
                                    BackBone.js, JsRender.
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
