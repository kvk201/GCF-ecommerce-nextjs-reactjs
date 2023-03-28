import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class TermsConditions extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <PageBanner 
                    pageTitle="Terms & Conditions" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Terms & Conditions" 
                /> 
 
                <div className="text-container ptb-100">
                    <div className="container">
                        <h3>TERMS AND CONDITIONS</h3>
             
                        </div>
                </div>
              
                <Footer />
            </>
        );
    }
}

export default TermsConditions;