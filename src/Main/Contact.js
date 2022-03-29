import React, { Component } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

export class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <section
          id="contacts-2"
          class="bg-white wide-50 inner-page-hero contacts-section division"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-8">
                <div class="section-title title-02 mb-80">
                  <h2 class="h2-xs">
                    Have a question? Need help? Don't hesitate, drop us a line
                  </h2>
                  <p class="p-xl">
                    You can contact us via this form or call us directly on
                    (+91) 8799450489
                  </p>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-10 col-xl-8">
                <div class="form-holder">
                  <form name="contactform" class="row contact-form">
                    <div class="col-md-12">
                      <p class="p-lg">Your Name: </p>
                      <span>Please enter your real name: </span>
                      <input
                        type="text"
                        name="name"
                        class="form-control name"
                        placeholder="Your Name*"
                      />
                    </div>
                    <div class="col-md-12">
                      <p class="p-lg">Your Email Address: </p>
                      <span>
                        Please carefully check your email address for accuracy
                      </span>
                      <input
                        type="text"
                        name="email"
                        class="form-control email"
                        placeholder="Email Address*"
                      />
                    </div>
                    <div class="col-md-12">
                      <p class="p-lg">Explain your question in details: </p>
                      <span>
                        Query regarding your brand new business or details on
                        quantum physics, you can ask us anything.
                      </span>
                      <textarea
                        class="form-control message"
                        name="message"
                        rows="3"
                        style={{ height: "60%" }}
                        placeholder="I have a problem with..."
                      ></textarea>
                    </div>
                    <div class="col-md-12 mt-15 form-btn text-right">
                      <button
                        type="submit"
                        class="btn btn-skyblue tra-grey-hover submit"
                      >
                        Submit Request
                      </button>
                    </div>
                    <div class="col-lg-12 contact-form-msg">
                      <span class="loading"></span>
                    </div>
                  </form>
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
export default Contact;
