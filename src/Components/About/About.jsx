//import React from 'react'
import React, { useState,useEffect  } from 'react';
import axios from 'axios'
import {Helmet} from "react-helmet";
import Header from '../Includes/Header'
import Offcanvas from '../Includes/Offcanvas'
import Brands from  '../Includes/Brands'
import Testimonial from "../Includes/Testimonial"
import Footer from  '../Includes/Footer'
//import ReactQuill from 'react-quill';



function About() {
  const [result, setResults] = useState([]);
  const [video,setVideo] = useState([])
  const [story,setStory] = useState([])
  
  
  
  const baseURL = 'http://localhost:1803'


  const fetchteam = ()=>{
  
       axios.get(`${baseURL}/showteam`)
     .then(response => {
      console.log(`team fetched`, response.data)
      //const Values = response.data
      setResults(response.data)
    })
    .catch(error => {
      console.log(`error`, error)
    })
  }

  const fetchvideo =()=>{
    axios.get(`${baseURL}/showvideo`)
     .then(response => {
      console.log(`video fetched`, response.data)
      //const Values = response.data
      setVideo(response.data)
    })
    .catch(error => {
      console.log(`error`, error)
    })
  }


  const fetchstory =()=>{
    axios.get(`${baseURL}/showstory`)
     .then(response => {
      console.log(`story fetched`, response.data)
      //const Values = response.data
      setStory(response.data)
    })
    .catch(error => {
      console.log(`error`, error)
    })
  }


  useEffect(() => {
  fetchteam()
  fetchvideo()
  fetchstory()
  }, [])

  // useEffect(() => {
  //   const script = document.createElement('script');
  
  //   script.src = "assets/js/main.js";
  //   script.async = false;
  
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  
  return (
    
    <>

    <div>
     
  {/* Cursor Animation */}
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

        {/* Hero area  */}
        <section className="hero__about">
          <div className="container g-0 line">
            <span className="line-3" />
            <div className="row">
              <div className="col-xxl-12">
                <div className="hero__about-content">
                  <h1 className="hero-title animation__word_come">We’re a full service creative and digital agency, working
                    globally with leargest brands.</h1>
                  <div className="hero__about-info">
                    <div className="hero__about-btn">
                      <div className="btn_wrapper">
                        <a href="service.html" className="wc-btn-black btn-hover btn-item"><span /> Trends &amp; <br />
                          technology
                          <i className="fa-solid fa-arrow-right" /></a>
                      </div>
                    </div>
                    <div className="hero__about-text title-anim">
                      <p>Think of the world's most iconica and successful brands easily findable, impactful.
                        Interactional and exceptional designs. Our story takes beginning in 2013</p>
                    </div>
                    <div className="hero__about-award">
                      <img src="assets/imgs/about/award.png" alt="Best Studio Award" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row hero__about-row">
              <div className="col-xxl-12">
                <div className="hero__about-video">
                  <iframe width="100%" height={800} style={{height: 800}} src={video.links} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen />
                   {/*  <video loop muted autoplay playsinline>
                   <source src="assets/video/video.mp4" type="video/mp4">
                    </video> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Story area area */}
        <section className="story__area">
          <div className="container g-0 line pt-140">
            <span className="line-3" />
            <div className="sec-title-wrapper">
              <div className="from-text">from <span>1990</span></div>
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 className="sec-sub-title title-anim">Digital Studio</h2>
                  <h3 className="sec-title title-anim">Our story</h3>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                 
                  <div className="story__text">
                  <p dangerouslySetInnerHTML={{__html:story.description}}></p>
                
                  </div>
                       
                </div>
              </div>
            </div>
          
            <div className="row">
         
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="story__img-wrapper">
          
                  <img src={process.env.REACT_APP_PUBLIC_STORY + story.image1} alt="Story Thumbnail" className="w-100" />
               </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div className="story__img-wrapper img-anim">
              
                  <img src={process.env.REACT_APP_PUBLIC_STORY + story.image2} alt="Story Thumbnail" data-speed="auto" />
                  
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
            
                <div className="story__img-wrapper">
               
                  <img src={process.env.REACT_APP_PUBLIC_STORY + story.image3} alt="Story Thumbnail" />
                  <img src={process.env.REACT_APP_PUBLIC_STORY + story.image4} alt="Story Thumbnail" />
             
                </div>
              </div>
            </div>
        
          </div>
        </section>

        {/* Counter area  */}
        <section className="counter__area">
          <div className="container g-0 line pb-140 pt-140">
            <span className="line-3" />
            <div className="row">
              <div className="col-xxl-12">
                <div className="counter__wrapper-2 counter_animation">
                  <div className="counter__item-2 counter__anim">
                    <h2 className="counter__number">25k</h2>
                    <p>Project <br />completed</p>
                    <span className="counter__border" />
                  </div>
                  <div className="counter__item-2 counter__anim">
                    <h2 className="counter__number">8k</h2>
                    <p>Happy <br />customers</p>
                    <span className="counter__border" />
                  </div>
                  <div className="counter__item-2 counter__anim">
                    <h2 className="counter__number">15</h2>
                    <p>Years <br />experiences</p>
                    <span className="counter__border" />
                  </div>
                  <div className="counter__item-2 counter__anim">
                    <h2 className="counter__number">98</h2>
                    <p>Awards <br />achievement</p>
                    <span className="counter__border" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
   
        {/* Team area  */}
       <section className="team__area pt-140 pb-140">
       
  <div className="sec-title-wrapper">
    <h2 className="sec-sub-title title-anim">Our Team</h2>
    <h3 className="sec-title title-anim">How we work</h3>
  </div>
  <div className="swiper team__slider">
    <div className="swiper-wrapper">

    {result.map(values=>(
      <div className="swiper-slide team__slide" key={values.id} >
        <a href="team-details.html">
          <img src={process.env.REACT_APP_PUBLIC_TEAM+values.image} alt="Team Member" />
          <div className="team__info">
            <h4 className="team__member-name">{values.name}</h4>
            <h5 className="team__member-role">{values.designation}</h5>
          </div>
        </a>
      </div>
    ))}

    </div>
  </div>
</section>

        {/* Brand area s */}
      <Brands/>
    
        {/* Testimonial area  */}
       <Testimonial/>
    
      </main>
      {/* Footer area */}
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

export default About
