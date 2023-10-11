import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
        Subscribe to our newsletter to receive our latest updates, promotions and tips.
        </p>
        <div className="input-area">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Services</h2>
            <Link to="/">Spring Clean Up</Link>
            <Link to="/">Lawn Mowing</Link>
            <Link to="/">Weed Control and Fertilization</Link>
            <Link to="/">Snow Removal</Link>
            <Link to="/">Fall Clean Up</Link>
            <Link to="/">Property Managers</Link>
          </div>
          <div className="footer-link-items">
            <h2>Company</h2>
            <Link to="/">About Us</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Customer Referral</Link>
            <Link to="/">Become a Provider</Link> 
            <Link to="/">Careers</Link> 
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Policy</h2>
            <Link to="/">Terms of Use</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Surcharges and Cancellation</Link>
            <Link to="/">Independent Contractor</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <hr className="hr-footer-up"/>
      <section className="social-media">
        <div className="social-media-wrap">
            <div className="footer-logo">
                <Link to='/' className='social-logo'>
                    EMERALD 
                </Link>
            </div>
            <small className='website-rights'> © 2023 EMERALD</small>
            <div className="social-icons">
                <Link className="social-icon-link facebook" 
                to="/"
                target="_blank"
                aria-label="Facebook"
                >
                <i className="fa fa-facebook-f"/>
                </Link>
                <Link className="social-icon-link instagram" 
                to="/"
                target="_blank"
                aria-label="instagram"
                >
                <i className="fa fa-instagram"/>
                </Link>
                <Link className="social-icon-link twitter" 
                to="/"
                target="_blank"
                aria-label="Twitter"
                >
                <i className="fa fa-facebook-f"/>
                </Link>
                <Link className="social-icon-link linkedin" 
                to="/"
                target="_blank"
                aria-label="LinkedIn"
                >
                <i className="fa fa-linkedin"/>
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
