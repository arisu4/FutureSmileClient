import React, { useState,useEffect  } from 'react';
import axios from 'axios'
function Testimonial() {
const [testimonial,setTestimonials]= useState([])

const baseURL = 'http://localhost:1803'

const fetchtestimonial= ()=>{
  
    axios.get(`${baseURL}/showtestimonial`)
    .then(response => {
     console.log(`testimonial fetched`, response.data)
     //const Values = response.data
     setTestimonials(response.data)
   })
   .catch(error => {
     console.log(`error`, error)
   })
 }

 useEffect(() => {
    
    fetchtestimonial()
    
    }, [])
  return (
    <>
     <section className="testimonial__area-3">
  <div className="container">
    <div className="row">
      <div className="col-xxl-12">
        <div className="swiper testimonial__slider-3">
          <div className="swiper-wrapper">
            {testimonial.map((values)=>(
            <div className="swiper-slide testimonial__slide-3" key={values.id}>
              <p>{values.message}</p>
              <h2 className="client__name-3">{values.name}</h2>
              <h3 className="client__role-3">{values.designation}</h3>
            </div>
                       ))}
          
          </div>
          <div className="next-button swipper-btn"><i className="fa-solid fa-arrow-left" /></div>
          <div className="prev-button swipper-btn"><i className="fa-solid fa-arrow-right" /></div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="testimonial__images-3 animation_image_zoom">
    <img src="assets/imgs/testimonial/3/1.jpg" alt="testimonial " className="testimonial3__img" />
    <img src="assets/imgs/testimonial/3/2.jpg" alt="testimonial " className="testimonial3__img-2" />
    <img src="assets/imgs/testimonial/3/3.jpg" alt="testimonial " className="testimonial3__img-3" />
    <img src="assets/imgs/testimonial/3/4.jpg" alt="testimonial " className="testimonial3__img-4" />
    <img src="assets/imgs/testimonial/3/5.jpg" alt="testimonial " className="testimonial3__img-5" />
    <img src="assets/imgs/testimonial/3/6.jpg" alt="testimonial " className="testimonial3__img-6" />
  </div>
</section> 
    </>
  )
}

export default Testimonial
