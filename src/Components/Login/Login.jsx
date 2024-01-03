//import React from 'react'
import React, { useState } from 'react';
import {Helmet} from 'react-helmet'
import  Header from '../Includes/Header'
import Footer from  '../Includes/Footer'
import Offcanvas from '../Includes/Offcanvas'
//import axios from 'axios'
//import { toast } from "react-toastify";



function Login() {
  // const [input,setInput]=useState({})
  // const [errors,setErrors]=useState({})


  // const handleSubmit = (e) => {
  //   e.preventDefault()
  
 
   
  //   const baseURL = 'http://localhost:1803'
  
  //   axios.post(`${baseURL}/admin/signup`,input)
  //     .then((response) => {
  //       //$("#submitGalleryBtn").attr("disabled", false).text("Submit")
  //       console.log(response)
  
  //       if (response.data.status === 1) {
  //         toast.success(response.data.message, {
  //           position: toast.POSITION.TOP_RIGHT,
  //           autoClose: 2500,
  //           theme: "dark",
  //         });
  //         //$("#submitGalleryForm").trigger("reset")
  //       } else {
  //         toast.error(response.data.message, {
  //           position: toast.POSITION.TOP_RIGHT,
  //           autoClose: 2500,
  //           theme: "dark",
  //         })
  //       }
  //     }).catch((error) => {
  //       //$("#submitGalleryBtn").attr("disabled", false).text("Submit")
  //       if (!error?.response) {
  //         toast.error(`No response from server.`, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
  //       } else if (error.response?.status === 404) {
  //         toast.error("Not found.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
  //       } else if (error.response?.status === 500) {
  //         toast.error("Internal server error.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
  //       } else if (error.response?.status === 420 && error.response.data) {
  //         toast.error("Validation error.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
  //         const responseErrors = error.response.data.errors
  //         if (responseErrors) {
  //           const errorData = {}
  //           for (var errorItem of responseErrors) {
  //             if (errorItem.path === "email" && (errorData.email=== "" || errorData.email === undefined)) {
  //               errorData[errorItem.path] = errorItem.msg
  //             } 
  //             else if (errorItem.path === "password" && (errorData.password === "" || errorData.password === undefined)) {
  //               errorData[errorItem.path] = errorItem.msg
  //             }
  //             else if(errorItem.path === "image" && (errorData.image.mimetype === "image/jpg" || errorData.image.mimetype === "image/jpeg" ||errorData.image.mimetype === "image/png" )){
  //               errorData[errorItem.path] = errorItem.msg
  //               console.log(errorData.image.mimetype)
  //             }
  //             else if((errorData.picteam === "" || errorData.picteam === undefined)){
  //               errorData[errorItem.path] = errorItem.msg
  //             }
             
  //             setErrors(errorData)
  //           }
  //         }
  //       } else if (error?.code) {
  //         toast.error("Code: " + error.code, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
  //       } else {
  //         toast.error("Something went wrong.",{ position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
  //       }
  //     })
  
  
  // }
  
  
  //   const textHandle = (e) => {
  //     setInput({ ...input,[e.target.name]: e.target.value })
  //   } 
  


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
        {/* Blog area start */}
        {/*   <section class="blog__area-6 blog__animation">
    <div class="container g-0 line pt-110 pb-110">
      <span class="line-3"></span>
      <div class="row pb-130">
        <div class="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
          <div class="sec-title-wrapper">
            <h2 class="sec-title-2 animation__char_come">Log In</h2>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
          <div class="blog__text">
            <p>Crafting new bright brands, unique visual systems and digital experience focused on a wide range of
              original collabs. </p>
          </div>
        </div>
      </div>

     
    </div>
  </section> */}
        {/* Blog area end */}
        {/* cart wrapper  */}
        <div className="woocomerce__signin sec-plr-50">
          <div className="woocomerce__signin-wrapper">
            <div className="woocomerce__signin-titlewrap">
              <span className="woocomerce__signin-title">Sign In</span>
            </div>
            <form action="#" >
              <div className="woocomerce__signin-field">
                <label htmlFor="Email">Email</label>
                <input type="email"  id="Email" placeholder="Your email"  />
              </div>
              <div className="woocomerce__signin-field">
                <label htmlFor="Password">Password</label>
                <div className="woocomerce__signin-passwordfield">
                  <input type="password"  id="Password" placeholder="Password" />
                </div>
              </div>
              <div className="woocomerce__signin-checkbox">
                <input type="checkbox" name="remmember" id="remmember" />
                <label htmlFor="remmember">Remember me</label>
              </div>
              <div className="woocomerce__signin-btnwrap">
                <button type="submit" className="woocomerce__checkout-submitbtn">Sign In</button>
              </div>
            </form>
          </div>
        </div>
        {/* /cart wrapper  */}
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

export default Login
