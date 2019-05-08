import React, {Component} from 'react';

const About = () => {
    return (
            <div className="tc center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                    <h1 className="f3 mb2 hot-pink">International Space Station Current Location️</h1>
                <h2 className="f4 fw4 gray mt4">The International Space Station with ESA’s Columbus laboratory flies 400 km high at speeds that defy gravity – literally. At 28 800 km/h it only takes 90 minutes for the weightless laboratory to make a complete circuit of Earth. Astronauts working and living on the Station experience 16 sunrises and sunsets each day. </h2>
                       <p className="f4 fw4 gray mt0">The tracker below, developed by us, shows where the ISS is right now and its path 90 minutes ago and 90 minutes ahead. Due to Earth's rotation the Station seems to travel from west to east over our planet.</p>
                <img src="https://i.ibb.co/d6RTnMF/1451c7585afc6b0b25ede1976d4cbc21318e8e154c38ca14bad180678ca2.jpg" alt="" className="br5 mw5 mw6-ns items-center pt4"/>
            </div>
    );
};

export default About;