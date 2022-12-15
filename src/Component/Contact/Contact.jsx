

import React, { Component } from 'react';
import './contact.modules.css';
import Heading from '../Heading/Heading'
import Footer from './../Footer/Footer';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="title py-5">
        <Heading title='CONTACT ME'/>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-9">
              <input className='form-control' type="text"  placeholder='Name'/>
              <input className='form-control' type="email"  placeholder='Email Adress'/>
              <input className='form-control' type="number"  placeholder='Phone'/>
              <textarea className='form-control' type="text"  placeholder='Message'></textarea>
              <button className='my-4'>Send</button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

