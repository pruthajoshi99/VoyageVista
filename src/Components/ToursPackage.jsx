import React, { useRef, useState } from 'react';

import "../assets/css/TourPackage.css"
import packageData from "../Data/tour-package.json";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";

function ToursPackage({ onNav, theme, toggleTheme, handlePayment, payment }) {

    const list = packageData.map((tour) => {
        return (
            <li className="list" key={tour.packageId}>
                <div className="card">
                    <h2 className="card-title">{tour.destination}</h2>
                    <img className="card-img" src={tour.img} alt={tour.alt} />
                    <span className="tariff">TARIFF : {tour.tariff}</span>
                    <span className="duration">DURATION : {tour.duration}</span>
                    <div className="card-button"> 
                        <Modal handlePayment={handlePayment}/>
                    </div>
                    
                </div>
            </li>
        );
    });

    return (
        <>
             <Header onNav={onNav} theme={theme} toggleTheme={toggleTheme}/>

             <div className="packages">
                <div className='heading-wrapper'>
                <h2 className="page-title">Our Packages</h2>
                <div className='payment'>
                    <span>PAYMENT DUE: </span>
                    <span>{payment}</span>
                </div>
               
                </div>
                <ul className="package-list">
                    {list}
                </ul>
            </div>
            
            <Footer />
        </>
       
    );

}

export default ToursPackage;