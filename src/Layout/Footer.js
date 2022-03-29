import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer-4" class="bg-snow footer division">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="footer-info mb-40 text-left">
                  <img
                    class="footer-logo mb-25"
                    src="./logo.png"
                    alt="Upbox.tech logo"
                  />
                  <p class="p-md">
                    458, Orchid Harmony, Gaurav Path,
                    <br /> Adajan, Surat -395009.
                    <br /> Mobile: (+91) 8799450489
                    <br /> Mail:{" "}
                    <a href="mailto:info@upbox.tech">info@upbox.tech</a>{" "}
                  </p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="footer-info mb-40 text-left">
                  <h6 class="h6-xl">UPBOX.TECH</h6>
                  <ul
                    style={{ padding: "0" }}
                    class="foo-links text-secondary clearfix"
                  >
                    <li>
                      <p class="p-md">
                        <a href="/">Upbox Home</a>
                      </p>
                    </li>
                    <li>
                      <p class="p-md">
                        <a href="/#content-2">Who we are?</a>
                      </p>
                    </li>
                    <li>
                      <p class="p-md">
                        <a href="/portfolio">Works we did</a>
                      </p>
                    </li>
                    <li>
                      <p class="p-md">
                        <a href="/contact">For Inquiry</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="footer-info mb-40 text-center">
                  <h6 class="h6-xl">Follow us on</h6>
                  <p>
                    You can follow us on various social media platforms to know
                    us better.
                  </p>
                  <ul class="wsmenu-list nav-green-hover">
                    <li
                      class="nl-simple blue-color header-socials ico-20 clearfix"
                      aria-haspopup="true"
                    >
                      <span>
                        <a href="#" class="ico-linkedin">
                          <span class="flaticon-linkedin"></span>
                        </a>
                      </span>
                      <span>
                        <a href="#" class="ico-twitter">
                          <span class="flaticon-twitter"></span>
                        </a>
                      </span>
                      <span>
                        <a href="#" class="ico-instagram">
                          <span class="flaticon-instagram"></span>
                        </a>
                      </span>
                      <span>
                        <a href="#" class="ico-youtube">
                          <span class="flaticon-youtube"></span>
                        </a>
                      </span>
                      <span>
                        <a href="#" class="ico-facebook">
                          <span class="flaticon-facebook"></span>
                        </a>
                      </span>
                      <span>
                        <a href="#" class="ico-github">
                          <span class="flaticon-github"></span>
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div class="bottom-footer text-center">
              <div class="row row-cols-1 row-cols-md-2 d-flex align-items-center">
                <div class="col">
                  <div class="footer-copyright">
                    <p>&copy; 2022 - 2023 Upbox Tech. All Rights Reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
