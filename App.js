import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="body-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-color">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://cloudexpertsguru.com/">SRR Cloudexperts Guru Ind Pvt Ltd</a> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '80px' }}>
            <div class="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Employment
  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="http://127.0.0.1:5500/src/Employment/Employee.html">Employee</a></li>
                  <li><a className="dropdown-item" href="http://127.0.0.1:5500/src/Employment/Department.html">Department</a></li>
                  <li><a className="dropdown-item" href="Jobtitle.js">Job Title</a></li>
                  <li><a className="dropdown-item" href="Employeeskills.js">Employee Skills</a></li>
                  <li><a className="dropdown-item" href="Employeeeducation.js">Employee Education</a></li>
                  <li><a className="dropdown-item" href="Employeecertifications.js">Employee Certifications</a></li>
                  <li><a className="dropdown-item" href="Employeeemergencycontacts.js">Employee Emergency Contacts</a></li>
           </ul>
          </div>

          <div class="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Compliance 
            </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="Regulation.js">Regulation</a></li>
                  <li><a className="dropdown-item" href="Policy.js">Policy</a></li>
                  <li><a className="dropdown-item" href="Control.js">Control</a></li>
                  <li><a className="dropdown-item" href="Issue.js">Issue</a></li>
                  <li><a className="dropdown-item" href="Auditlog.js">Audit Log</a></li>
           </ul>
          </div>



              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="#">sceg</a></li>
                  <li><a className="dropdown-item" href="#">sceg</a></li>
                  <li><a className="dropdown-item" href="#">sceg</a></li>
                  <li><a className="dropdown-item" href="#">sceg</a></li>
                  <li><a className="dropdown-item" href="#">sceg</a></li>
                  <li><a className="dropdown-item" href="#">sceg</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Link
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="#">sceg</a></li>
                  <li><a className="dropdown-item" href="#">sceg</a></li>
                  <li><a className="dropdown-item" href="#">sceg</a></li>
                  <li><a className="dropdown-item" href="#">sceg</a></li>
                  <li><a className="dropdown-item" href="#">sceg</a></li>
                  <li><a className="dropdown-item" href="#">sceg</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./logo192.svg" className="d-block" alt="logo" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../logos/logo1.png" className="d-block" alt="logo" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../src/logos/logo1.svg" className="d-block" alt="logo" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default App;
