import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
// import {  faFacebook, faLinkedin, faTwitter } from '@fortawesome/'
import {  faFacebook, faLinkedin, faTwitter  } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    render() {
        return (
            <>
            <div className='container-fluid bg-black py-3'>
                <div className='row ol-12'>
                    <div className='col-4 text-white text-start px-3'>
                        <h1>Get in touch</h1>
                        <div>
                            <span className='px-3'>
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            </span>
                         mostafabarakat143@gmail.com</div>
                        <div>
                        <span className='px-3'>
                                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            </span>
                            01015981398</div>
                    </div>
                    <div className='col-4 pt-5'>
                        <button className='p-2 bg-black text-white btn btn-outline-light'  >contact me</button>
                    </div>
                    <div className='col-4 text-white pt-5'>
                        {/* 3 font */}
                        <span>
                                <FontAwesomeIcon className='px-2' icon={faFacebook}></FontAwesomeIcon>
                                <FontAwesomeIcon className='px-2' icon={faLinkedin}></FontAwesomeIcon>
                                <FontAwesomeIcon className='px-2' icon={faTwitter}></FontAwesomeIcon>
                            </span>
                        <p>copyright&copy;2022 to Mostafa</p>
                    </div>
              </div>
            </div>
            </>
        );
    }
}

export default Footer;
