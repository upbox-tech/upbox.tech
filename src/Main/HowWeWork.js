import React, { Component } from "react";

export class HowWeWork extends Component {
  render() {
    return (
      <div>
        <h2 class="h2-xs" style={{ display: "flex", justifyContent: "center" }}>
          How we work
        </h2>
        <div className="section-wrapper">
          <div className="how-we-work-graphic">Image/Graphic/GIF</div>
          <div className="how-we-work-container">
            <ul className="bullet-step-list-ul">
              <li className="bullet-step-list-li">
                <h4 class="h4-xs">Requirement Gathering</h4>
                <span>blah blah.....</span>
              </li>
              <li className="bullet-step-list-li">
                <h4 class="h4-xs">Meeting</h4>
                <span>blah blah.....</span>
              </li>

              <li className="bullet-step-list-li">
                <h4 class="h4-xs">Development</h4>
                <span>blah blah.....</span>
              </li>

              <li className="bullet-step-list-li">
                <h4 class="h4-xs">Testing</h4>
                <span>blah blah.....</span>
              </li>

              <li className="bullet-step-list-li">
                <h4 class="h4-xs">Feedback</h4>
                <span>blah blah.....</span>
              </li>

              <li className="bullet-step-list-li">
                <h4 class="h4-xs">Delivery</h4>
                <span>blah blah.....</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HowWeWork;
