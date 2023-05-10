import React from "react";
import Nav from "../Nav/Nav";
import ImageMe from "../../assets/ImageME.png"

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div className ="myImage">
          <img src={ImageMe} alt="Mohamed's Portfolio" />
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
          <h2>Welcome</h2>
          <p>
          Welcome to the React-built portfolio page of Mohamed, where you can discover a selection of the projects that he has completed during the program.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;