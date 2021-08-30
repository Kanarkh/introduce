import React from "react"

const Skills = () => {
    return (
        <div className="section" id="skills">
            <div className="container">
                <div className="skills-container">
                    <h1>Skills</h1>
                    <div className="skill-table">
                        <div className="title">
                            <h2>Frontend</h2>
                        </div>
                        <div className="content">
                            <ul>
                                <li><b>HTML</b></li>
                                <li><b>CSS</b></li>
                                <li><b>Javascript</b></li>
                                <li><b>Typescript</b></li>
                                <li><b>styled-components</b></li>
                                <li><b>React</b></li>
                                    <ul>
                                        <li>Redux</li>
                                        <li>Atomic Design Pattern</li>
                                        <li>Container-Presenter Pattern</li>
                                    </ul>
                                <li>chart.js</li>
                                <li>Recharts</li>
                                <li>webpack</li>
                                <li>Parcel</li>
                                <li>babel</li>
                                <li>Storybook</li>
                                <li className="gray_li">Android(Java)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-table">
                        <div className="title">
                            <h2>Backend</h2>
                        </div>
                        <div className="content">
                            <ul>
                                <li>Node.js</li>
                                <li>Docker</li>
                                <li>MongoDB</li>
                                <li>C</li>
                                <li className="gray_li">Golang</li>
                                <li className="gray_li">Redis</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-table">
                        <div className="title">
                            <h2>E.T.C</h2>
                        </div>
                        <div className="content">
                            <ul>
                                <li>Linux</li>
                                <li>Git</li>
                                <li>Jira & Wiki</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
