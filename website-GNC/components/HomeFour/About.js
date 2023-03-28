import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area about-area-four pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/about-img.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>About Us</span>
                                <h2>Description of what greenercoin finance does - our USP</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.</p>
                               
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Dapps
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                NFT marketplace
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                point 3
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                point 4
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                point 5
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                point 6
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <Link href="/about-1">
                                    <a className="default-btn">
                                        Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;