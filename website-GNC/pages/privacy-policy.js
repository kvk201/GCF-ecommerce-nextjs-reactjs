import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class PrivacyPolicy extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <PageBanner 
                    pageTitle="Privacy Policy" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Privacy Policy" 
                /> 
 
                <div className="text-container ptb-100">
                    <div className="container">
                        <h3>POLITIQUE DE CONFIDENTIALITÉ</h3>
                        <h3>PRIVACY POLICY</h3>
                        
                    </div>
                </div>
              
                <Footer />
            </>
        );
    }
}

export default PrivacyPolicy;