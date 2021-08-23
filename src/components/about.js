import React from "react"
import Fade from "react-reveal/Fade"
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
              입사후 회사에서 가장 필요한 역할이 무엇인지 관찰해보니 회사에 Frontend쪽이 약하다는걸 알게 되었습니다.<br/>
              Frontend의 효율적인 실무 경향을 알기위해 시니어가 있는 온라인 React 스터디에 가입하기도 하고, 주말 스터디의 개발자들에게 제가 공부한걸 공유하고 다른 회사의 업무 방식을 공유 받으며 기술을 익혀갔습니다.
              이렇게 익힌 기술들과 프론트엔드 레퍼런스를 보며 회사에 어떤 기술을 적용해야 생산성과 퀄리티를 높일지 연구했습니다. 또 회사에 필요한 기술을 먼저 익혀 같이 Frontend를 개발하는 동료 개발자에게 공유해줘 러닝커브를 줄이고 효율을 높여가다 보니
              어느덧 프론트엔드 관련해서 이슈 생성을 맡아 하게 되었고, 동료들에게 해결하기 어려운 문제가 생기면 저에게 찾아왔고 문제 해결에 도움을 주는 역할을 하게 되었습니다.
              <br/><br/>
              운이 좋았습니다, 필요하다면 어떤것이든 시도할수있는 개발문화를 가진 회사에서 정답을 알려주는게 아닌 생각을 할 수 있도록 도와주는 CTO님을 만났고, 회사에 필요한 기술을 도입할때도 거부감 없이 같이 고민해준 같은 주니어 개발자 동료들이 있었습니다.
              Frontend를 맨 앞 선두에서 회사에 필요한 기술을 도입해가며 평소보다 더 몰입했고 즐거웠습니다. 혼자서 개발했더라면 배우지 못할 값진 경험이었습니다.
              <br/><br/>
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
