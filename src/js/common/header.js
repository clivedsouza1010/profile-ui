/**
 * Created by clive on 12/11/16.
 */

import { Link } from 'react-router';
import React, { Component } from 'react';
import '../../css/index.css';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div id="menubar">
                        <ul id="nav">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/mywork">Work Experience</Link></li>
                            <li><a href="">Education</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <div id="banner">
                    <div id="welcome">
                        <h3>
                            Clive <span>D'Souza</span>
                        </h3>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;