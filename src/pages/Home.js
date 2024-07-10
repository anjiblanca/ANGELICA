import "./Home.css";
import AN from "../img/AN.jpeg";
import dg1 from "../img/dg1.jpg";
import dg2 from "../img/dg2.jpg";
import gm1 from "../img/gm1.jpg";
import gm2 from "../img/gm2.jpg";
import AN2 from "../img/AN 2.jpeg";


import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />    

      <div className="wrapper">
        <div className="overlay">
          <div class="container1">
            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card-info padd-15 text-center">
                      <h1 className="text display-7 text-light">Hi am Angelica U.Blancas</h1>
                      <p className="self text-light">
                       A Digital Artist  and Game Developer 
                      </p>
                      <p className="self text-light">
                      I'm a college student at Central Philippines State University studying Information Technology..</p>
                      <a href="" className="btn btn-brand shadow text">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-90deg-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"></path></svg>
                       <b>About Me</b> 
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card">
                 
                      <img
                        src={AN }
                        alt="Profile Picture of Guillermo E. Handumon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="first">
  <div className="container">
    <h3 className="display-2">
      <br></br>
      <b className="text-black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Projects </b>
    </h3>
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
<footer className="footer text-white" id="footer">
      <div className="container">
        <div className="row align-items-center">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6 text-lg-start text-center">
            <h5 className="text-black fw-bold">  <img src={AN2} alt="" />&nbsp;&nbsp;About</h5>
            <p className="text-black">Angelica Blanca U.<br/>BSIT-4-C</p>
          </div>
          {/* Column 2 */}
          <div className="col-md-3 col-sm-6 text-lg-start ps-lg-5 ps-0 text-center">
            <h5 className=" text-black fw-bold">Address</h5>
           <p className=" text-black"> Barangay Oringao Kabankalan<br/>City Negros Occidental</p>
          </div>
          {/* Column 3 */}
          <div className="col-md-3 col-sm-6 text-black-start text-center">
            <h5  className=" text-black fw-bold ">Contact</h5>
            <p className="m text-black">Email:AngelicaBlanca@gmail.com<br/>Phone: 09093441778</p>
          </div>
          {/* Column 4 */}
          <div className="col-md-3 col-sm-6 text-lg-start text-center">
            <h5 className="mt-2 text-black fw-bold">Newsletter</h5>
          
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  style={{ borderRadius: '1px' }}
                  placeholder="Email"
                  aria-label="email"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-light"
                  type="submit"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>

          </div>
        </div>
      </div>
    </footer>

    </>
  );
};

export default Home;
