import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SubServiceAPI from '../SubServiceAPI';
import AboutHeroSection from '../AboutSections/AboutHeroSection';

function SubServices() {
    const { subServices } = useParams(); // Get the subServices from URL parameters
    const [matchedService, setMatchedService] = useState(null); // State to hold matched service

    // Function to find matching services based on subServices
    function matchingServices() {
        // Use find method to loop through the API and find the matching service
        return SubServiceAPI.find(service => service.servicesName === subServices);
    }

    useEffect(() => {
        const service = matchingServices();
        setMatchedService(service); // Set the matched service
    }, [subServices]);

    return (
        <div id='subService'>
            <Navbar />
            <AboutHeroSection img={matchedService?.servicesName} h2={matchedService?.servicesName}/>
            <div className="container mx-auto p-4">
                {matchedService ? (
                    <div>
                        <h1 className="text-2xl font-bold">{matchedService.title1}</h1>
                        <p>{matchedService.title1Detail}</p>
                        <h2 className="text-xl font-semibold">{matchedService.title2}</h2>
                        <p>{matchedService.title2Detail}</p>
                        <h2 className="text-xl font-semibold">{matchedService.title3}</h2>
                        <p>{matchedService.title3Detail}</p>
                    </div>
                ) : (
                    <h2 className="text-xl font-bold">Service Not Found</h2>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default SubServices;
