import React from "react";
import "./home.css";
import ijaz2 from "../../assets/ijaz2.jpg";
import ijazResume from "../../assets/IJAZR.pdf";
import Socials from "../Socials";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-content">
          <div className="leftside-content">
            <div className="socials">
              <Socials/>
             
            </div>
            <h2>
              Hello i'm
              <span className="name"> Ijaz Khan</span>
            </h2>
            <h1>Chartered Accountant ( ACCA Member )</h1>
            <p className="desc">ACCA with 4+ years of experience</p>
            <div className="btn-p">
              <a href={ijazResume} download className="resume-btn">
                Get Resume
              </a>
              <a href="#contact" className="hire-btn">
                Hire Me
              </a>
            </div>
          </div>
          <div className="img">
            <img
              className="head-img"
              src={ijaz2}
              alt="me"
                       />
          </div>
        </div>
        <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L60,176C120,160,240,128,360,128C480,128,600,160,720,197.3C840,235,960,277,1080,266.7C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  );
};

export default Home;
