import React from 'react'
import {Helmet} from "react-helmet";
import Header from '../Includes/Header'
import Offcanvas from '../Includes/Offcanvas'
import Footer from  '../Includes/Footer'

function Blog() {
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

  {/* Offcanvas area */}
  <Offcanvas/>

  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        {/* Blog area  */}
        <section className="blog__area-3 blog-v3 blog__animation">
          <div className="container line">
            <div className="line-3" />
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
                    <h4 className="blog__meta"><a href="category.html">UI Design</a> . 02 May 2019</h4>
                    <h5><a href="blog-details.html" className="blog__title-3">How to bring fold to your startup
                        company with
                        Axtra</a></h5>
                    <a href="blog-details.html" className="blog__btn">Read More <span><i className="fa-solid fa-arrow-right" /></span></a>
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
                    <h4 className="blog__meta"><a href="category.html">UI Design</a> . 02 May 2019</h4>
                    <h5><a href="blog-details.html" className="blog__title-3">How to manage a talented and
                        successful design
                        team</a></h5>
                    <a href="blog-details.html" className="blog__btn">Read More <span><i className="fa-solid fa-arrow-right" /></span></a>
                  </div>
                </article>
              </div>
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
                    <h4 className="blog__meta"><a href="category.html">UI Design</a> . 02 May 2019</h4>
                    <h5><a href="blog-details.html" className="blog__title-3">How to bring fold to your startup
                        company with
                        Axtra</a></h5>
                    <a href="blog-details.html" className="blog__btn">Read More <span><i className="fa-solid fa-arrow-right" /></span></a>
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
                    <h4 className="blog__meta"><a href="category.html">UI Design</a> . 02 May 2019</h4>
                    <h5><a href="blog-details.html" className="blog__title-3">How to manage a talented and
                        successful design
                        team</a></h5>
                    <a href="blog-details.html" className="blog__btn">Read More <span><i className="fa-solid fa-arrow-right" /></span></a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
    
      </main>
      {/* Footer area  */}
    <Footer/>

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
</div>
    </>
  )
}

export default Blog
