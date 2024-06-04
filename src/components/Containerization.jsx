import React from 'react'
import "./Containerization.css"
import { FaArrowRight } from "react-icons/fa";

function Containerization() {
  return (
    <div className="containerize">
      {/* 1st part */}
      <article className="cart1">
        <h1>Learning focused on your goals</h1>
        {/*  */}
        <aside className="training">
          <aside>
            <img
              src="https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png"
              alt=""
              height={70}
            />
          </aside>
          <aside>
            <h3>Hands-on training</h3>
            <p>
              Upskill effectively with AI-powered coding exercises, practice
              tests, skills assessments, labs, and workspaces.
            </p>
          </aside>
        </aside>
        {/*  */}
        <aside className="certifi">
          <aside>
            <img
              src="https://cms-images.udemycdn.com/96883mtakkm8/2Xh9YHJustDwCEjn5IlO25/93e9b15c6e74876db0dec63466fcc5a0/certificate.png"
              alt=""
              height={70}
            />
          </aside>
          <aside>
            <h3>Certification prep</h3>
            <p>
              Prep for industry-recognized certifications by solving real-world
              challenges and earn badges along the way.
            </p>
          </aside>
        </aside>
        {/*  */}
        <aside className="insight">
          <aside>
            <img
              src="https://cms-images.udemycdn.com/96883mtakkm8/6w8plrr7vY9rIY46UuX0q5/2f0a3f0c22e99bd2d430b998c81321f2/empty-state-1.png"
              alt=""
              height={70}
            />
          </aside>
          <aside>
            <h3>Insights and analytics</h3>
            <button>Enterprise Plan</button>
            <p>
              Fast-track goals with advanced insights plus a dedicated customer
              success team to help drive effective learning.
            </p>
            <a href="./app.js">
              Find out more <FaArrowRight style={{ paddingTop: "5px" }} />
            </a>
          </aside>
        </aside>
        {/*  */}
        <aside className="customize">
          <aside>
            <img
              src="https://cms-images.udemycdn.com/96883mtakkm8/2tKGBrb1N60wox2Lh8j3tz/7f1528c9f88ea47bd6ebb46f345902c3/organizations-2.png"
              alt=""
              height={70}
            />
          </aside>
          <aside>
            <h3>Customizable content</h3>
            <button>Enterprise Plan</button>
            <p>
              Create tailored learning paths for team and organization goals and
              even host your own content and resources.
            </p>
            <a href="./app.js">
              Find out more <FaArrowRight style={{ paddingTop: "5px" }} />
            </a>
          </aside>
        </aside>
      </article>
      {/* 2nd part */}
      <article className="cart2">
        <img
          src="https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png"
          alt="Score Chart"
          height={400}
          width={400}
        />
      </article>
    </div>
  );
}

export default Containerization
