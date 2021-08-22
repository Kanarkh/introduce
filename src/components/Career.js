import React from "react"
import Fade from "react-reveal/Fade"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Medal from "../images/medal2.png"
const Career = () => {
    return (
        <div className="section" id="career">
            <div className="container">
                <div className="promotion-container">
                    <Fade bottom cascade>
                        <h1>Career</h1>
                    </Fade>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2020.06 ~ Present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Platform team / 개발</h3>
                            <h4 className="vertical-timeline-element-subtitle">(주)미디움</h4>
                            <p>
                                미디움에서 어떤 일을 맡아 했는
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2020.02"
                            iconStyle={{ background: 'rgb(236,153,33)', color: '#fff' }}
                            icon={
                                <div className="career_icon_div">
                                    <img className="career_icon_img" src={Medal} alt="medal"/>
                                </div>
                            }
                        >
                            <h3 className="vertical-timeline-element-title">블록체인 만렙 달성 대회 (대상)</h3>
                            <h4 className="vertical-timeline-element-subtitle">서울창업허브/게임이용자보호센터</h4>
                            <p>
                                Creative Direction, Visual Design
                                <br/>
                                <a
                                    href="https://game.mk.co.kr/view.php?year=2020&no=142651"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="career_btn_a"
                                >
                                    View News
                                </a>
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2016.12 ~ 2019.02"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">전기·전자·제어 연구원</h3>
                            <h4 className="vertical-timeline-element-subtitle">(주)알스텍</h4>
                            <p>
                                AVR, ARM Programming, PCB design (OrCAD, PADS)
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2016.11"
                            iconStyle={{ background: 'rgb(236,153,33)', color: '#fff' }}
                            icon={
                                <div className="career_icon_div">
                                    <img className="career_icon_img" src={Medal} alt="medal"/>
                                </div>
                            }
                        >
                            <h3 className="vertical-timeline-element-title">창의적 교육ㆍ훈련 장비 및 매체 개발 경연대회 (장려상)</h3>
                            <h4 className="vertical-timeline-element-subtitle">한국실천공학교육학회</h4>
                            <p>
                                Creative Direction, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2016.08"
                            iconStyle={{ background: 'rgb(236,153,33)', color: '#fff' }}
                            icon={
                                <div className="career_icon_div">
                                    <img className="career_icon_img" src={Medal} alt="medal"/>
                                </div>
                            }
                        >
                            <h3 className="vertical-timeline-element-title">2016년도 졸업작품 경진대회 수</h3>
                            <h4 className="vertical-timeline-element-subtitle">한국폴리텍</h4>
                            <p>
                                Creative Direction, Visual Design
                                <br/>
                                <a
                                    href="http://m.joongdo.co.kr/view.php?key=20161102000017336"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="career_btn_a"
                                >
                                    View News
                                </a>
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2016.08"
                            iconStyle={{ background: 'rgb(236,153,33)', color: '#fff' }}
                            icon={
                                <div className="career_icon_div">
                                    <img className="career_icon_img" src={Medal} alt="medal"/>
                                </div>
                            }
                        >
                            <h3 className="vertical-timeline-element-title">2016 전국 융합과학(STEAM) 창작 경진대회 (동상)</h3>
                            <h4 className="vertical-timeline-element-subtitle">목원대학교</h4>
                            <p>
                                Creative Direction, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2013.12"
                            iconStyle={{ background: 'rgb(236,153,33)', color: '#fff' }}
                            icon={
                                <div className="career_icon_div">
                                    <img className="career_icon_img" src={Medal} alt="medal"/>
                                </div>
                            }
                        >
                            <h3 className="vertical-timeline-element-title">표창장</h3>
                            <h4 className="vertical-timeline-element-subtitle">육군 제51보병연대 전투지원중대</h4>
                            <p>
                                Creative Direction, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        {/*<VerticalTimelineElement*/}
                        {/*    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}*/}
                        {/*    // icon={<StarIcon />}*/}
                        {/*/>*/}
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default Career
