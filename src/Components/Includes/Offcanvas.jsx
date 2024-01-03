import React from 'react'

function Offcanvas() {
  return (
    <>
       <div className="offcanvas__area">
    <div className="offcanvas__body">
      <div className="offcanvas__left">
        <div className="offcanvas__logo">
          <a href="index.html"><img src="assets/imgs/logo/logo-black.png" alt="Offcanvas Logo" width={85} /></a>
        </div>
        <div className="offcanvas__social">
          <h3 className="social-title">Follow Us</h3>
          <ul>
            <li><a href="/instagram">Instagram</a></li>
            <li><a href="/facebook">Facebook</a></li>
            <li><a href="/twitter">Twitter</a></li>
            <li><a href="/youtube">YouTube</a></li>
          </ul>
        </div>
        <div className="offcanvas__links">
          <ul>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="term.html">Terms &amp; Conditions</a></li>
            <li><a href="policy.html">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="offcanvas__mid">
        <div className="offcanvas__menu-wrapper">
          <nav className="offcanvas__menu">
            <ul className="menu-anim">
              <li><a href="/">home</a> </li>     
              <li><a href="/about">ABOUT</a></li>
              <li><a href="/services">services</a></li>
              <li><a href="/gallery">gallery</a></li>
              <li><a href="/blog">blog</a></li>
              <li><a href="/contact">contact</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="offcanvas__right">
        <div className="offcanvas__contact offcanvas__search">
          <h3>Get in touch</h3>
          <ul>
            <li><a href="tel:918240998270">+91 8240998270</a></li>
            <li><a href="mailto:futuresmileimf@gmail.com">futuresmileimf@gmail.com</a></li>
            <li>  333/A/1 JESSORE ROAD GROUND FLOOR SAGORIKA APARTMENT, near UCO BANK AND RAIPUR ELECTRONICS, Kalindi Housing Estate, Kolkata, West Bengal</li>
          </ul>
        </div>
        <img src="assets/imgs/shape/11.png" alt="shape" className="shape-1" />
        <img src="assets/imgs/shape/12.png" alt="shape" className="shape-2" />
      </div>
      <div className="offcanvas__close">
        <button type="button" id="close_offcanvas"><i className="fa-solid fa-xmark" /></button>
      </div>
    </div>
  </div>
    </>
  )
}

export default Offcanvas
