import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/image.png'
import HeaderSocials from './HeaderSocials'
import HeaderSocials_2 from './HeaderSocials_2'
import {CgScrollV} from 'react-icons/cg'

const header = () => {
  return (
    <header>
        <div className="container header__container">

            <h4>Hello, my name is </h4>
            <h1>Ryan Sers</h1>
            <h4 className="text-light">Data Scientist & Python Developer</h4>
            
            <CTA />
            <HeaderSocials/>
            <HeaderSocials_2/>
          


            <div className="me">
              <img src={ME} alt="Profile Image" className="image__container"/>
            </div>

            <a href="#contact" className='scroll__down'><CgScrollV/></a>

        </div>
    </header>
  )
}

export default header