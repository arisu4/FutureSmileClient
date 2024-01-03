import React, { useState,useEffect  } from 'react';
import axios from 'axios'
import {Helmet} from 'react-helmet'
//import $ from 'jquery'
//import {NavLink} from 'react-router-dom'
import Header from  '../Includes/Header'
import Offcanvas from '../Includes/Offcanvas'
import Brands from  '../Includes/Brands'
import Footer from '../Includes/Footer' 
//import $ from 'jquery'





function Services() {
  const [services,setServices]=useState([])

  const baseURL = 'http://localhost:1803'


  const fetchservices =()=>{
    axios.get(`${baseURL}/showservice`)
    .then(response => {
     console.log(`services fetched`, response.data)
     //const Values = response.data
     setServices(response.data)
   })
   .catch(error => {
     console.log(`error`, error)
   })
  } 


 

  useEffect(() => {
   fetchservices()
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
let num = 1
let num1 = 1
let num2 = 1

  
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
        {/* Hero area start */}
        <section className="solution__area">
          <div className="container hero-line" />
          <div className="solution__wrapper">
            <div className="solution__left">
              <div className="solution__img-1">
                <img src="assets/imgs/thumb/solution.png" alt="Solution " />
              </div>
              <div className="solution__img-2">
                <img src="assets/imgs/thumb/solution-2.png" alt="Solution " />
              </div>
            </div>
            <div className="solution__mid">
              <h1 className="solution__title animation__char_come">Future Smile</h1>
              <p>Banking, leverage or debt, credit, capital markets, money, investments, and the formation and oversight of financial institutions are all part of finance.</p>
            </div>
            <div className="solution__right">
              <div className="solution__img-3">
                <img src="assets/imgs/thumb/solution-3.png" alt="Solution " />
              </div>
            </div>
          </div>
          <div className="container pb-130">
            <div className="row">
              <div className="col-xxl-12">
                <div className="solution__btm">
                  <ul>
                    <li>Approch</li>
                    <li>Financed</li>
                    <li>Experienced</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="solution__shape">
            <img src="assets/imgs/icon/1.png" alt="Shape" className="shape-1" />
            <img src="assets/imgs/icon/2.png" alt="Shape" className="shape-2" />
            <img src="assets/imgs/icon/3.png" alt="Shape" className="shape-3" />
            <img src="assets/imgs/icon/4.png" alt="Shape" className="shape-4" />
            <img src="assets/imgs/icon/5.png" alt="Shape" className="shape-5" />
          </div>
        </section>
        
        {/* Service area */}
        <section className="service__area-6">
          <div className="container">
        
       
            <div className="row inherit-row">
             
              <div className="col-xxl-12">

            
                <div className="content-wrapper">
              
                  <div className="left-content">
                
                 
                    <ul className="service__list-6">
                    {services.map(values=>( 
                      <li className="active"><a href={"#service_"+(num2++)}key={values.id} >{values.title}</a></li>
                      ))}   
                    </ul>
                   
                  </div>
    

                  <div className="mid-content">
                  {services.map(values=>(  
                    <div className="service__image" key={values.id}>
                      <img src={process.env.REACT_APP_PUBLIC_SERVICE + values.image} alt="Service " />
                    </div>
                   ))}    
                  </div>

                  <div className="right-content">
                    <div className="service__items-6">
                      
                    {services.map((values)=>( 
                     
                      <div className="service__item-6 has__service_animation" id={"service_"+(num++)} key={values.id} data-secid={num1++}>
                        <div className="image-tab">

                          <img src={process.env.REACT_APP_PUBLIC_SERVICE + values.image} alt="Service" />
                        </div>
                        <div className="animation__service_page">
                          <h2 className="service__title-6">{values.title}</h2>
                          <p dangerouslySetInnerHTML={{__html:values.description}}></p>
                          <div className="btn_wrapper">
                            <a href="service-details.html" className="wc-btn-secondary btn-item btn-hover"><span/>Get
                              free
                              <br/>qoutes <i className="fa-solid fa-arrow-right"/></a>
                          </div>
                        </div>
                      </div>
                    
                       ))}  
                    </div>
                    
                  </div>
                 
                </div>
            
              </div>
           
            </div>
           
          </div>
        </section>
        
        {/* Brand area  */}
        <Brands/>

      </main>
      {/* Footer area start */}
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

{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> */}

{/* <script src="assets/js/jquery-3.6.0.min.js"async="false"></script>
<script src="assets/js/bootstrap.bundle.min.js"async="false"></script>
<script src="assets/js/swiper-bundle.min.js"async="false"></script>
<script src="assets/js/counter.js"async="false"></script>
<script src="assets/js/gsap.min.js"async="false"></script>
<script src="assets/js/ScrollTrigger.min.js"async="false"></script>
<script src="assets/js/ScrollToPlugin.min.js"async="false"></script>
<script src="assets/js/ScrollSmoother.min.js"async="false"></script>
<script src="assets/js/SplitText.min.js"async="false"></script>
<script src="assets/js/chroma.min.js"async="false"></script>
<script src="assets/js/mixitup.min.js"async="false"></script>
<script src="assets/js/vanilla-tilt.js"async="false"></script>

<script src="assets/js/main.js"async="false"></script> */}

{/* <script>
$(document).on('scroll', function () {
   $('.service__item-6').each(function () {
     if ($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
       var sec_id = $(this).data('secid');

       $('.service__list-6 li:nth-child(' + sec_id + ')').addClass('active').siblings().removeClass('active');
     }
   })
 });
</script> */}
   </Helmet>
    </>
  )
}

export default Services
