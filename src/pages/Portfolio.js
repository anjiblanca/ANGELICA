import "./Portfolio.css";
import Navbar from "./Navbar";

import gm1 from "../img/gm1.jpg";
import gm2 from "../img/gm2.jpg";
import dg1 from "../img/dg1.jpg";
import dg2 from "../img/dg2.jpg";
const Portfolio = () => {
  return (
    <>
      <Navbar />
   
        <div className="overlay">
            <div id="portfolio-info">
              
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5 text-black">
                      Last Portfolio Projects
                    </h1>
            </div>
          </div>
        </div>
      </div>
              <div className=" p-5">
            </div>

            <section id="first">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="card p-5 shadow text-center">
          <img src={gm1} className="card-img-top mt-3" alt="" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card p-5 shadow text-center">
          <img src={gm2} className="card-img-top mt-3" alt="" />
        </div>
      </div>
      <div className="col-lg-6 mb-3">
        <div className="card p-5 shadow text-center">
          <img src={dg1} className="card-img-top mt-3" alt="" />
        </div>
      </div>
      <div className="col-lg-6 mb-3">
        <div className="card p-5 shadow text-center">
          <img src={dg2} className="card-img-top mt-3" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
      {/* <section id="portfolio">
        <div className="container">
          <div className="pb-2">
          </div>
          <div class="isotope">
            <div class="row">
            
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={portfolio1} alt="one" class="circle-image"/>
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={portfolio2} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={portfolio3} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>
             
              
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={portfolio4} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={portfolio5} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={portfolio6} alt="" />
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

export default Portfolio;
