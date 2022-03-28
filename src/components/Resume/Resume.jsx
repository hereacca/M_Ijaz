import React from "react";
import "./resume.css";
import { useState } from "react";
import acca from '../../assets/acca.png'
const Resume = () => {
  const [display, setDisplay] = useState("#edu");

  return (
    <section className="resume-sect">
      <div className="links"><a id="edu"></a>
      <a id="skill"></a>
      <a id="work"></a>
      <a id="resume"></a></div>
      
      <h2>Resume</h2>
      <h3>Journey Details</h3>
      <div className="resume-card">
        <div className="resume-nav-side">
          <ul className="resume-ul">
            <li>
              <a
                href="#edu"
                onClick={() => setDisplay("#edu")}
                className={display === "#edu" ? "resume-nav-click" : ""}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#skill"
                onClick={() => setDisplay("#skill")}
                className={display === "#skill" ? "resume-nav-click" : ""}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#work"
                onClick={() => setDisplay("#work")}
                className={display === "#work" ? "resume-nav-click" : ""}
              >
              Experience
              </a>
            </li>
            <li>
              <a
                href="#lang"
                onClick={() => setDisplay("#lang")}
                className={display === "#lang" ? "resume-nav-click" : ""}
              >
                Language
              </a>
            </li>
            <li>
              <a
                href="#achievment"
                onClick={() => setDisplay("#achievement")}
                className={display === "#achievement" ? "resume-nav-click" : ""}
              >
                Achievements
              </a>
            </li>
          </ul>
        </div>
        <div className="resume-right">
          <div className={display === "#edu" ? "show" : "hide"}>
          <li>
              ACCA UK: PAC Peshawar (Association of chartered certified
              accountants) (2019) <img src={acca} alt="acca" className="acca"/>
            </li>
            <li>HDA UK: Higher Diploma in Accounting (PAC Peshawar -2013)</li>
            
            <li>DBA: Diploma in business administration (GCMS, KPK SWAT) (2012)</li>
          </div>

          <div className={display === "#skill" ? "show" : "hide"}>
            <h4> WORK EXP</h4>
            <li>GAAP/IFRS Compliance</li>
            <li> QuickBooks Online</li>
            <li>Oracle ERP</li>
            <li>Budgeting and Forecasting </li>
            <li>Financial Statements Analysis.</li>
            <li> Performance Monitoring, KPIs.</li>
            <li>Presentation Skills</li>
            <li> MS-Office</li>
          </div>
          <div className={display === "#work" ? "show" : "hide"}>
            <h4>Work Places</h4>
            <li>
              CECOS UNIVERSITY OF IT AND EMERGING SCIENCES (PRECISION MEDICINE
              LAB PROJECT) Assistant Manager Finance and Procurement: (Jul-2021
              till Nov-2021)
            </li>
            <li>
              Pakistan International Airlines (PIA) Accounts Officer
              (Articleship):(Nov-2017 till Nov-2020)
            </li>
            <li>
              SWIFT SUPPLIERS (Pvt) Manager Accounts: (Nov-2020 till Jul-2021)
            </li>
          </div>
          <div className={display === "#lang" ? "show" : "hide"}>
            <h4>Languages</h4>
            <li>English (W.R.S)</li>
            <li>Urdu (W.R.S)</li>
            <li>Pashto (W.R.S)</li>
          </div>
          <div className={display === "#achievement" ? "show" : "hide"}>
            <h4>Awards</h4>
            <li>
              Appreciation award from Chief Commercial Officer for highest
              Revenue contribution, for the year end 2019.
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
