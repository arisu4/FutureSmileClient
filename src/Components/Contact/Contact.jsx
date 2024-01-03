//import React from 'react'
import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import toastr from "toastr";
import {Helmet} from "react-helmet";
import Header  from  '../Includes/Header'
import Offcanvas from '../Includes/Offcanvas'
import Footer from  '../Includes/Footer'

function Contact() {

  const [input, setInput] = useState({});
  const [contacts,setContacts] = useState([])

  //const [backenedError,setBackenedError] = useState([])
  const baseURL = 'http://localhost:1803'

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("input", input)
   

    await axios.post(`${baseURL}/addcontact`, input)
      .then((response) => {
        
        console.log(response)
        // if(response.data.errors){
        //   setBackenedError(response.data.errors)
        // }
        if (response.data.status === 1) {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          });
        } else {
          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            
          })
        }



        //alert(res.status)
      }).catch((error) => {
        if (!error?.response) {
         toast.error(`No server response.`,{ position: toast.POSITION.TOP_RIGHT,  autoClose: 2000,theme:"dark"})
      } else if (error.response?.status === 404) {
          toast.error("404 - Not found.",{ position: toast.POSITION.TOP_RIGHT,  autoClose: 2000,theme:"dark"});
      }else if(error.response?.status === 500) {
        toast.error("500 - Internal server error.",{ position: toast.POSITION.TOP_RIGHT,  autoClose: 2000,theme:"dark"})
      }else if (error?.code) {
          toast.error("Code: " + error.code,{ position: toast.POSITION.TOP_RIGHT,  autoClose: 2000,theme:"dark"});
          // if(error exist)
          // {
          //   if(name error exist)
          //   {
          //     $('#nameErr').text(var)
          //   }

          //   if(email error exist)
          //   {
          //     $('#emailErr').text(var)
          //   }
          //   if(mobile_number error exist)
          //   {
          //     $('#mobile_numberErr').text(var)
          //   }
          // }
      } else {
          toast.error("Something went wrong.",{ position: toast.POSITION.TOP_RIGHT,  autoClose: 2000,theme:"dark"});
      }
      }) 


  }

  const textHandle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  //const refresh = () => window.location.reload(true)
  // {
  //   backenedError&&backenedError.map(e =>(<p className='text-danger'></p>))
  // }

  const fetchcontact = ()=>{
    axios.get(`${baseURL}/showcontact`)
    .then(response => {
     console.log(`contact fetched`, response.data)
     //const Values = response.data
     setContacts(response.data)
   })
   .catch(error => {
     console.log(`error`, error)
   }) 
  }

  useEffect(()=>{
    fetchcontact()
  },[])

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
            <section className="hero__area-7">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="hero__title-wrap-7">
                      <h1 className="hero__title-7  title-anim">Let’s get in touch<img src="assets/imgs/home-7/shape-1.png" alt="shape" />
                        With Best financial
                        Advisor <img src="assets/imgs/home-7/shape-2.png" alt="" /></h1>
                    </div>
                    <div className="hero__text-7">
                      <h2 className="about">Connect</h2>
                      <p>Great! We're excited to hear from you and let's start something special togerter. call us for any inquery.</p>
                    </div>
                  </div>
                </div>
              </div>
              <img src="assets/imgs/home-7/shape-3.png" alt="Shape" className="shape-1" />
            </section>
            {/* Hero area end */}
            {/* Contact area start */}
            <section className="contact__area-6">
              <div className="container g-0 line pt-120 pb-110">
                <span className="line-3" />
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="sec-title-wrapper">
                      <h2 className="sec-title-2 animation__char_come">Contact Us</h2>
                    </div>
                  </div>
                </div>
                <div className="row contact__btm">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="contact__info">
                   
                      <ul>
                      
                        <li><a href="tel:+(2)578365379">{contacts.mobile}</a></li>
                        <li><a href={contacts.email}>{contacts.email}</a></li>
                        <li><span>{contacts.address}</span></li>
            
                      </ul>
                
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="contact__form">
                      <form action="https://wealcoder.com/dev/html/axtra/assets/mail.php" onSubmit={handleSubmit} method="POST">
                        <div className="row g-3">
                       
                          <div className="col-xxl-6 col-xl-6 col-12">
                            <input type="text" name="name" placeholder="Name *" onChange={textHandle} />
                            
                            <span id="nameErr"></span>
                          </div>
                          <div className="col-xxl-6 col-xl-6 col-12">
                            <input type="email" name="email" placeholder="Email *" onChange={textHandle} />
                            <span id="email_err"></span>
                          </div>
                        </div>
                        <div className="row g-3">
                          <div className="col-xxl-6 col-xl-6 col-12">
                            <input type="tel" name="mobile_number" placeholder="Phone" onChange={textHandle} />
                          </div>
                          <div className="col-xxl-6 col-xl-6 col-12">
                            <input type="text" name="subject" placeholder="Subject *" onChange={textHandle} />
                          </div>
                        </div>
                        <div className="row g-3">
                          <div className="col-12">
                            <textarea name="message" placeholder="Messages *" defaultValue={""} onChange={textHandle} />
                          </div>
                         
                        </div>
                        <div className="row g-3">
                          <div className="col-12">
                            <div className="btn_wrapper">
                              <button className="wc-btn-black btn-hover btn-item" ><span /> Send <br />Messages <i className="fa-solid fa-arrow-right" /></button>

                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Contact area end */}
          </main>
          {/* Footer area start */}
          <Footer/>
          {/* Footer area end */}

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

export default Contact
