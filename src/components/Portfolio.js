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
import besu1 from "../images/besu1.png"
import besu2 from "../images/besu2.png"
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {RightOutlined, DownOutlined} from '@ant-design/icons';

const Portfolio = () => {
    const [screenshotState_0, setScreenshotState_0] = useState(true);
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
                            <h2>besu-explorer</h2>
                            <hr className="solid"/>
                            <h3>프로젝트 개요</h3>
                            <p>
                                ethereum lite explorer 기반의 Hyperledger Besu explorer 입니다.
                            </p>
                            <h3>사용 기술 [Frontend]</h3>
                            <p>
                                <span className="tag_span">
                                    <h4>React</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>Typescript</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>styled-components</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>webpack</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>ethereum lite explorer</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>alethio/cms</h4>
                                </span>
                            </p>
                            <h3>프로젝트 기여</h3>
                            <p>
                                <ul>
                                    <li>
                                        Transactions List page 개발
                                    </li>
                                    <li>
                                        Transactions Details 개발
                                    </li>
                                </ul>
                            </p>
                            <h3 className="portfolio_toggle_h3" onClick={() => {
                                setScreenshotState_1(!screenshotState_1)
                            }}>
                                {screenshotState_1 ? (<><DownOutlined/>{" "} Close Screenshot</>):(<><RightOutlined/>{" "} View Screenshot</>)}
                            </h3>
                            {screenshotState_1 ? (
                                <Carousel showArrows swipeable emulateTouch showThumbs={false} infiniteLoop={false}
                                          autoPlay={false}>
                                    <div>
                                        <img src={besu1} alt="besu-img1"/>
                                    </div>
                                    <div>
                                        <img src={besu2} alt="besu-img2"/>
                                    </div>
                                </Carousel>
                            ) : null}
                        </div>
                        <div className="portfolio_project_div">
                            <h2>MDL-manager</h2>
                            <hr className="solid"/>
                            <h3>프로젝트 개요</h3>
                            <p>
                                MDL Manager은 기업 고객에 필요한 Hyperledger Fabric에서 동작하는 DApp을 서비스하는 플랫폼입니다.
                            </p>
                            <h3>사용 기술 [Frontend]</h3>
                            <p>
                                <span className="tag_span">
                                    <h4>React</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>Typescript</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>styled-components</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>Redux</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>chart.js</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>axios</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>axios-retry</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>Jest</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>webpack</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>prettier</h4>
                                </span>
                            </p>
                            <h3>프로젝트 기여</h3>
                            <p>
                                <ul>
                                    <li>Frontend 이슈 분배</li>
                                    <li>Frontend 개발</li>
                                    <li>컴포넌트 초기 개발</li>
                                    <li>필요 기술 학습후 팀원들에게 공유</li>
                                    <li>axios 오류 처리 관련 코드 작성</li>
                                    <li>Web publish</li>
                                    <li>디자이너와 소통</li>
                                    <li>Backend 로그인 관련 API 개발 (golang, mongodb, redis)</li>
                                    <li>Frontend docker image build</li>
                                </ul>
                            </p>
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
                            <h3>프로젝트 개요</h3>
                            <p>
                                스토리북으로 컴포넌트 관리를 더 원활하게 해서, 생산성과 커뮤니케이션 비용 절감.<br/>
                                회사만의 디자인 시스템을 구축하기 위한 교두보
                            </p>
                            <h3>사용 기술</h3>
                            <p>
                                <span className="tag_span">
                                    <h4>Storybook</h4>
                                </span>
                            </p>
                            <h3>프로젝트 기여</h3>
                            <p>
                                - Storybook 학습 후 사용방법 공유
                            </p>
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
                            <h3>프로젝트 개요</h3>
                            <p>
                                MDL Manager은 기업 고객에 필요한 Hyperledger Fabric의 대시보드 프로젝트 입니다.
                            </p>
                            <h3>사용 기술 [Frontend]</h3>
                            <p>
                                <span className="tag_span">
                                    <h4>React</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>Typescript</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>styled-components</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>Redux</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>redux-thunk</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>redux-persist</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>chart.js</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>axios</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>axios-retry</h4>
                                </span>
                            </p>
                            <h3>프로젝트 기여</h3>
                            <p>
                                <ul>
                                    <li>Frontend 이슈 분배</li>
                                    <li>Frontend 개발</li>
                                    <li>필요 기술 학습후 팀원들에게 공유</li>
                                    <li>Web publish</li>
                                </ul>
                            </p>
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
                            <h3>프로젝트 개요</h3>
                            <p>
                                MDL Manager은 기업 고객에 필요한 Hyperledger Fabric에서 동작하는 DApp을 서비스하는 플랫폼입니다.
                            </p>
                            <h3>사용 기술 [Frontend]</h3>
                            <p>
                                <span className="tag_span">
                                    <h4>React</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>Typescript</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>styled-components</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>Redux</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>axios</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>axios-retry</h4>
                                </span>
                            </p>
                            <h3>프로젝트 기여</h3>
                            <p>
                                <ul>
                                    <li>해당 프로젝트 frontend 단독 개발</li>
                                    <li>Web publish</li>
                                    <li>디자이너와 소통</li>
                                </ul>
                            </p>
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
                            <h2>MDLX Chain Code API 개발</h2>
                            <hr className="solid"/>
                            <h3>프로젝트 개요</h3>
                            <p>
                                외부에서 Chain Code를 사용할 수 있도록 API 개발
                            </p>
                            <h3>사용 기술</h3>
                            <p>
                                <span className="tag_span">
                                    <h4>React</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>Hyperledger Explorer</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>node.js</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>redis</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>mongodb</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>nginx reverse proxy</h4>
                                </span>
                            </p>
                            <h3>프로젝트 기여</h3>
                            <p>
                                <ul>
                                    <li>Backend 설계 및 개발</li>
                                    <li>Frontend 페이지 개발</li>
                                </ul>
                            </p>
                        </div>
                        <div className="portfolio_project_div">
                            <h2>성격유형검사 [Toy project]</h2>
                            <hr className="solid"/>
                            <h3>프로젝트 개요</h3>
                            <p>
                                <ul>
                                    <li>주변 지인들에게 성격검사를 해주기 위해 페이지 제작</li>
                                    <li>Typescript에서 Atomic Design Pattern을 연습하기 위한 개인 프로젝트</li>
                                </ul>
                            </p>
                            <h3>페이지 이동</h3>
                            <a
                                href="https://nature-test-swx73qf23q-uc.a.run.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                // className="career_btn_a"
                            >
                                https://nature-test-swx73qf23q-uc.a.run.app
                            </a>
                            <h3>사용 기술</h3>
                            <p>
                                <span className="tag_span">
                                    <h4>React</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>Typescript</h4>
                                </span>
                                <span className="tag_span">
                                    <h4>Google Cloud Platform(Cloud Run)</h4>
                                </span>
                            </p>
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
