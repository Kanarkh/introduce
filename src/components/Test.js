import React from "react"

import mdlm1 from "../images/mdlm1.png"
import mdlm2 from "../images/mdlm2.png"
import mdlm3 from "../images/mdlm3.png"
import mdlm4 from "../images/mdlm4.png"
import mdlm5 from "../images/mdlm5.png"
import mdlm6 from "../images/mdlm6.png"
import mdlm7 from "../images/mdlm7.png"
import mdlm8 from "../images/mdlm8.png"
import mdl1 from "../images/mdl1.png"
import mdl2 from "../images/mdl2.png"
import mdl3 from "../images/mdl3.png"
import mdl4 from "../images/mdl4.png"
import mdl5 from "../images/mdl5.png"
import mdl6 from "../images/mdl6.png"
import mdl7 from "../images/mdl7.png"
import mdl8 from "../images/mdl8.png"
import mdl9 from "../images/mdl9.png"
import mdl10 from "../images/mdl10.png"
import mdl11 from "../images/mdl11.png"
import mdl12 from "../images/mdl12.png"
// import mdlInstall1 from "../images/mdlInstall1.png"
// import mdlInstall2 from "../images/mdlInstall2.png"
// import mdlInstall3 from "../images/mdlInstall3.png"
// import mdlInstall4 from "../images/mdlInstall4.png"
// import storybook1 from "../images/storybook1.png"
// import storybook2 from "../images/storybook2.png"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Test = () => {
  return(
    <div className="section">
      <div className="container">
        <div className="skills-container">
        <h1>Test</h1>
          <div id="test">
            <Carousel  showArrows swipeable emulateTouch showThumbs={false} infiniteLoop={false} autoPlay={false}>
              <div>
                <img src={mdlm1} alt="mdlm-img1"/>
              </div>
              <div>
                <img src={mdlm2} alt="mdlm-img2"/>
              </div>
              <div>
                <img src={mdlm3} alt="mdlm-img3"/>
              </div>
              <div>
                <img src={mdlm4} alt="mdlm-img4"/>
              </div>
              <div>
                <img src={mdlm5} alt="mdlm-img5"/>
              </div>
              <div>
                <img src={mdlm6} alt="mdlm-img6"/>
              </div>
              <div>
                <img src={mdlm7} alt="mdlm-img7"/>
              </div>
              <div>
                <img src={mdlm8} alt="mdl-img8"/>
              </div>
            </Carousel>
            <br/>
            <Carousel dynamicHeight showArrows swipeable emulateTouch showThumbs={false} infiniteLoop={false} autoPlay={false}>
              <div>
                <img src={mdl1} alt="mdl-img1"/>
              </div>
              <div>
                <img src={mdl2} alt="mdl-img1"/>
              </div>
              <div>
                <img src={mdl3} alt="mdl-img1"/>
              </div>
              <div>
                <img src={mdl4} alt="mdl-img1"/>
              </div>
            </Carousel>
            <br/>
            <Carousel dynamicHeight showArrows swipeable emulateTouch showThumbs={false} infiniteLoop={false} autoPlay={false}>
              <div>
                <img src={mdl6} alt="mdl-img1"/>
              </div>
              <div>
                <img src={mdl5} alt="mdl-img1"/>
              </div>
              <div>
                <img src={mdl9} alt="mdl-img1"/>
              </div>
              <div>
                <img src={mdl10} alt="mdl-img1b"/>
              </div>
              <div>
                <img src={mdl12} alt="mdl-img1"/>
              </div>
              <div>
                <img src={mdl7} alt="mdl-img1"/>
              </div>
              <div>
                <img src={mdl8} alt="mdl-img1"/>
              </div>
              <div>
                <img src={mdl11} alt="mdl-img1"/>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
