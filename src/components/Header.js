import React from "react"
import Fade from "react-reveal/Fade"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {" "}
                몰입을 즐기는
              </h1>
              <h1>
                {" "}
                소통을 좋아하는
              </h1>
              <h1>
                {" "}
                성장하는 삶을 사는
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <h2>
              개발자 강성혁(Luce) 입니다 {" "}
              <span role="img" aria-label="Emoji">
                🧑🏽‍💻
              </span>
            </h2>
          </Fade>
          <Fade bottom>
            <p>
              새로운걸 배우고 만드는 과정의 몰입이 즐거워, 취미로 시작한 개발이 직업이 되었습니다<br/>
              제가 만든 걸 사람들이 행복하게 사용하는 게 즐겁습니다, 사랑받는 서비스를 만들기 위해 오늘도 성장합니다.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
