


import React, { Component } from 'react'
import avataaars from './image/avataaars.svg'
import Heading from '../Heading/Heading'
import './home.css'
import Footer from './../Footer/Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="bg-text">
        <div className="container">
            <div className="row">
                <div className="text d-flex justify-content-center align-items-center">
                    <img className='w-25' src={avataaars} alt="" />
                </div>
                <Heading title='START REACT'/>
                <div className="caption">
                  <p className='text-white text-center font py-3'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
