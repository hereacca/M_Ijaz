import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram} from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";
import './socials.css'

const Socials = () => {
  return (
    <>
    <div className="main">
     <a href="https://www.facebook.com/ijaz.khan.520900"  target="_blank" rel="noopener noreferrer"><BsFacebook/></a> 
     <a href="https://www.instagram.com/ijaz.khan591/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a> 
     <a href="https://www.linkedin.com/in/ijaz-khan-bb4798191/"target="_blank" rel="noopener noreferrer"><BsLinkedin /></a> 
     <a href="https://api.whatsapp.com/send?phone=+971 58 810 3470"target="_blank" rel="noopener noreferrer"><BsWhatsapp/></a> 
      </div>
    </>
  );
};

export default Socials;
