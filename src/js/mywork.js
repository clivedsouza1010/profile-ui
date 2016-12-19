/**
 * Created by clive on 12/11/16.
 */

import React, {Component} from 'react';
import Header from './common/header';
import SideBar from './common/sidebar';
import SlideShow from './common/slideshow';
import Footer from './common/footer';
import '../css/index.css';

class MyWork extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="site_content">

                    <SideBar />

                    <SlideShow />

                    <div id="content">
                        <div className="content_item">
                            <h2>My Work</h2>
                            <p>
                                Developed large scale applications from scratch using various
                                technologies like JAVA/J2EE, Spring, EJB 2.0, Python, Ruby,
                                JQuery, JavaScript. Some of the projects I am currently
                                working/have worked on are <a href="http://www.medhost.com">Medhost
                                CPOE</a>, <a href="https://ifm.willis.com/iFM">Willis iFM</a>.
                            </p>
                            <div className="content_container">
                                <p>
                                    <h3>Citiustech Solutions, Mumbai, INDIA</h3>
                                    <br /> Developed a new domain entity using Spring 3.0 for getting
                                    medication records from AS 400 server. Currently enhancing the
                                    single page application using JSRender, Backbone.js and JQuery.
                                </p>
                            </div>
                            <div className="content_container">
                                <p>
                                    <h3>Tata Consultancy Services, Mumbai, INDIA</h3>
                                    <br /> Handling projects which are used on IPAD and Blackberry
                                    devices and providing support. Bug fixing and enhancements.
                                    Writing multi-threaded code for handling concurrent access to
                                    server side data.
                                </p>
                                <div className="full-text">
                                    <p>Developing a monitoring utility in JAVA and JSF on
                                        Weblogic Server 10.3.4. Mentoring and training juniors towards
                                        development and using JAVA best practices. Working on data
                                        structures and algorithms to improve runtime complexity of the
                                        code and analyzing the time and space complexity of the
                                        algorithm. Implemented an AVL tree which gave better results
                                        when data was fetched from distributed databases</p>
                                </div>
                                <input type="button" className="view_more" value="Read More" />
                            </div>
                            <div className="content_container">
                                <p>
                                    <h3>Willis, Mumbai, INDIA</h3>
                                    <br /> Working closely with UK PDI (Product Development and
                                    Infrastructure) team for developing enhancements and resolving
                                    bugs for the award winning Willis iFM system.
                                </p>
                                <div className="full-text">
                                    <p>Creating enhanced tables for the Willis iFM system using
                                        Core Java (JDK v1.6), JSP, Servlets, JSTL and JQuery. Used Java
                                        Excel API and POI API for exporting the tables to Excel file
                                        formats. Writing multi-threaded Java code for synchronous usage
                                        for access to various utilities in the application. Developing
                                        Entity and Message Driven beans (EJB 2.0). Running ant scripts
                                        for Compiling, Building and Deploying the application on
                                        Weblogic Application Server. Documenting the workflow and
                                        Enhancements. Performing testing on the Willis iFM Test system.
                                        Writing algorithms to fasten time consuming mathematical
                                        calculations.</p>
                                </div>
                                <input type="button" className="view_more" value="Read More" />
                            </div>
                            <div className="content_container">
                                <p>
                                    <h3>iNEK Technologies, Overland Park, KS, USA</h3>
                                    <br /> Developed a tool in Java and Swings to get the position
                                    statistics for different swap types for a given period or firm and
                                    display charts.
                                </p>
                                <div className="full-text">
                                    <p>Developed a tool using threads in Java and Swings for
                                        parsing logs on different machine for pricing errors and getting
                                        the corresponding customer information. Tested and developed
                                        server side helper classes and Servlets. Implemented UML Object
                                        Modeling using Rational Rose and also generated Object Diagrams,
                                        Sequence Diagrams and State Diagrams. Performed the packaging,
                                        building, integrating and deployment of enterprise J2EE
                                        applications on WebSphere Application Server 6.0/6.1 that
                                        involved the creation and editing of EAR, JAR, WAR files using
                                        AAT. Provided 24x7 on-call support on a rotation basis with
                                        other team members for applications running on WebSphere
                                        Application Server.</p>
                                </div>
                                <input type="button" className="view_more" value="Read More" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default MyWork;
