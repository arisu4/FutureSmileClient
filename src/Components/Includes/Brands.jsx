import React, { useState,useEffect  } from 'react';
import axios from 'axios'


function Brands() {
    const [brand,setBrands]=useState([])
  
 
  const baseURL = 'http://localhost:1803'

  const fetchbrands= ()=>{
  
    axios.get(`${baseURL}/showbrand`)
    .then(response => {
     console.log(`brands fetched`, response.data)
     //const Values = response.data
     setBrands(response.data)
   })
   .catch(error => {
     console.log(`error`, error)
   })
  }

  useEffect(() => {
    fetchbrands()
    }, []) 

  return (
    <>
       <section className="brand__area">
          <div className="container g-0 line pt-140 pb-140">
            <span className="line-3" />
            <div className="row g-0">
              <div className="col-xxl-12">
                <div className="sec-title-wrapper">
                  <h2 className="sec-sub-title title-anim">Internation Brands</h2>
                  <h3 className="sec-title title-anim">We are happy to work with global <br />
                    largest brands</h3>
                </div>
              </div>
          
              <div className="brand__list">
              {brand.map((values)=>(
                <div className="brand__item fade_bottom" key={values.id}> 
                  <img src={process.env.REACT_APP_PUBLIC_BRAND+values.image} alt="Brand Logo" />
                </div>
                 
                ))}
              </div>
              
            </div>
          </div>
        </section>
    </>
  )
}

export default Brands
