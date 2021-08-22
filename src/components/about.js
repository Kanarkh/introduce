import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import me from "../images/happyme.jpg"
const About = () => {
  return (
    <div className="secion" id="experience">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>Experience</h1>
            </Fade>
            <p>
              <h2>[Frontend 선발대 / 리딩경험]</h2>
              얄리얄리얄라셩 얄라리 얄라
              <br></br>
              <br></br>
              <h2>[성장을 위해 노력하다 보니 고통을 즐기게 되었습니다]</h2>
              얄리얄리얄라셩 얄라리 얄라
              <br></br>
              <br></br>
              <h2>[여러 대회에서 팀장을 하게된 이유]</h2>
              얄리얄리얄라셩 얄라리 얄라
            </p>
          </div>
          <div className="image-wrapper">
            <img className="about_myimg" src={me} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
