import React from 'react'
import {BsMedium} from 'react-icons/bs'
import {FaKaggle} from 'react-icons/fa'
import {FaOrcid} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials_2">
        <a href="https://medium.com/@r.sers14" target="_blank" className="icon-size"><BsMedium/></a>
        <a href="https://www.kaggle.com/ryansers" target="_blank" className="icon-size"><FaKaggle/></a>
        <a href="https://orcid.org/0000-0002-8883-6536" target="_blank" className="icon-size"><FaOrcid/></a>
    </div>
  )
}

export default HeaderSocials