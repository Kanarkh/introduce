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
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>Typescript</li>
                                <li>React</li>
                                    <ul>
                                        <li>Redux</li>
                                        <li>Atomic Design Pattern</li>
                                        <li>Container-Presenter Pattern</li>
                                    </ul>
                                <li>styled-components</li>
                                <li>webpack</li>
                                <li>Parcel</li>
                                <li>babel</li>
                                <li>Storybook</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-table">
                        <div className="title">
                            <h2>Backend</h2>
                        </div>
                        <div className="content">
                            <ul>
                                <li>node.js</li>
                                <li>Golang</li>
                                <li>Docker</li>
                                <li>MongoDB</li>
                                <li>Redis</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-table">
                        <div className="title">
                            <h2>E.T.C</h2>
                        </div>
                        <div className="content">
                            <ul>
                                <li>Git</li>
                                <li>Linux</li>
                                <li>Prettier</li>
                                <li>Java</li>
                                <li>Android(Java)</li>
                                <li>C</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
