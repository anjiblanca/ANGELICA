import "./Experience.css";
import Navbar from "./Navbar";
import p1 from "../img/p1.jpeg";
import p2 from "../img/p2.jpeg";
import p3 from "../img/p3.jpeg";
import p4 from "../img/p4.jpg";

const Experience = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="overlay">
          <div class="container5">
            <div class="bubbles"> </div>
            <div id="experience-info" className="bg-secondary bg-gradient">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="text-black fw-bold display-1 text-center mt-5 pt-5">
                      Experiences
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        </div>
      </div>

      <section id="first">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="card p-5 shadow text-center">
          <img src={p1} className="card-img-top mt-3" alt="" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card p-5 shadow text-center">
          <img src={p2} className="card-img-top mt-3" alt="" />
        </div>
      </div>
      <div className="col-lg-6 mb-3">
        <div className="card p-5 shadow text-center">
          <img src={p3} className="card-img-top mt-3" alt="" />
        </div>
      </div>
      <div className="col-lg-6 mb-3">
        <div className="card p-5 shadow text-center">
          <img src={p4} className="card-img-top mt-3" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
      {/* <section id="portfolio">
        <div className="container">
          <div className="pb-4">
          </div>
          <div class="isotope">
            <div class="row">
              <p className="display-5"><b>Cleaning Systems Units and Encode</b></p>
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={oneImage} alt="one" class="circle-image"/>
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={twoImage} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={threeImage} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Experience;
