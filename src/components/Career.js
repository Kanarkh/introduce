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
                            <h3 className="vertical-timeline-element-title">Platform team / 개발자</h3>
                            <h4 className="vertical-timeline-element-subtitle">(주)미디움</h4>
                            <p>
                                Frontend(main), Backend(sub)
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
                                팀장<br/>
                                BlockChain(Hyperledger fabric Setting, Chain code 코딩)
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
                                팀장<br/>
                                모듈형 델타로봇 학습키트 개발
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
                            <h3 className="vertical-timeline-element-title">2016년도 졸업작품 경진대회 수상 / 엑스포</h3>
                            <h4 className="vertical-timeline-element-subtitle">한국폴리텍</h4>
                            <p>
                                팀장, 학교 대표로 엑스포 참가<br/>
                                대통령이 참관할 예정이었으나 탄핵으로 오지 못한 박람회<br/>
                                몰입의 행복과 사랑받는 서비스를 만들고 싶다는 꿈을 만들어준 프로젝트
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
                                팀장 / 발표자 <br/>
                                한국과학기술원(KAIST), 목원대, 충남대, 국제청소년로봇연맹, 대한로봇축구협회, ㈜새온 및 ㈜엠텍 등 산·학·연 7개 기관이 주관하는 전국대회
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
                                "군대에서 어떻게 더 성장하고 발전할수 있을까?"라는 생각으로<br/> 노력하다보니 연대 간부 회의에서 <br/>군수과장님이 연대장님께 건의해 받게 된 표창장
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default Career
