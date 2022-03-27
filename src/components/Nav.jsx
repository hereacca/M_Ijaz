import React from 'react'
import './nav.css'
import { BiHomeCircle } from 'react-icons/bi';
import {MdOutlineContactMail} from 'react-icons/md';
import {BsInfo} from 'react-icons/bs'
import {CgFileDocument} from 'react-icons/cg'
import { useState } from 'react'

const Nav = () => {

const [navActive , setActive] = useState('#')



  return (
    <>
    <div className='nav'>
    <div className='nav-items'>
         
         <a href= "#" onClick={()=> setActive('#')} className = {navActive === '#'? 'active' : ''}><BiHomeCircle/></a>
         <a href="#about" onClick={()=> setActive('#about') } className={navActive === '#about' ? 'active' : ''}> <BsInfo/></a>
         <a href="#resume" onClick={()=>setActive('#resume')} className={navActive === '#resume' ? 'active' : ''}> <CgFileDocument/></a>
         <a href="#contact" onClick={()=>setActive('#contact') } className={navActive === '#contact' ? 'active' : ''}><MdOutlineContactMail/></a>
    </div>

    </div>
    </>
  )
}

export default Nav