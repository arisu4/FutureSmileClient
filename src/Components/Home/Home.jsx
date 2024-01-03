import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Header from '../Includes/Header'
import Testimonial from '../Includes/Testimonial'
import Footer from '../Includes/Footer'
import Offcanvas from '../Includes/Offcanvas'
import axios from 'axios'
import Brands from '../Includes/Brands'



function Home() {
  const [services, setServices] = useState([])
  const [queries, setQueries] = useState([])

  const baseURL = 'http://localhost:1803'


  const fetchservices = () => {
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

  const fetchqueries = () => {
    axios.get(`${baseURL}/showquery`)
      .then(response => {
        console.log(`queries fetched `, response.data)
        //const Values = response.data
        setQueries(response.data)
      })
      .catch(error => {
        console.log(`error`, error)
      })
  }
//../../../public/assets/js/main
  // useEffect(() => {
  //   const script = document.createElement('script');
  
  //   script.src = "assets/js/swiper-bundle.min.js";
  //   script.async = false;
  
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);


  useEffect(() => {
    fetchservices()
    fetchqueries()
  }, [])



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
        <Header />


        {/* Offcanvas area  */}
        <Offcanvas />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              {/* Hero area  */}
              <section className="hero__area-3">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="hero__inner-3">
                        <div className="sec-title-wrapper">
                          <h2 className="sec-sub-title">Finances</h2>
                          <h3 className="sec-title title-left">Made</h3>
                          <h3 className="sec-title title-right">Easier</h3>
                        </div>
                        <div className="hero__text-3">
                          <p className="hero__text-animation">Banking, leverage or debt, credit, capital markets, money, investments, and the formation and oversight of financial institutions are all part of finance.</p>
                        </div>
                        <div className="scroll-down">
                          <button><img src="assets/imgs/icon/arrow-down-sm.png" alt="arrow icon" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero3-img-ani">
                  <img src="assets/imgs/hero/3/1.jpg" alt="Hero " className="hero3-img" />
                </div>
              </section>

              {/* Brand area  */}
              <Brands />

              {/* About area  */}
              <section className="about__area-3">
                <div className="container pt-140 pb-110">
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="about__img-3">
                        <img src="assets/imgs/about/3/1.jpg" alt="About Thumbnail" data-speed="auto" />
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="sec-title-wrapper">
                        <h2 className="sec-sub-title title-anim">Who We Are</h2>
                        <h3 className="sec-title title-anim">We are mutual fund and health insurance advisior.</h3>
                      </div>
                      <div className="sec-text-wrapper">
                        <div className="sec-text text-anim">
                          <p>If you want best health insurance claim service can visit us.currently we handle more then 3 cr health portfolio and more than 100 cr investment portfolio.we assured you good advice and best service.</p>
                          <div className="btn_wrapper">
                            <a className="wc-btn-light btn-hover btn-item" href="/about"><span /> Explore Us <i className="fa-solid fa-arrow-right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Service area  */}
              <section className="service__area-3 pb-150">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="sec-title-wrapper pt-130 text-anim">
                        <h2 className="sec-sub-title title-anim">Services</h2>
                        <h3 className="sec-title title-anim">Our financial <br /> Services</h3>
                        <p>Financial services are used by both consumers and corporations to obtain financial goods and accomplish financial objectives.</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xx-12">
                      <div className="service__list-3">
                        {services.map((results) => (
                          <div className="service__item-3 service_animation" key={results.id}>

                            <h3><a href="/servicedetails" className="service__title-3">{results.title}</a></h3>
                            <div className="service__content-3">
                              <p dangerouslySetInnerHTML={{__html:results.description}}></p>
                            </div>

                            <div className="service__btn-3">
                              <div className="btn_wrapper">
                                <a href="/servicedetails" className="wc-btn-black btn-hover btn-item"><span /> Details
                                  <i className="fa-solid fa-arrow-right" /></a>
                              </div>

                            </div>
                            {/* <div class="service__hover-3" style="background-image: url(assets/imgs/service/3/1.jpg);"></div> */}

                          </div>
                        ))}

                        <div className="service3__img-wrap">
                          <div className="service3__img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Portfolio area  */}
              <section className="portfolio__area-3">
                <div className="container pt-100 pb-150">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="sec-title-wrapper">
                        <h2 className="sec-sub-title title-anim">Featured <br />Work</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="swiper portfolio__slider-3">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="portfolio__slide-3">
                              <a href="/servicedetails">
                                <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                <img src="assets/imgs/portfolio/3/2.jpg" alt="Portfolio " />
                              </a>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="portfolio__slide-3">
                              <a href="service-details.html">
                                <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                <img src="assets/imgs/portfolio/3/1.jpg" alt="Portfolio " />
                              </a>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="portfolio__slide-3">
                              <a href="service-details.html">
                                <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                <img src="assets/imgs/portfolio/3/3.jpg" alt="Portfolio " />
                              </a>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="portfolio__slide-3">
                              <a href="service-details.html">
                                <h3 className="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                                <img src="assets/imgs/portfolio/3/4.jpg" alt="Portfolio " />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-pagination" />
                        <div className="swiper-btn">
                          <div className="pp-prev"><i className="fa-solid fa-arrow-left" /></div>
                          <div className="pp-next"><i className="fa-solid fa-arrow-right" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Testimonial area  */}
              <Testimonial />

              {/* Workflow area  */}
              <section className="workflow__area-3">
                <div className="workflow__wrapper-3">
                  <div className="choose-wrapper wf_panel">
                    <div className="container">
                      <div className="row">
                        <div className="col-xxl-12">
                          <div className="choose-title-wrapper">
                            <h2 className="choose-title title-anim">why <br /> choose us</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="research__area wf_panel pt-150">
                    <div className="container inner_content">
                      <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="sec-title-wrapper">
                            <h2 className="sec-sub-title">why <br />choose us</h2>
                            <h3 className="sec-title">With visual material, there is a huge chance to explain</h3>
                            <p>the technical, challenging, or, dare we say it, occasionally boring in a way that is immediately understandable. The greatest financial content marketing combines a simple, colourful style with a straightforward editorial flow to visually lead the user through the most important ideas quickly and correctly.
                            </p>
                          </div>
                          <ul className="research__tools">
                            <li><a href="/google">Google</a></li>
                            <li><a href="/pinterest">pinterest</a></li>
                            <li><a href="/instagram">Instagram</a></li>
                          </ul>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="research__list">
                            <div className="research__item">
                              <div className="research__number">
                                <span>60%</span>
                              </div>
                              <div className="research__info">
                                <h4 className="research__title">Great Support</h4>
                                <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                              </div>
                            </div>
                            <div className="research__item">
                              <div className="research__number">
                                <span>95%</span>
                              </div>
                              <div className="research__info">
                                <h4 className="research__title">Huge Experience</h4>
                                <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                              </div>
                            </div>
                            <div className="research__item">
                              <div className="research__number">
                                <span>70%</span>
                              </div>
                              <div className="research__info">
                                <h4 className="research__title">100% Satisfaction
                                </h4>
                                <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="counter__area-3 wf_panel">
                    <div className="container">
                      <div className="row">
                        <div className="col-xxl-12">
                          <div className="sec-title-wrapper">
                            <h2 className="sec-sub-title">Why <br />Choose Us</h2>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                          <div className="counter__wrapper-3">
                            <div className="counter__item-3">
                              <h2 className="counter__number">25k</h2>
                              <p>Project <br />completed</p>
                            </div>
                            <div className="counter__item-3">
                              <h2 className="counter__number">8k</h2>
                              <p>Happy <br />customers</p>
                            </div>
                            <div className="counter__item-3">
                              <h2 className="counter__number">15</h2>
                              <p>Years <br />experiences</p>
                            </div>
                            <div className="counter__item-3">
                              <h2 className="counter__number">98</h2>
                              <p>Awards <br />achievement</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                          <div className="counter__img-3">
                            <img src="assets/imgs/thumb/counter-3.png" alt="Counter " />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* CTA area start */}
                  <div className="cta__area-3 wf_panel">
                    <div className="container pt-150 pb-150">
                      <div className="row">
                        <div className="col-xxl-12">
                          <div className="cta__content-3">
                            <p className="cta__sub-title-2">Have you project in mind?</p>
                            <h2 className="cta__title-2">Let’s make something great together!</h2>
                            <div className="btn_wrapper">
                              <a href="/contact" className="wc-btn-black btn-hover btn-item"><span />Contact <br />with
                                us <i className="fa-solid fa-arrow-right" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* CTA area end */}
                </div>
              </section>

              {/* faq area  */}
              <section className="price__area pt-130 pb-140">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                      <div className="sec-title-wrapper">
                        <h2 className="sec-sub-title title-anim">CHECK</h2>
                        <h3 className="sec-title title-anim">FAQ &amp; <br />WORKFLOW</h3>
                      </div>
                      <div className="faq__list-3">
                        <div className="accordion" id="accordionExample">
                        {queries.map(results=>(
                          <div className="accordion-item" key={results.id}>
                         
                            <h2 className="accordion-header" id="headingOne">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {results.questions}
                              </button>
                            </h2>
                         
                           
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <p>{results.solutions}</p>
                              </div>
                            </div>
                          
                          </div>
                        ))}





                          {/*  <div class="price__btn btn_wrapper">
                         <a href="contact.html" class="wc-btn-black btn-hover btn-item"><span></span> Check<br>Details <i
                        class="fa-solid fa-arrow-right"></i></a>
                        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              {/* Blog area */}
              <section className="blog__area-3 pb-140 blog__animation">
                <div className="container">
                  <div className="row ">
                    <div className="col-xxl-12">
                      <div className="sec-title-wrapper text-anim pt-130">
                        <h2 className="sec-sub-title">Recent Blog</h2>
                        <h3 className="sec-title title-anim">Read Updated <br />Journal</h3>
                        <p>Read our blog and try to see everything from every perspective. Our passion lies in making
                          everything
                          accessible and aesthetic for everyone. </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <article className="blog__item-3">
                        <div className="blog__img-wrapper-3">
                          <a href="blog-details.html">
                            <div className="img-box">
                              <img className="image-box__item" src="assets/imgs/blog/3/1.jpg" alt="Blog Thumbnail" />
                              <img className="image-box__item" src="assets/imgs/blog/3/1.jpg" alt="BLog Thumbnail" />
                            </div>
                          </a>
                        </div>
                        <div className="blog__info-3">
                          <h4 className="blog__meta"><a href="category.html">Investment Planning</a> . 02 May 2019</h4>
                          <h5><a href="blog-details.html" className="blog__title-3">How to bring fold to your startup
                            company with
                            Axtra</a></h5>
                          <a href="/blogdetails" className="blog__btn">Read More <span><i className="fa-solid fa-arrow-right" /></span></a>
                        </div>
                      </article>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <article className="blog__item-3">
                        <div className="blog__img-wrapper-3">
                          <a href="blog-details.html">
                            <div className="img-box">
                              <img className="image-box__item" src="assets/imgs/blog/3/2.jpg" alt="Blog Thumbnail" />
                              <img className="image-box__item" src="assets/imgs/blog/3/2.jpg" alt="BLog Thumbnail" />
                            </div>
                          </a>
                        </div>
                        <div className="blog__info-3">
                          <h4 className="blog__meta"><a href="/category">Investment Planning</a> . 02 May 2019</h4>
                          <h5><a href="/blogdetails" className="blog__title-3">How to manage a talented and
                            successful design
                            team</a></h5>
                          <a href="/blogdetails" className="blog__btn">Read More <span><i className="fa-solid fa-arrow-right" /></span></a>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </section>

            </main>

            {/* Footer area  */}
            <Footer />


          </div>
        </div>
        
     
      </div>
      <Helmet>
        <script src="assets/js/jquery-3.6.0.min.js" async="false"/>
        <script src="assets/js/bootstrap.bundle.min.js" async="false"/>
        <script src="assets/js/swiper-bundle.min.js" async="false"/>
        <script src="assets/js/mixitup.min.js" async="false"/>
        <script src="assets/js/counter.js" async="false"/>
        <script src="assets/js/gsap.min.js" async="false"/>
        <script src="assets/js/ScrollTrigger.min.js" async="false"/>
        <script src="assets/js/ScrollToPlugin.min.js" async="false"/>
        <script src="assets/js/ScrollSmoother.min.js"async="false"/>
        <script src="assets/js/SplitText.min.js" async="false"/>
        <script src="assets/js/chroma.min.js" async="false"/>
        <script src="assets/js/vanilla-tilt.js" async="false"/>
        <script src="assets/js/jquery.meanmenu.min.js" async="false"/>
        <script src="assets/js/main.js" async="false"/>
      </Helmet>
    
    </>

  )


}

export default Home
