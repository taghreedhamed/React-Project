

import React, { Component } from 'react';
import './footer.modules.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="section3">
        <div className="section2">
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center">
                    <h2>LOCATION</h2>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4 text-center">
                    <h2 className=''>AROUND THE WEB</h2>
                    <div className="socail-icon d-flex justify-content-center align-items-center mt-3">
                        <div className="icon">
                        <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div className="icon">
                        <i class="fa-brands fa-twitter"></i>
                        </div>
                        <div className="icon">
                        <i class="fa-brands fa-linkedin"></i>
                        </div>
                        <div className="icon">
                        <i class="fa-brands fa-facebook"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <h2>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
        </div>
        <div className="footer-title">
            <p>Copyright © Your Website 2021</p>
        </div>
        </div>
      </div>
    )
  }
}
