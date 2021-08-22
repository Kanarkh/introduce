import React, {useState} from "react"
import mdlm1 from "../images/mdlm1.png"
import mdlm2 from "../images/mdlm2.png"
import mdlm3 from "../images/mdlm3.png"
import mdlm4 from "../images/mdlm4.png"
import mdlm5 from "../images/mdlm5.png"
import mdlm6 from "../images/mdlm6.png"
import mdlm7 from "../images/mdlm7.png"
import mdlm8 from "../images/mdlm8.png"
// import mdl1 from "../images/mdl1.png"
// import mdl2 from "../images/mdl2.png"
// import mdl3 from "../images/mdl3.png"
// import mdl4 from "../images/mdl4.png"
import mdl5 from "../images/mdl5.png"
import mdl6 from "../images/mdl6.png"
import mdl7 from "../images/mdl7.png"
import mdl8 from "../images/mdl8.png"
import mdl9 from "../images/mdl9.png"
import mdl10 from "../images/mdl10.png"
import mdl11 from "../images/mdl11.png"
import mdl12 from "../images/mdl12.png"
import mdlInstall1 from "../images/mdlInstall1.png"
import mdlInstall2 from "../images/mdlInstall2.png"
import mdlInstall3 from "../images/mdlInstall3.png"
import mdlInstall4 from "../images/mdlInstall4.png"
import storybook1 from "../images/storybook1.png"
import storybook2 from "../images/storybook2.png"
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {RightOutlined, DownOutlined} from '@ant-design/icons';

const Portfolio = () => {
    const [screenshotState_1, setScreenshotState_1] = useState(true);
    const [screenshotState_2, setScreenshotState_2] = useState(true);
    const [screenshotState_3, setScreenshotState_3] = useState(true);
    const [screenshotState_4, setScreenshotState_4] = useState(true);
    return (
        <div className="section" id="portfolio">
            <div className="container">
                <div className="skills-container">
                    <h1>Portfolio</h1>
                    <div className="portfolio_root_div">
                        <div className="portfolio_project_div">
                            <h2>MDL-manager</h2>
                            <hr className="solid"/>
                            <h3 className="portfolio_toggle_h3" onClick={() => {
                                setScreenshotState_1(!screenshotState_1)
                            }}>
                                {screenshotState_1 ? (<><DownOutlined/>{" "} Close Screenshot</>):(<><RightOutlined/>{" "} View Screenshot</>)}
                            </h3>
                            {screenshotState_1 ? (
                                <Carousel showArrows swipeable emulateTouch showThumbs={false} infiniteLoop={false}
                                          autoPlay={false}>
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
                            ) : null}
                        </div>
                        <div className="portfolio_project_div">
                            <h2>MDL-manager Storybook</h2>
                            <hr className="solid"/>
                            <h3 className="portfolio_toggle_h3" onClick={() => {
                                setScreenshotState_4(!screenshotState_4)
                            }}>
                                {screenshotState_4 ? (<><DownOutlined/>{" "} Close Screenshot</>):(<><RightOutlined/>{" "} View Screenshot</>)}
                            </h3>
                            {screenshotState_4 ? (
                                <Carousel dynamicHeight showArrows swipeable emulateTouch showThumbs={false}
                                          infiniteLoop={false} autoPlay={false}>
                                    <div>
                                        <img src={storybook1} alt="storybook-img1"/>
                                    </div>
                                    <div>
                                        <img src={storybook2} alt="storybook-img1"/>
                                    </div>
                                </Carousel>) : null
                            }
                        </div>
                        <div className="portfolio_project_div">
                            <h2>MDL</h2>
                            <hr className="solid"/>
                            <h3 className="portfolio_toggle_h3" onClick={() => {
                                setScreenshotState_2(!screenshotState_2)
                            }}>
                                {screenshotState_2 ? (<><DownOutlined/>{" "} Close Screenshot</>):(<><RightOutlined/>{" "} View Screenshot</>)}
                            </h3>
                            {screenshotState_2 ? (
                                <Carousel dynamicHeight showArrows swipeable emulateTouch showThumbs={false}
                                          infiniteLoop={false} autoPlay={false}>
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
                                </Carousel>) : null
                            }
                        </div>
                        <div className="portfolio_project_div">
                            <h2>MDL-Installer</h2>
                            <hr className="solid"/>
                            <h3 className="portfolio_toggle_h3" onClick={() => {
                                setScreenshotState_3(!screenshotState_3)
                            }}>
                                {screenshotState_3 ? (<><DownOutlined/>{" "} Close Screenshot</>):(<><RightOutlined/>{" "} View Screenshot</>)}
                            </h3>
                            {screenshotState_3 ? (
                                <Carousel dynamicHeight showArrows swipeable emulateTouch showThumbs={false}
                                          infiniteLoop={false} autoPlay={false}>
                                    <div>
                                        <img src={mdlInstall1} alt="installer-img1"/>
                                    </div>
                                    <div>
                                        <img src={mdlInstall2} alt="installer-img1"/>
                                    </div>
                                    <div>
                                        <img src={mdlInstall3} alt="installer-img1"/>
                                    </div>
                                    <div>
                                        <img src={mdlInstall4} alt="installer-img1b"/>
                                    </div>
                                </Carousel>) : null
                            }
                        </div>
                        <div className="portfolio_project_div">
                            <h2>MDLX-리버스 프록시</h2>
                            <hr className="solid"/>
                        </div>
                        <div className="portfolio_project_div">
                            <h2>성격유형검사</h2>
                            <hr className="solid"/>
                            <a
                                href="https://nature-test-swx73qf23q-uc.a.run.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                // className="career_btn_a"
                            >
                                site link
                            </a>
                        </div>
                        <div className="portfolio_end_div">
                            <a
                                href="https://drive.google.com/file/d/1gVNKeSATLsPzP2BRII8VZK243OYvSinM/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="career_btn_a"
                            >
                                <h2>2020년 이전 portfolio 구경하기 (PDF)</h2>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
