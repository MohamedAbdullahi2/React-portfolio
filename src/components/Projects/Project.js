import React from "react";
import flowerImage from "../../assets/portfolio.png";
import bookImage  from "../../assets/Book.png"
import WeatherImge from "../../assets/weather.png"
import editor  from "../../assets/Editor.png"
import tech from "../../assets/Tech.png"
import note   from "../../assets/Note.png"


function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
      <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://flower-emporium.herokuapp.com/">
                
                <img
                  src={flowerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Sweet-Pea-Flowers"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>The Flower Emporium</h4>
              <p>
                A HTMl, CSS, and Javascript application that lets the user shop
                for their favorite flowers.The user can sign in as a guest or as
                a user to add items to their cart. The user can manage their
                cart by using local storage. The user can checkout .
              </p>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://booksearch-engine-mern.herokuapp.com/">
                
                <img
                  src={bookImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Books"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Book Search-Engine</h4>
              <p>
              The web application is a MERN-based platform with GraphQL integration, 
              designed for users to search for books via a search bar and view their details. 
              Users have the ability to create accounts, save their preferred books, 
              and also delete them if needed.
              </p>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mohamedabdullahi2.github.io/Weather--Dash/">
                
                <img
                  src={WeatherImge}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Books"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
              Developed this weather API and forecast using HTML, CSS, and JavaScript which is the three commonly used technologies for web development, 
              for HTML I have used for creating the structure of the website and content layout, CSS for styling and formatting the look and feel of the website, such as colors, fonts, 
              and layout and JavaScript used to add interactivity and dynamic behavior to the website, such as updating the weather forecast based on user input or data from the weather API.
              </p>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://rocky-fjord-49440.herokuapp.com/">
                
                <img
                  src={editor}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Books"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Text Editor Web Application</h4>
              <p>
              This text editor that allows users to create notes or code snippets with or without an internet connection. 
              The application is designed to work reliably offline by using an integrated service worker and Cache API's, 
              ensuring that users can access their notes even when offline.
               The application also allows users to access visited pages even when offline.
              </p>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://infinite-cliffs-31701.herokuapp.com/">
                
                <img
                  src={tech}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Books"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Tech-blog</h4>
              <p>
              This Tech_plog is a Node.js web application built using the Express.js framework, 
              which enables it to handle HTTP requests and responses. 
              The application also employs the Handlebars template engine to render dynamic views in HTML. 
              Tech_plog uses a MySQL database and Sequelize ORM for object-relational mapping, 
              which makes it easier to interact with the database..
              </p>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://note-takerpp.herokuapp.com/">
                
                <img
                  src={note}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Books"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
              The Note-taker App is a simple web application that allows users to create and save notes. 
              It uses an Express server for the backend and is deployed on both GitHub and Heroku.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;