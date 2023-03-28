import React, { Component } from 'react';
import Link from 'next/link';

class ServiceSidebar extends Component {
    render() {
        return (
            <div className="service-sidebar-area">
                <div className="service-list">
                    <h3 className="service-details-title">Facilities</h3>
                    <ul>
                        <li>
                            <Link href="/service-details">
                                <a>
                                    NFT market
                                    <i className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details">
                                <a>
                                    Dapps
                                    <i className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details">
                                <a>
                                    xyz
                                    <i className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details">
                                <a>
                                    support
                                    <i className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="service-list">
                    <h3 className="service-details-title">Contact Info</h3>
                    <ul>
                        <li>
                            +000 0000 0 0 0 0
                            <i className='bx bx-phone-call bx-rotate-270'></i>
                        </li>
                        <li>
                            greenercoin.finance@gmail.com
                            <i className='bx bx-envelope'></i>
                        </li>
                        <li>
                            123 street, Paris, France
                            <i className='bx bx-location-plus'></i>
                        </li>
                        <li>
                            9:00 AM – 8:00 PM
                            <i className='bx bx-time'></i>
                        </li>
                    </ul>
                </div>

                <div className="service-list">
                    <h3 className="service-details-title">Download whitepaper</h3>
                    <ul>
                        <li>
                            <Link href="#">
                                <a>
                                    Whitepaper
                                    <i className='bx bxs-cloud-download'></i>
                                </a>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        );
    }
}

export default ServiceSidebar;