import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import AN from "../img/AN.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnity,
  faGithub,
  faSpotify,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />
      <br/>
      <br/>
      <section id="carton">
        <div className=" mt-2">
          <div className="col">
            <div className="card p-5">
              <div className="row">
                <div className="col-lg-5 text">
                  <h4 className="text-black fw-bold">About Me</h4>
                  <p className="text-light ">
                  I'm a college student at Central Philippines State University studying Information Technology.
                  I have a keen interest in software development, cybersecurity, and new tech. 
                   Studying these subjects has not only improved my technical skills but also made me passionate about solving problems with new ideas and keeping systems secure.
                   
                  </p>
                  <h4 className="text-black fw-bold">Academic Journey</h4>
                  <p className="text-light">
                  During my time at the College of Computer Studies,
                   I've learned a  about programming languages like C++, 
                   web development tools, and JavaScript. These languages have taught me how to create 
                   software and build websites that can do cool things. By working on assignments and projects,
                    I've gotten better at using these languages to solve problems and make things work well. 
            
                  </p>
                </div>
                <div className="col-lg-5 mb-9">
                  <center>
                    <img
                      src={AN}
                      alt="Profile Picture of Layca Florin"
                    />
                  </center>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="education" class="education">
        <div class="section-heading text-center mb-5">
          <br/>  <br/>
          <h1><b>Education</b></h1>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-3 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2024</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Central Philippines State University
                      </h4>
                      <p className="text-secondary">
                        Brgy. Camingawan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-md-3 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2018</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                      Florentino Galang Jr. National High School
                      </h4>
                      <p className="text-secondary">
                       Kabankalan City Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2019</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Florentino Galang Sr. National High School
                      </h4>
                      <p className="text-secondary">
                        Brgy. Oringao, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2014</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">Florentino Galang Sr. School</h4>
                      <p className="text-secondary">
                        Pine Tree Brgy. Oringao, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
