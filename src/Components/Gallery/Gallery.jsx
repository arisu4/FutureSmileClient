import {Helmet} from "react-helmet";
import React, { useState,useEffect } from 'react';
import axios from 'axios'
import moment from 'moment'
import Header  from '../Includes/Header'
import Offcanvas from '../Includes/Offcanvas'
import Footer from  '../Includes/Footer'



function Gallery() {
  const [gallery,setGallery] = useState([])

  const baseURL = 'http://localhost:1803'

  const fetchgallery = () =>{
    axios.get(`${baseURL}/showgallery`)
     .then(response => {
      console.log(`gallery fetched`, response.data)
      //const Values = response.data
      setGallery(response.data)
    })
    .catch(error => {
      console.log(`error`, error)
    }) 
  }

  useEffect(()=>{
    fetchgallery()
  },[])
 
  let num  = 1
  return (
<>
<div>
  <div className="cursor1" />
  <div className="cursor2" />
  {/* Preloader */}
  {/* <div className="preloader">
    <div className="loading">
      <div className="bar bar1" />
      <div className="bar bar2" />
      <div className="bar bar3" />
      <div className="bar bar4" />
      <div className="bar bar5" />
      <div className="bar bar6" />
      <div className="bar bar7" />
      <div className="bar bar8" />
    </div>
  </div> */}

  {/* Scroll Smoother */}
  <div className="has-smooth" id="has_smooth" />

  {/* Go Top Button */}
  <button id="scroll_top" className="scroll-top"><i className="fa-solid fa-arrow-up" /></button>

  {/* Header area  */}
  <Header/>
  
  {/* Offcanvas area  */}
  <Offcanvas/>

  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        {/* Portfolio area start */}
        <section className="portfolio__area-6">
          <div className="container line pt-100 pb-140">
            <span className="line-3" />
            <div className="zi-9">
              <div className="row">
                <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
                  <div className="sec-title-wrapper portfolio__title-wrap-6">
                    <div>
                      <h2 className="sec-sub-title animation__char_come">Featured</h2>
                      <h3 className="sec-title animation__char_come_long">Work</h3>
                      <p>View the full case study of our recent featured and awesome works that we created for our
                        clients.
                      </p>
                    </div>

                    <div className="portfolio__pagination-6">
                      <span className="portfolio__current">01</span> / 0<span className="portfolio__total" />
                    </div>
                  </div>
                </div>
                <div className="col-xxl-8 col-xl-7 col-lg-7 col-md-6">
                
                  <div className="portfolio__wrapper-6">
                  
                    <div className="portfolio__list-6">

                    {gallery.map(values=>(
                       
                      <div className="portfolio__item-6" data-portfitem={num++} key={values.id}>
                      
                  
                        <a href="/1">
   
                          <img src={process.env.REACT_APP_PUBLIC_GALLERY+values.image} alt="Portfolio " data-speed="0.4" />
                          <div className="portfolio__content-6">
                            <h4 className="portfolio__title-6">{values.title}</h4>
                            <h5 className="portfolio__date">{moment(values.createdAt).format('Do MMMM  YYYY')}</h5>
                          </div>
                          
                        </a>
                        
                      </div>
                    
                    ))} 
                    </div>
                
              
                  </div>
             
                </div>
                
              </div>
              
            </div>
          </div>
        </section>
        
        
        {/* CTA area  */}
        <section className="cta__area">
          <div className="container line pb-110">
            <div className="line-3" />
            <div className="row">
              <div className="col-xxl-12">
                <div className="cta__content">
                  <p className="cta__sub-title">Work with us</p>
                  <h2 className="cta__title title-anim">We would love to hear more about your project</h2>
                  <div className="btn_wrapper">
                    <a href="contact.html" className="wc-btn-primary btn-hover btn-item"><span />Let’s talk us <i className="fa-solid fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
     
      </main>
      {/* Footer area  */}
     <Footer/>

    </div>
  </div>
</div>
<Helmet>

<script src="assets/js/jquery-3.6.0.min.js"async="false"/>
  <script src="assets/js/bootstrap.bundle.min.js"async="false"/>
  <script src="assets/js/swiper-bundle.min.js"async="false"/>
  <script src="assets/js/counter.js"async="false"/>
  <script src="assets/js/gsap.min.js"async="false"/>
  <script src="assets/js/ScrollTrigger.min.js"async="false"/>
  <script src="assets/js/ScrollToPlugin.min.js"async="false"/>
  <script src="assets/js/ScrollSmoother.min.js"async="false"/>
  <script src="assets/js/SplitText.min.js"async="false"/>
  <script src="assets/js/chroma.min.js"async="false"/>
  <script src="assets/js/mixitup.min.js"async="false"/>
  <script src="assets/js/vanilla-tilt.js"async="false"/>
  <script src="assets/js/jquery.meanmenu.min.js"async="false"/>
  <script src="assets/js/main.js"async="false"/>
</Helmet>
    </>
  )
}

export default Gallery
