import React from 'react'
import './navbar.css'
import {FaHome} from 'react-icons/fa'
import {BsFillInfoSquareFill} from 'react-icons/bs'
import {FaHistory} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'
import {GiArchiveResearch} from 'react-icons/gi'
import {MdEmail} from 'react-icons/md'
import {useState} from 'react'

const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillInfoSquareFill/></a>
      <a href="#history" onClick={() => setActiveNav('#history')} className={activeNav === '#history' ? 'active' : ''}><FaHistory/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiFillProject/></a>
      <a href="#research" onClick={() => setActiveNav('#research')} className={activeNav === '#research' ? 'active' : ''}><GiArchiveResearch/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdEmail/></a>
    </nav>
  )
}

export default Navbar