import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <section className="offer-area offer-area-two offer-area-four pt-100 pb-70">
			    <div className="container">
                    <div className="section-title home-four-section-title">
                        <span>Services</span>
                        <h2>Greener Coin Provides high quality services</h2>
                        <p>Never worry about your green financial needs with greener coin finance, offering high quality services, add small description of services we provide</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-chip"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>DApps</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-vr"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>NFT marketplace</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-blockchain"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Blockchain Project</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-target"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>xxxx</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-choice"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>yyyy</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-deep-learning"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>zzzz</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="offer-shape">
                    <img src="/images/shape/services-shape/1.png" alt="Image" />
                    <img src="/images/shape/services-shape/2.png" alt="Image" />
                    <img src="/images/shape/services-shape/3.png" alt="Image" />
                    <img src="/images/shape/services-shape/4.png" alt="Image" />
                    <img src="/images/shape/services-shape/5.png" alt="Image" />
                    <img src="/images/shape/services-shape/6.png" alt="Image" />
                </div>
            </section>
        );
    }
}

export default Services;