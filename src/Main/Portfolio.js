import React, { Component } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

export class Portfolio extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="faqs-page" class="page-hero-section division">
          <div class="page-hero-overlay division">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-10 col-xl-8">
                  <div class="hero-txt text-center white-color">
                    <h2 class="h2-xs">Portfolio</h2>
                    <p class="p-xl">
                      portfolio description portfolio description portfolio
                      description portfolio description portfolio description
                      portfolio description{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          id="projects-1"
          class="wide-50 inner-page-hero projects-section division"
        >
          <div class="container">
            <div class="row">
              <div class="col gallery-items-list">
                <div class="masonry-wrap grid-loaded">
                  <div class="project-details masonry-image">
                    <div class="project-preview rel">
                      <div class="hover-overlay">
                        <img
                          class="img-fluid"
                          src="./assets/images/project-06.jpg"
                          alt="project-preview"
                        />
                        <div class="item-overlay"></div>
                      </div>
                    </div>
                    <div class="project-txt">
                      <p class="p-md grey-color">
                        Project mini description Project mini description
                        Project mini description{" "}
                      </p>
                      <h5 class="h5-lg">
                        <a href="project-details.html">
                          Project Title Project Title{" "}
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div class="project-details masonry-image">
                    <div class="project-preview rel">
                      <div class="hover-overlay">
                        <img
                          class="img-fluid"
                          src="./assets/images/project-06.jpg"
                          alt="project-preview"
                        />
                        <div class="item-overlay"></div>
                      </div>
                    </div>
                    <div class="project-txt">
                      <p class="p-md grey-color">
                        Project mini description Project mini description
                        Project mini description{" "}
                      </p>
                      <h5 class="h5-lg">
                        <a href="project-details.html">
                          Project Title Project Title{" "}
                        </a>
                      </h5>
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

export default Portfolio;
