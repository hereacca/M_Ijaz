import React from "react";
import "./contact.css";
import Socials from "../Socials";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
const form = useRef();

const sendEmail =(e)=>{
e.preventDefault();
emailjs.sendForm('service_vk179vp','template_uubdkbu',form.current,'UFVozxgsL06Zk8zJ_')
}

  return (
    <section className="contact">
      <a id="contact"></a>
      <h2>Contact Me</h2>
      <h3>Let's Keep in touch</h3>
      <div className="contact-card">
        <div className="contact-left">
          <h2>Get In Touch</h2>
          <p>Send Your Email Here</p>
          <Socials/>
          {/* <img src="" alt="" /> */}
        </div>

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <label>
            Your Name : 
              <input type="text" name="name" placeholder="Name"/>
            </label>
            <label>
              Your Email : 
              <input type="email" name="email" placeholder="Email"/>
            </label>
            <textarea name="message" id="message" cols="36" rows="5" placeholder="Enter Your Message Here"></textarea>



            <input className="submit" type="submit" value="Submit" onClick={()=>{
              alert("Form Submitted Successfully !")
            }}/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
