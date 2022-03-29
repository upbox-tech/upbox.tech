import React, { Component } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import HowWeWork from "./HowWeWork";

export class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <section id="hero-3" class="bg-scroll hero-section division">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div class="col-lg-6">
                <div class="hero-3-txt black-color">
                  <h2 class="h2-lg wow fadeInUp">
                    Upbox.tech - One solution for your business
                  </h2>
                  <ul
                    style={{ padding: "0" }}
                    class="advantages clearfix wow fadeInUp"
                  >
                    <li class="first-li">
                      <p>Consultancy</p>
                    </li>
                    <li>
                      <p>&nbsp;Software </p>
                    </li>
                    <li class="last-li">
                      <p>&nbsp;Automation</p>
                    </li>
                  </ul>
                  <div class="btns-group mb-30 wow fadeInUp">
                    <a
                      href="/contact"
                      class="btn btn-tra-blue blue-hover mr-15"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="hero-3-img wow fadeInRight">
                  <img
                    class="img-fluid"
                    style={{ "margin-right": "30%" }}
                    src="./assets/images/tablet-01.png"
                    alt="hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="wave-shape-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 195">
              <path
                fill="#fff"
                fill-opacity="1"
                d="M0,192L1440,96L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>
        <section
          id="content-2"
          class="content-2 pb-60 content-section division"
        >
          <div class="container">
            <div class="row d-flex align-items-center">
              <div class="col-md-5 col-lg-6">
                <div class="rel img-block left-column wow fadeInRight">
                  <img
                    class="img-fluid"
                    src="./assets/images/img-15.jpg"
                    alt="content-image"
                  />
                </div>
              </div>
              <div class="col-md-7 col-lg-6">
                <div class="txt-block right-column wow fadeInLeft">
                  <span class="section-id txt-upcase">ABOUT US</span>
                  <h2 class="h2-xs">Not just a software company, but...</h2>
                  <p class="p-lg">
                    Upbox.tech is a company dedicated towards 360&#176;
                    development of any business. We provide Business
                    consultancy, Software development, Data analytics,
                    Automation/AI and we also provide hardware for the same.
                  </p>
                  <p class="p-lg">
                    We are the team of young enterpreneurs driven towards the
                    goal to take technological revolution to each and every
                    business in our country.
                  </p>
                  <p class="p-lg">
                    We are experienced people who are experiencing new
                    challanges everyday. Software and technologies never stops
                    growing, so do we. We are generating more employment in the
                    process of our growing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features-4"
          class="wide-60 bg-snow features-section division"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10 col-xl-8">
                <div class="section-title title-01 mb-70">
                  <h2 class="h2-md">
                    Allow us to make few changes to your work
                  </h2>
                  <p class="p-xl">
                    Let's go through the process of making your work simpler and
                    more joyful. Don't work in same old ways upgrade it,
                    optimize it and make it bigger than a dream.
                  </p>
                </div>
              </div>
            </div>
            <div class="fbox-4-wrapper fbox-4-wide">
              <div class="row row-cols-1 row-cols-md-2">
                <div class="col">
                  <div class="fbox-4 pr-25 mb-40 wow fadeInUp">
                    <div class="fbox-ico">
                      <div class="ico-65">
                        <span class="flaticon-line-graph-1"></span>
                      </div>
                    </div>
                    <div class="fbox-txt">
                      <h5 class="h5-md">Business Analysis</h5>
                      <p class="p-lg">
                        Let's first learn your business and find out what would
                        be the best path for the growth.
                        <br /> We'll do the research and analysis for your
                        business on your behalf to make things work out
                        according to your plan.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="fbox-4 pl-25 mb-40 wow fadeInUp">
                    <div class="fbox-ico">
                      <div class="ico-65">
                        <span class="flaticon-internet"></span>
                      </div>
                    </div>
                    <div class="fbox-txt">
                      <h5 class="h5-md">
                        Web Development, E-commerce, Cloud Services
                      </h5>
                      <p class="p-lg">
                        Analysis is done. Now to inform and attract more people
                        we are going to develop a beautifully designed website
                        for your business. <br /> This website will become a
                        portal for many people to join and enjoy your services.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="fbox-4 pr-25 mb-40 wow fadeInUp">
                    <div class="fbox-ico">
                      <div class="ico-65">
                        <span class="flaticon-smartphone"></span>
                      </div>
                    </div>
                    <div class="fbox-txt">
                      <h5 class="h5-md">Android/IOS Development</h5>
                      <p class="p-lg">
                        Our new generation is very much mobile centric. They
                        want everything under few clicks.
                        <br />
                        We are going to solve that issue by creating fast and
                        good looking mobile application for your business.
                        <br /> This will create new opportunities for your
                        business to grow.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="fbox-4 pl-25 mb-40 wow fadeInUp">
                    <div class="fbox-ico">
                      <div class="ico-65">
                        <span class="flaticon-increase-1"></span>
                      </div>
                    </div>
                    <div class="fbox-txt">
                      <h5 class="h5-md">ERP, CRM and POS</h5>
                      <p class="p-lg">
                        Now your business is huge and it's getting very hard to
                        maintain all the documents, customers, clients, and
                        partners. What to do? <br />
                        We've got solution for that as well. We will provide you
                        with personalized ERP and CRM. <br />
                        This will make things easier for you. Every record will
                        be stored in a electronized database.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="fbox-4 pr-25 mb-40 wow fadeInUp">
                    <div class="fbox-ico">
                      <div class="ico-65">
                        <span class="flaticon-algorithm"></span>
                      </div>
                    </div>
                    <div class="fbox-txt">
                      <h5 class="h5-md">Automation and AI</h5>
                      <p class="p-lg">
                        Everything is going good. Can we optimize more?
                        <br /> Why not, we can reduce your work with the help of
                        automation and AI. Believe us every work can be
                        optimized with the help of computers we encounter these
                        days.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="fbox-4 pl-25 mb-40 wow fadeInUp">
                    <div class="fbox-ico">
                      <div class="ico-65">
                        <span class="flaticon-seo"></span>
                      </div>
                    </div>
                    <div class="fbox-txt">
                      <h5 class="h5-md">
                        Digital Marketing, SEO, and Advertising
                      </h5>
                      <p class="p-lg">
                        More is always good. Our online business is already
                        growing but we will add a pinch of salt to make it taste
                        better. <br />
                        We will do SEO and some digital marketing so that it can
                        reach to more potential clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HowWeWork />
        <section id="projects-2" class="pt-60 projects-section division">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10 col-xl-8">
                <div class="section-title title-01 mb-70">
                  <h2 class="h2-md">Actions speak louder than words</h2>
                  <p class="p-xl">
                    Want to see some awesome projects that we worked on,
                    recently? I know you want to. Let's go
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col gallery-items-list">
                <div class="masonry-wrap grid-loaded">
                  <div class="project-details masonry-image">
                    <div class="project-preview rel">
                      <div class="hover-overlay">
                        <img
                          class="img-fluid"
                          src="../assets/images/maaarbuda.png"
                          alt="project-preview"
                        />
                        <div class="item-overlay"></div>
                      </div>
                    </div>
                    <div class="project-txt">
                      <h5 class="h5-md">
                        <a href="https://maaarbuda.com">
                          Maaarbuda.com - Transport Management System
                        </a>
                      </h5>
                      <p class="p-md grey-color">Web Development</p>
                    </div>
                  </div>
                  <div class="project-details masonry-image">
                    <div class="project-preview rel">
                      <div class="hover-overlay">
                        <img
                          class="img-fluid"
                          src="../assets/images/ecommerce.png"
                          alt="project-preview"
                        />
                        <div class="item-overlay"></div>
                      </div>
                    </div>
                    <div class="project-txt">
                      <h5 class="h5-md">
                        <a href="https://prizema.in">
                          Prizemaa - Ecommerce Website
                        </a>
                      </h5>
                      <p class="p-md grey-color">
                        Ecommerce Website, Android Application
                      </p>
                    </div>
                  </div>
                  <div class="project-details masonry-image">
                    <div class="project-preview rel">
                      <div class="hover-overlay">
                        <img
                          class="img-fluid"
                          src="../assets/images/erp.png"
                          alt="project-preview"
                        />
                        <div class="item-overlay"></div>
                      </div>
                    </div>
                    <div class="project-txt">
                      <h5 class="h5-md">
                        <a href="/">ERP</a>
                      </h5>
                      <p class="p-md grey-color">ERP, CRM & POS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="more-btn mt-20">
                  <a href="/portfolio" class="btn btn-tra-blue blue-hover">
                    View More Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="content-3"
          class="bg-snow content-3 wide-60 content-section division"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10 col-xl-8">
                <div class="section-title title-01 mb-70">
                  <h2 class="h2-md">Thousands of companies, Why us?</h2>
                  <p class="p-xl">
                    We do not have a grand list of features to represent our
                    work. Just couple of things to focus and get better at.
                  </p>
                </div>
              </div>
            </div>
            <div class="top-row pb-50">
              <div class="row d-flex align-items-center">
                <div class="col-md-5 col-lg-6">
                  <div class="img-block left-column wow fadeInRight">
                    <img
                      class="img-fluid"
                      src="./assets/images/img-14.png"
                      alt="content-image"
                    />
                  </div>
                </div>
                <div class="col-md-7 col-lg-6">
                  <div class="txt-block right-column wow fadeInLeft">
                    <div class="txt-box mb-20">
                      <h5 class="h5-lg">Client Communication</h5>
                      <p class="p-lg">
                        “Communication works for those who work at it.” – John
                        Powell
                        <br /> Excellent communication can lead to better
                        product. And we believe at Upbox.tech that good client
                        communication will always give fruitful results.
                        <br />
                        We take care of after sales services and support with
                        great deal of concern.
                      </p>
                    </div>
                    <div class="txt-box">
                      <h5 class="h5-lg">Punctuality</h5>
                      <ul class="simple-list">
                        <li class="list-item">
                          <p class="p-lg">
                            With all the experience in our industry we know that
                            the biggest important factor in client satisfaction
                            is punctuality.
                          </p>
                        </li>
                        <li class="list-item">
                          <p class="p-lg">
                            We push to our hardest to deliver your work on the
                            decided dates or earlier. There are very few
                            occasions where we failed to deliver our work on
                            time. But even that with very less margin.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="reviews-1"
          class="bg-white wide-100 reviews-section division"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10 col-xl-8">
                <div class="section-title title-01 mb-70">
                  <h2 class="h2-md">Want reviews of our work?</h2>
                  <p class="p-xl">
                    We can give you the contact information of our clients. You
                    can talk to them and ask for the genuine reviews.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="owl-carousel owl-theme reviews-1-wrapper">
                  <div class="review-1">
                    <div class="review-1-ico ico-25">
                      <span class="flaticon-left-quote"></span>
                    </div>
                    <div class="review-1-txt">
                      <p class="p-lg">
                        I doubted them in the beginning but now I am
                        recommending them.
                      </p>
                      <div class="author-data clearfix">
                        <div class="review-author">
                          <h6 class="h6-xl">Jay Tamakuwala</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="review-1">
                    <div class="review-1-ico ico-25">
                      <span class="flaticon-left-quote"></span>
                    </div>
                    <div class="review-1-txt">
                      <p class="p-lg">
                        They did good work. I really like their time management!
                      </p>
                      <div class="author-data clearfix">
                        <div class="review-author">
                          <h6 class="h6-xl">Hiren Desai</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="review-1">
                    <div class="review-1-ico ico-25">
                      <span class="flaticon-left-quote"></span>
                    </div>
                    <div class="review-1-txt">
                      <p class="p-lg">
                        As a non technical person, they explained everything
                        pretty well.
                      </p>
                      <div class="author-data clearfix">
                        <div class="review-author">
                          <h6 class="h6-xl">Ankit Pandey</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="review-1">
                    <div class="review-1-ico ico-25">
                      <span class="flaticon-left-quote"></span>
                    </div>
                    <div class="review-1-txt">
                      <p class="p-lg">
                        I can't believe they did it in this less of a time.
                      </p>
                      <div class="author-data clearfix">
                        <div class="review-author">
                          <h6 class="h6-xl">Bimal Singh</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="review-1">
                    <div class="review-1-ico ico-25">
                      <span class="flaticon-left-quote"></span>
                    </div>
                    <div class="review-1-txt">
                      <p class="p-lg">
                        It was nice to work with these guys. The work was fine.
                      </p>
                      <div class="author-data clearfix">
                        <div class="review-author">
                          <h6 class="h6-xl">Asish Yadav</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Home;
