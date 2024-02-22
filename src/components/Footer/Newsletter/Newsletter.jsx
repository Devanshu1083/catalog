import "./Newsletter.scss";
import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";

const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-cont">
            <span className="stext">Newsletter</span>
            <span className="btext">Subscribe for latest news and offers</span>
            <div className="form">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebook size={20}/>
                </div>
                <div className="icon">
                    <FaLinkedinIn size={20}/>
                </div>
                <div className="icon">
                    <FaInstagram size={20}/>
                </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
