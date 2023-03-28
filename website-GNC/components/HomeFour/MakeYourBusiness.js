import React, { Component } from 'react';
import Link from 'next/link';

class MakeYourBusiness extends Component {
    render() {
        return (
            <section className="business-area business-area-four ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="business-content">
                                <h2>Key Highlights of GNC Tokens</h2>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-chip"></i>
                                <h3>highlight 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Quis ipsum suspendisse ultrices gravida suspendisse.</p>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-blockchain"></i>
                                <h3>highlight 2</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Quis ipsum suspendisse ultrices gravida suspendisse.</p>
                            </div>

                            <div className="business-btn">
                                <Link href="/about-2">
                                    <a className="default-btn">
                                        Know Details
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">25%?</span></h2>
                                        <p>Presale</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">25%?</span></h2>
                                        <p>Developers</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">25%?</span></h2>
                                        <p>Mining</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">25%?</span></h2>
                                        <p>Investors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MakeYourBusiness;