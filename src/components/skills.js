import React from "react"
import {Tag, Divider, Descriptions, } from 'antd';
import "antd/dist/antd.css";

const Skills = () => {
    return (
        <div className="section" id="skills">
            <div className="container">
                <div className="skills-container">
                    <h1>Skills</h1>
                    <Divider orientation="left"><Tag color="#87d068">업무에 활용해요</Tag></Divider>
                    <Descriptions title="Frontend">
                        <Tag>Typescript</Tag>
                        <Tag>Javascript</Tag>
                        <Tag>React.js</Tag>
                        <Tag>styled-components</Tag>
                        <Tag>Redux</Tag>
                        <Tag>Redux-thunk</Tag>
                        <Tag>Redux-persist</Tag>
                        <Tag>HTML</Tag>
                        <Tag>CSS</Tag>
                    </Descriptions>
                    <br/>
                    <Divider orientation="left"><Tag color="#2db7f5">어느정도 사용해요</Tag></Divider>
                    <Descriptions title="Frontend">
                        <Tag>chart.js</Tag>
                        <Tag>webpack</Tag>
                        <Tag>Parcel</Tag>
                        <Tag>Storybook</Tag>
                    </Descriptions>
                    <Descriptions title="Backend">
                        <Tag>Node.js</Tag>
                        <Tag>Golang</Tag>
                        <Tag>C</Tag>
                    </Descriptions>
                    <Descriptions title="Devops">
                        <Tag>Linux</Tag>
                        <Tag>GitHub Actions</Tag>
                    </Descriptions>
                    <br/>
                    <Divider orientation="left"><Tag color="#C62828">보고 이해할 수는 있어요</Tag></Divider>
                    <Descriptions title="Backend">
                        <Tag>Redis</Tag>
                        <Tag>Nginx</Tag>
                    </Descriptions>
                    <Descriptions title="Devops">
                        <Tag>Docker</Tag>
                        <Tag>Kubernetes</Tag>
                    </Descriptions>
                    <br/>
                    <Divider orientation="left"><Tag color="#607D8B">개인프로젝트 경험 있어요</Tag></Divider>
                    <Descriptions title="Frontend">
                        <Tag>Android(Java / Kotlin)</Tag>
                        <Tag>jQuery</Tag>
                    </Descriptions>
                    <br/>
                    <Descriptions title="Backend">
                        <Tag>Apache</Tag>
                        <Tag>MySQL</Tag>
                        <Tag>Couch DB</Tag>
                        <Tag>Python:BeautifulSoup</Tag>
                        <Tag>Hyperledger Fabric</Tag>
                        <Tag>PHP</Tag>
                    </Descriptions>
                    <br/>
                    <Divider orientation="left"><Tag color="#424242">이런 패턴을 좋아해요</Tag></Divider>
                    <Descriptions >
                        <Tag>React Atomic Design</Tag>
                        <Tag>React Container-Presenter</Tag>
                        <Tag>Redux ducks pattern</Tag>
                    </Descriptions>
                    <br/><br/>
                </div>
            </div>
        </div>
    )
}

export default Skills;
