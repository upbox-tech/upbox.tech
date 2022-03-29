import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header" class="header tra-menu navbar-light">
        <div class="header-wrapper">
          <div class="wsmobileheader clearfix">
            <span class="smllogo">
              <img src="logo.png" alt="Upbox.tech Logo" />
            </span>
            <a id="wsnavtoggle" class="wsanimated-arrow">
              <span></span>
            </a>
          </div>
          <div class="wsmainfull menu clearfix black-color">
            <div class="wsmainwp clearfix">
              <div class="desktoplogo">
                <a href="/" class="logo-black">
                  <img src="logo.png" alt="Upbox.tech Logo" />
                </a>
              </div>
              <div class="desktoplogo">
                <a href="/" class="logo-white">
                  <img src="logo.png" alt="Upbox.tech Inverted Logo" />
                </a>
              </div>
              <nav class="wsmenu clearfix">
                <ul class="wsmenu-list nav-green-hover">
                  <li class="nl-simple" aria-haspopup="true">
                    <a href="/">Home</a>
                  </li>
                  <li class="nl-simple" aria-haspopup="true">
                    <a href="/portfolio">Portfolio</a>
                  </li>
                  <li class="nl-simple" aria-haspopup="true">
                    <a href="/#content-2">About</a>
                  </li>
                  <li class="nl-simple" aria-haspopup="true">
                    <a
                      href="/contact"
                      class="btn btn-tra-blue blue-hover last-link"
                    >
                      Contact Us
                    </a>
                  </li>
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
                      <a href="#" class="ico-facebook">
                        <span class="flaticon-facebook"></span>
                      </a>
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
