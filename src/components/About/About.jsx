import React from "react";
import "./about.css";
import ij1 from "../../assets/ij1.jpeg";
import ijazResume from '../../assets/IJAZR.pdf'
// import Nav from '../Nav'
const About = () => {
  return (
    <section className="about">
      <a id="about">
        <h2>About Me</h2>
      </a>
      <p>Why Choose Me?</p>
      <div className="about-card">
        <div>
          <img className="about-img" src={ij1} alt="me" />
        </div>
        <div className="rightside-content">
          <p className="summary">
            ACCA with 4+ years Experience providing Management with financial
            information by analyzing Accounts and preparation of Financial
            Statements. Expertise in all areas of full accounting cycle. A/Ps,
            A/Rs, Data extraction and reports analysis.
          </p>
          <h4 className="highlight">Few Highlights:</h4>
          <ul>
            <li > <p className="bullets"></p> GAAP/IFRS Compliance</li>
            <li > <p className="bullets"></p> QuickBooks Online</li>
            <li > <p className="bullets"></p> Oracle ERP</li>
            <li > <p className="bullets"></p> Performance Monitoring, KPIs</li>
          </ul>
          <p className="about-p">Expertise in all areas of full accounting cycle. A/Ps,
            A/Rs, Data extraction and reports analysis.</p>
          <div className="about-btn">
          <a href={ijazResume} download className="get-resume">Get Resume</a>
          <a href="#contact" className="hire-me">Hire Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
