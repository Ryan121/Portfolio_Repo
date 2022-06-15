import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaResearchgate} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://uk.linkedin.com/in/ryan-sers-phd-0a23379b" target="_blank" className="icon-size"><BsLinkedin/></a>
        <a href="https://github.com/Ryan121" target="_blank" className="icon-size"><BsGithub/></a>
        <a href="https://www.researchgate.net/profile/Ryan-Sers" target="_blank" className="icon-size"><FaResearchgate/></a>
    </div>
  )
}

export default HeaderSocials