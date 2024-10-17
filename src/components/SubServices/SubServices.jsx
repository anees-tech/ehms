import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SubServiceAPI from '../SubServiceAPI';
import AboutHeroSection from '../AboutSections/AboutHeroSection';

function SubServices() {
    const { subServices } = useParams();
    const [matchedService, setMatchedService] = useState(null);

    function matchingServices() {
        return SubServiceAPI.find(service => service.servicesName === subServices);
    }

    useEffect(() => {
        const service = matchingServices();
        setMatchedService(service);
    }, [subServices]);

    // Utility function to handle text splitting into paragraphs
    const renderParagraphs = (text) => {
        return text.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg">{paragraph}</p>
        ));
    };

    return (
        <div id='subService' className="min-h-screen h-full flex flex-col">
            <Navbar />
            <AboutHeroSection img={matchedService?.servicesName} h2={matchedService?.servicesTitle} />
            <div className="container mx-auto p-12 flex-1">
                {matchedService ? (
                    <div className="space-y-12 max-w-screen-lg mx-auto">
                        <div className="flex flex-col lg:flex-row items-center lg:space-x-8 min-h-[50vh] gap-12">
                            <div className="lg:w-1/2 space-y-4 text-justify">
                                <h1 className="text-3xl font-bold">{matchedService.title1}</h1>
                                {/* Use the renderParagraphs function to display text properly */}
                                {renderParagraphs(matchedService.title1Detail)}
                            </div>
                            <div className="lg:w-1/2 pb-8">
                                <img
                                    alt={matchedService.title1}
                                    className="w-full h-auto rounded-lg shadow-lg"
                                    src={matchedService.img1}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-8 min-h-[50vh] gap-12">
                            <div className="lg:w-1/2">
                                <img
                                    src={matchedService.img2}
                                    alt={matchedService.title2}
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="lg:w-1/2 space-y-4 text-justify">
                                <h2 className="text-2xl font-semibold">{matchedService.title2}</h2>
                                {renderParagraphs(matchedService.title2Detail)}
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center lg:space-x-8 min-h-[50vh] gap-12">
                            <div className="lg:w-1/2 space-y-4 text-justify">
                                <h2 className="text-2xl font-semibold">{matchedService.title3}</h2>
                                {renderParagraphs(matchedService.title3Detail)}
                            </div>
                            <div className="lg:w-1/2">
                                <img
                                    src={matchedService.img3}
                                    alt={matchedService.title3}
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <h2 className="text-xl font-bold text-center">Service Not Found</h2>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default SubServices;
