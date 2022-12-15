

import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import './about.modules.css';
import Footer from './../Footer/Footer';

export default class About extends Component {
  render() {
    return (
      <div>
      <div className='section'>
      <div className='py-5'>
      <Heading title='About'/>
      </div>
      <div className='container'>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <p>
            Freelancer is a free bootstrap 
            theme created by Route. The 
            download includes the complete 
            source files including 
            HTML, CSS, and JavaScript as 
            well as optional SASS stylesheets 
            for easy customization.
            </p>
          </div>
          <div className="col-md-4">
            <p>
            You can create your own custom avatar 
            for the masthead, change the 
            icon in the dividers, 
            and add your email address to 
            the contact form to make it fully functional!
            </p>
          </div>
          </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
