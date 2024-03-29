import React, { Component } from 'react';
import Link from 'next/link';

class WhatWeOffer extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="industries-area industries-area-four pb-100">
			    <div className="container">
                    <div className="section-title home-four-section-title">
                        <span>What Does Greener Coin Finance Offer</span>
                        <h2>Our Services</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos ea obcaecati et similique incidunt animi, sed, quos officiis placeat. Id ipsa molestias.</p>
                    </div>

                    <div className="tab industries-list-tab">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                {/* Tabs navs */}
                                <ul className="tabs">
                                    <li
                                        className="current"
                                        onClick={(e) => this.openTabSection(e, 'tab1')}
                                    >
                                        <span>
                                            <i className="flaticon-machine-learning"></i>
                                            <h3>NFT marketplace</h3>
                                            <p>eco-friendly products</p>
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab2')}
                                    >
                                        <span>
                                            <i className="flaticon-artificial-intelligence"></i>
                                            <h3>Dapps</h3>
                                            <p>Digital applications</p>
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab3')}
                                    >
                                        <span>
                                            <i className="flaticon-health"></i>
                                            <h3>blockchain technology?</h3>
                                            <p>decentralized ?</p>
                                        </span>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab4')}
                                    >
                                        <span>
                                            <i className="flaticon-automation"></i>
                                            <h3>xyz</h3>
                                            <p>xyz</p>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="col-lg-9">
                                <div className="tab_content">
                                    {/* Tab item #1 */}
                                    <div id="tab1" className="tabs_item">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="industries-img left-img">
                                                    <img src="/images/offer1.png" alt="Image" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="industries-content">
                                                    <h3>NFT marketplace</h3>
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque recusandae esse alias reprehenderit.</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt?</p>
                                                    
                                                    <div className="row">
                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    consumer products
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 2
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 3
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 4
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 5
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 6
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="text-center">
                                                        <Link href="/services">
                                                            <a className="default-btn">Discover More</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Tab item #2 */}
                                    <div id="tab2" className="tabs_item">
                                        <div className="row  align-items-center">
                                            <div className="col-lg-6">
                                                <div className="industries-content">
                                                    <h3>DApps</h3>
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque recusandae esse alias reprehenderit.</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt? Ab rerum eaque aperiam sequi dolore minus itaque eos!</p>

                                                    <div className="row">
                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 1
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 2
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 3
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 4
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 5
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 6
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="text-center">
                                                        <Link href="/services">
                                                            <a className="default-btn">Discover More</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="industries-img right-img">
                                                    <img src="/images/offer2.png" alt="Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tab item #3 */}
                                    <div id="tab3" className="tabs_item">
                                        <div className="row  align-items-center">
                                            <div className="col-lg-6">
                                                <div className="industries-img left-img">
                                                    <img src="/images/offer3.png" alt="Image" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="industries-content">
                                                    <h3>blockchain technology?</h3>
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque recusandae esse alias reprehenderit.</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt? Ab rerum eaque aperiam sequi dolore minus itaque eos!</p>
                                                    
                                                    <div className="row">
                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="text-center">
                                                        <Link href="/services">
                                                            <a className="default-btn">Discover More</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tab item #4 */}
                                    <div id="tab4" className="tabs_item">
                                        <div className="row  align-items-center">
                                            <div className="col-lg-6">
                                                <div className="industries-content">
                                                    <h3>Manufacturing</h3>
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque recusandae esse alias reprehenderit.</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt? Ab rerum eaque aperiam sequi dolore minus itaque eos!</p>
                                                    
                                                    <div className="row">
                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col-lg-6 col-sm-6">
                                                            <ul className="industries-item">
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 
                                                                </li>
                                                                <li>
                                                                    <i className="flaticon-checked"></i>
                                                                    sub service 
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="text-center">
                                                        <Link href="/services">
                                                            <a className="default-btn">Discover More</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="industries-img right-img">
                                                    <img src="/images/offer4.png" alt="Image" />
                                                </div>
                                            </div>
                                        </div>
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

export default WhatWeOffer;