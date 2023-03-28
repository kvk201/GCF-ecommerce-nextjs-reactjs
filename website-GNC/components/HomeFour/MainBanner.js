import React, { useState } from 'react';
import Link from 'next/link';
import FsLightbox from 'fslightbox-react';

const MainBanner = () => {
    // if toggler is updated when lightbox is closed it will open it
    // if toggler is updated when lightbox is opened it will close it
    const [toggler, setToggler] = useState(false);
    return (
		<>
			<FsLightbox
                toggler={ toggler }
                sources={ [
                    'https://www.youtube.com/embed/bk7McNUjWgw',
                ] }
            />

            <div className="main-banner-area main-banner-area-four">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="banner-text">
                                <h1>Bridge to all your green Blockchain needs</h1>
                                <p>We offer services to bridge the gap between your ideas and reality</p>
                                
                                <div className="banner-btn">
                                    <Link href="/about-2">
                                        <a className="default-btn">
                                            Learn More
                                        </a>
                                    </Link>

                                    <div
                                        onClick={ () => setToggler(!toggler) }
                                        className="default-btn active popup-youtube"
                                    > 
                                        <i className="bx bx-play"></i> How it work?
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 pr-0">
                            <div className="banner-four-main-img">
                                <img 
                                    className="animate__animated animate__fadeInRight animate__fast" 
                                    //src="/images/home-four/main-img4.png" 
                                    //alt="Image" 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="over-shape">
                    <img src="/images/home-one/shape/animate1.png" alt="Image" />
                    <img src="/images/home-one/shape/animate1.png" alt="Image" />
                    <img src="/images/home-one/shape/animate2.png" alt="Image" />
                    <img src="/images/home-one/shape/animate2.png" alt="Image" />
                    <img src="/images/home-one/shape/animate3.png" alt="Image" />
                </div>
            </div>
		</>
    );
}

export default MainBanner;