import React from 'react'
import header from "./assets/header.png"
import Image from 'next/image'
import "./Header.css"

function Header() {
  return (
    <div className='header-container'>
        <Image src={header} alt="header" className='header-image'/>
        </div>
  )
}

export default Header