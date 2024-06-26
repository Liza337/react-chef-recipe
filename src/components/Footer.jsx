import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <nav>
                <h6 className="footer-title">Services</h6> 
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav> 
            <nav>
                <h6 className="footer-title">Company</h6> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Recipes</a>
        
            </nav> 
            <nav>
                <h6 className="footer-title">Legal</h6> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav> 
            <form>
                <h6 className="footer-title">Subscription</h6> 
                <fieldset className="form-control w-80">
                <label className="label">
                    <span className="text-neutral-content">Enter your email address</span>
                </label> 
                <div className="join">
                    <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
                    <button className="btn btn-primary join-item">Subscribe</button>
                </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;