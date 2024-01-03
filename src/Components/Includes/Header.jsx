import React from 'react'

function Header() {
  return (
    <>
    <header className="header__area-3">
    <div className="header__inner-3">
      <div className="header__logo-2">
        <a href="index.html" className="logo-dark"><img src="assets/imgs/logo/logo-black.png" alt="Site Logo" width={85} /></a>
        <a href="index.html" className="logo-light"><img src="assets/imgs/logo/logo-black.png" alt="Site Logo" width={85} /></a>
      </div>
      <div className="header__nav-2">
        <ul className="main-menu-3 menu-anim">
          <li><a href="/">HOME</a> </li>     
          <li><a href="/about" >ABOUT</a></li>
          <li><a href="/services">SERVICES</a></li>
          <li><a href="/gallery">GALLERY</a></li>
          <li><a href="/blog">BLOG</a></li>
          <li><a href="/contact">CONTACT</a></li>
          <li><a href="/login">LOGIN</a></li>
          <li><a href="/register">REGISTER</a></li>
        </ul>
      </div>
      <div className="header__nav-icon-3">
        <button className="search-icon" id="search_close"><i className="fa-solid fa-xmark" /></button>
        <button id="open_offcanvas"><img src="assets/imgs/icon/menu-black.png" alt="Menubar Icon" /></button>
      </div>
    </div>
  </header> 
    </>
  )
}

export default Header
