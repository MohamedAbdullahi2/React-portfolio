import React from "react";
import flowerImage from "../../assets/portfolio.png";
import bookImage  from "../../assets/Book.png"


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
        
      </section>
    </div>
  );
}

export default Portfolio;