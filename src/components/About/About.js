import React from "react";
// import profileImage from "../../assets/banner.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <p>
          Greetings, my name is Mohamed Abdullahi and I am a resident of Ottawa, Canada. 
          I hold a Bachelor of Science degree in Information Technology from the University of Mount Kenya, which I completed in 2015. Additionally, I have completed the Willis Cyber Security Analyst program in 2021, 
          and I have also graduated from the Full Stack Developer Bootcamp at Carleton University- Ottawa where I gained expertise in building both frontend and backend web Applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;