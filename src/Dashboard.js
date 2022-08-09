import "./Dashboard.css";
import home2 from './image/home2.png'
import wav1 from './image/wave1.png'
import logo from './logo/Aayojak-logos/Aayojak-logos_white.png'
function Dashboard() {
  return (
    <>
      {/* <!-- navbar --> */}
      <div className="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand logo" href="/">
            <img src={logo} alt="logo"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-hand-o-down" aria-hidden="true"></i>
          </button>
         <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#top">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  SERVICES
                </a> 
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutus">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                  TESTIMONIALS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#social-media">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* <!-- banner --> */}
      
<div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="promo-title">Aayojak</p>
              {/* <p>
                Components and options for laying out your Bootstrap project,
                including wrapping containers, a powerful grid system, a
                flexible media object, and responsive utility classNamees.
              </p> */}
            </div>
            <div className="col-md-6 text-center">
              <img src={home2} alt="home2" className="img-fluid" />
            </div>
          </div>
        </div>
        <img src={wav1} alt="nfgvjfs" className="bottom-img" />
      </div>
    </>
  );
}
export default Dashboard;
