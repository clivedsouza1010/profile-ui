/**
 * Created by clive on 12/11/16.
 */

import React, { Component } from 'react';
import slideShow from '../lib/image_slide';
import picture1 from '../../images/Picture1.png';
import picture2 from '../../images/Picture2.jpg';
import picture3 from '../../images/Picture3.jpg';
import '../../css/index.css';

class SlideShow extends Component {
    render() {
       // slideShow(10000);
        return (
            <div className="slideshow">
                <ul className="slideshow">
                    <li className="show"><img width="680" height="250"
                                          src={picture3}
                                          alt="&quot;Northeastern University, Boston, MA&quot;" /></li>
                    <li><img width="680" height="250" src={picture2}
                             alt="&quot;Northeastern University, Boston, MA&quot;" /></li>
                    <li><img width="680" height="250" src={picture1}
                             alt="&quot;Northeastern University, Boston, MA&quot;" /></li>
                </ul>
            </div>
        );
    }
}

export default SlideShow;
