import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Kakao from "../images/kakaotalk.png"
const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>함께 성장하고 싶습니다</h2>
          </Fade>
          <a className="email-link" target="_blank" rel="noopener noreferrer" href="https://open.kakao.com/o/soCLXR2c">
            <img className="kakao_img" src={Kakao} alt="kakaotalk" />
          </a>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
