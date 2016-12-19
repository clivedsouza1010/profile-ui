/**
 * Created by clive on 12/11/16.
 */

import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar_container">
                <div className="sidebar">
                    <div className="sidebar_item">
                        <h2>Feedback</h2>
                        <p>Welcome to my personal web site. Please have a look around, any
                            feedback is much appreciated.</p>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="sidebar_item">
                        <h2>Latest Update</h2>
                        <h3>August 2014</h3>
                        <p>Working on my personal web site.</p>
                    </div>
                </div>

                <div className="sidebar">
                    <div className="sidebar_item">
                        <h2>Contact</h2>
                        <p>Phone: +91 (0)1234 567891</p>
                        <p>
                            Email: <a href="mailto:clive.dsouza1010@gmail.com">clive.dsouza1010@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;
