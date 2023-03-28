import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-envelope"></i>
                                <h3>Email Us:</h3>
                                <p><a href="mailto:greenercoin.finance@gmail.com">greenercoin.finance@gmail.com</a></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-phone-call"></i>
                                <h3>Call Us:</h3>
                                <p>Tel. + <a href="tel:000">(123) 0000-567-8000</a></p>
                                <p>Tel. + <a href="tel:000">(124) 0000-567-0000</a></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-location-plus"></i>
                                <h3>Paris</h3>
                                <p>123, Paris Road, Paris France</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-support"></i>
                                <h3>Live Chat??</h3>
                                <p>live chat all the time with our company 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;