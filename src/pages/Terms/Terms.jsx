import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='w-[90%] mx-auto '>
        <h2 className='text-xl text-center my-8 font-bold'>Terms and Conditions</h2>

        <p>Welcome to our website. By accessing or using our site, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.</p>
        
        <h3 className='text-lg my-4'>1. Acceptance of Terms</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusantium at nobis sit quam incidunt accusamus, impedit facere ad deserunt! Quam, voluptates tempore amet alias necessitatibus perspiciatis sit aut est!</p>
        
        <h3 className='text-lg my-4'>2. Modification of Terms</h3>
        <p>We reserve the right to change these terms at any time. It is your responsibility to review these terms periodically. Your continued use of the site after any changes signifies your acceptance of the updated terms.</p>
        
        <h3 className='text-lg my-4'>3. Use of the Site</h3>
        <p>Our site is provided for your personal and non-commercial use only. You agree not to use the site for any unlawful or prohibited activities.</p>

            <p className='my-8'>Go back to <Link to={'/signup'} className="label-text-alt link link-hover text-sm text-blue-700">Register</Link></p>
        </div>
    );
};

export default Terms;