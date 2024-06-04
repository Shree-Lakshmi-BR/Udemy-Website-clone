import React from "react";
import { MdLanguage } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import "./LeftOut.css";
import CoursesCarts from "./CoursesCarts";
function LeftOut() {
  return (
    <div>
      <div className="cont6">
        <div className="c61">
          <div className="t6">
            <h1>
              Top trends for the
              <br />
              future of work
            </h1>
            <h4>
              GenAI and leadership are at the <br /> core of today's
              skills-based <br />
              economy. Get the 2024 Global <br />
              Learning & Skills Trends Report to <br /> learn more.
            </h4>
            <div className="bt">
              <button
                style={{
                  backgroundColor: "white",
                  color: "#2D2F31",
                  width: "150px",
                  height: "50px",
                  border: "1px solid #2D2F31",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Get the report →
              </button>
            </div>
          </div>
        </div>
        <div className="c62">
          <img
            style={{ width: "100%", marginTop: "-4vh" }}
            src="https://cms-images.udemycdn.com/content/ag3rqs5nxw/png/2024_Angled_Trends_report_image.png?position=c&quality=80&x.app=portals"
            alt=""
          />
        </div>
      </div>
      <div className="cont7" style={{ backgroundColor: "#F7F9FA" }}>
        <div className="h">
          <h1 style={{ textAlign: "left", marginLeft: "30px" }}>
            Trending Now
          </h1>
        </div>
        <br />
        <hr />
        <br />
        <div className="ct7">
          <div className="c7">
            <h1>
              chatGPT is a top <br />
              skill
            </h1>
            <h3>
              See ChatGPT is courses{" "}
              <FaAngleRight style={{ paddingTop: "5px" }} />
            </h3>
            <p>3,127,423 learners</p>
            <button
              style={{
                backgroundColor: "#F7F9FA",
                color: "#2D2F31",
                width: "250px",
                height: "50px",
                border: "1px solid #2D2F31",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Show all trending skills ↝
            </button>
          </div>
          <div className="c7">
            <h2>Development</h2>
            <h3>
              Python <FaAngleRight style={{ paddingTop: "5px" }} />
            </h3>
            <p>44,562,520 learners</p>
            <h3>
              Web Development <FaAngleRight style={{ paddingTop: "5px" }} />
            </h3>
            <p>13,199,347 learners</p>
            <h3>
              Data Science <FaAngleRight style={{ paddingTop: "5px" }} />
            </h3>
            <p>7,167,104 learners</p>
          </div>
          <div className="c7">
            <h2>Design</h2>
            <h3>
              Blender <FaAngleRight style={{ paddingTop: "5px" }} />
            </h3>
            <p>44,562,520 learners</p>
            <h3>
              Graphic design <FaAngleRight style={{ paddingTop: "5px" }} />
            </h3>
            <p>13,199,347 learners</p>
            <h3>
              User Experience(UX) Design{" "}
              <FaAngleRight style={{ paddingTop: "5px" }} />
            </h3>
            <p>7,167,104 learners</p>
          </div>
          <div className="c7">
            <h2>Business</h2>
            <h3>
              PMI Project Management(PMP){" "}
              <FaAngleRight style={{ paddingTop: "5px" }} />
            </h3>
            <p>44,562,520 learners</p>
            <h3>
              Microsoft Power BI <FaAngleRight style={{ paddingTop: "5px" }} />
            </h3>
            <p>13,199,347 learners</p>
            <h3>
              Project Management
              <FaAngleRight style={{ paddingTop: "5px" }} />
            </h3>
            <p>7,167,104 learners</p>
          </div>
        </div>
      </div>
      <br />
      <div className="a1">
        <h1 style={{ textAlign: "left" }}>Learners are viewing</h1>
      </div>
      <CoursesCarts />
      <br />
      <div className="cont8">
        <div className="ct8">
          <div className="c8">
            <h2>Booz|Hallen|Hamilton</h2>
            <h1>
              Booz Allen Hamilton Unlocks Talent <br /> Retention and
              Productivity Through <br />
              Upskilling
            </h1>
            <div className="sm">
              <div className="s1">
                <h1>93%</h1>
                <h5>retention rate among participating employees</h5>
                <hr />
              </div>
              <div className="s1">
                <h1>65%</h1>
                <h5>
                  of learners noted a positive impact on their productivity
                </h5>
                <hr />
              </div>
            </div>
            <div className="full">
              {" "}
              <button>Read full story →</button>
            </div>
          </div>
        </div>
        <div className="ct8">
          <img
            src="https://cms-images.udemycdn.com/content/c4gpjcmcsk/png/UB_Case_Studies_Booz_Allen_image.png?position=c&quality=80&x.app=portals"
            alt=""
          />
        </div>
      </div>
      <footer>
        <div class="foot">
          <div class="last">
            <h4 class="pp">
              Top companies choose <span class="last1">Udemy Business</span> to
              build in-demand career skills.
            </h4>
            <div className="imgs">
              <img
                src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
                alt=""
              />
              <img
                src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
                alt=""
              />
              <img
                src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
                alt=""
              />
              <img
                src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
                alt=""
              />
              <img
                src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
                alt=""
              />
            </div>
          </div>
          <hr />
          <br />
          <div class="foot-lists">
            <ul>
              <li>Udemy Business</li>
              <li>Teach on udemy</li>
              <li>get the app</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>Help and Support</li>
              <li>Affiliate</li>
              <li>investor</li>
            </ul>
            <ul>
              <li>Terms</li>
              <li>Privacy policy</li>
              <li>Cookie settings</li>
              <li>Sitemap</li>
              <li>Accessibility statement</li>
            </ul>
            <div className="lang">
              <button>
                <MdLanguage /> English
              </button>
            </div>
          </div>
          <div className="copy">
            <p>© 2024 Udemy, Inc.</p>
          </div>
          <br />
          <br />
          <img
            class="pics"
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            alt=""
          />
        </div>
      </footer>
    </div>
  );
}

export default LeftOut;
