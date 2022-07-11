import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";

const FooterCom = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="footercontent">
            <div className="ftop">
              <div className="fbtn">
                <div className="filter">
                  <div class="dropdown">
                    <button
                      class=" dropdown-toggle ft"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <BsGlobe></BsGlobe> Filter
                    </button>
                  </div>
                </div>
              </div>
              <div className="fnav">
                <h4>NAVIGATION</h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Investor Relations</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                </ul>
              </div>
              <div className="legal">
                <h4>LEGAL</h4>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Cookie Preferences</a>
                  </li>
                  <li>
                    <a href="#">Corporate Information</a>
                  </li>
                </ul>
              </div>
              <div className="talk">
                <h4>TALK TO US</h4>
                <ul>
                  <li>
                    <a href="#">support@ercom.com</a>
                  </li>
                  <li>
                    <a href="#">+66 2399 1145</a>
                  </li>
                </ul>
              </div>
              <div className="follow">
                <h4>Follow us</h4>
                <div className="ficn">
                  <div className="fic">
                    <GrFacebookOption color="white"></GrFacebookOption>
                  </div>
                  <div className="fic">
                    <GrLinkedinOption color="white"></GrLinkedinOption>
                  </div>
                  <div className="fic">
                    <BsTwitter color="white"></BsTwitter>
                  </div>
                </div>
              </div>
            </div>
            <div className="fbottom">
              <p>© 2022 Dramatic. All Rights Reserved. </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterCom;
