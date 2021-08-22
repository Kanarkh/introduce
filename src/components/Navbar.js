import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Luce.
          </div>
          <div className="links-wrapper">
            {/*<button onClick={() => scrollTo("#experience")}>Experience</button>*/}
            <button onClick={() => scrollTo("#skills")}>Skills</button>
            <button onClick={() => scrollTo("#portfolio")}>Portfolio</button>
            <button onClick={() => scrollTo("#career")}>Career</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
