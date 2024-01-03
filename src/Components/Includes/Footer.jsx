//import React from 'react'
import React, { useState,useEffect  } from 'react';
import axios from 'axios'

function Footer() {
  const [result,setResult]= useState([])

  const baseURL = 'http://localhost:1803'
  
  const fetchlink= ()=>{
    
      axios.get(`${baseURL}/showlink`)
      .then(response => {
       console.log(`social media link  fetched`, response.data)
       //const Values = response.data
       setResult(response.data)
     })
     .catch(error => {
       console.log(`error`, error)
     })
   }
  
   useEffect(() => {
      fetchlink()
      }, [])

  return (
    <>
       <footer className="footer__area-3">
        <div className="footer__top-3">
          <div className="footer__top-wrapper-3">
            <div className="footer__logo-3 pt-120">
              <img src="assets/imgs/logo/logo-black.png" alt="Footer Logo" width={85} />
              <p>When do they work well, and when do they on us and finally, when do we actually need how can we avoid
                them.</p>
            </div>
            <div className="footer__social-3">
            
              <ul>
                <li><a href={result.facebook_link} target='_blank'rel="noopener noreferrer">facebook</a></li>
                <li><a href={result.twitter_link} target='_blank'rel="noopener noreferrer" >Twitter</a></li>
                <li><a href={result.linkedin_link} target='_blank'rel="noopener noreferrer">Linkedin</a></li>
                <li><a href={result.instagram_link} target='_blank'rel="noopener noreferrer">Instagram</a></li>
              </ul>
            
            </div>
            <div className="footer__contact-3">
              <a  className="end" href="/contact">Let’s talk</a>
            </div>
          </div>
        </div>
        <div className="footer__btm-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="footer__copyright-3">
                  <p>© 2023 | Alrights reserved
                  </p>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="footer__nav-2">
                  <ul className="footer-menu-2 menu-anim">
                    <li><a href="/about">about us</a></li>
                    <li><a href="/contact">contact</a></li>
                    <li><a href="/gallery">gallery</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> 
    </>
  )
}

export default Footer
