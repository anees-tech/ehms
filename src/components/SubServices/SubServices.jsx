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

    return (
        <div id='subService' className="min-h-screen h-full flex flex-col">
            <Navbar />
            <AboutHeroSection img={matchedService?.servicesName} h2={matchedService?.servicesTitle} />
            <div className="container mx-auto p-4 flex-1">
                {matchedService ? (
                    <div className="space-y-12 max-w-screen-lg mx-auto">
                        <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-8 min-h-[50vh]">
                            <div className="lg:w-1/2 space-y-4">
                                <h1 className="text-3xl font-bold">{matchedService.title1}</h1>
                                <p className="text-lg">{matchedService.title1Detail}</p>
                            </div>
                            <div className="lg:w-1/2">
                                <img
                                    alt={matchedService.title1}
                                    className="w-full h-auto rounded-lg shadow-lg"
                                    src={matchedService.img1}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center lg:space-x-8 min-h-[50vh]">
                            <div className="lg:w-1/2">
                                <img
                                    src={matchedService.img2}
                                    alt={matchedService.title2}
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="lg:w-1/2 space-y-4">
                                <h2 className="text-2xl font-semibold">{matchedService.title2}</h2>
                                <p className="text-lg">{matchedService.title2Detail}</p>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-8 min-h-[50vh]">
                            <div className="lg:w-1/2 space-y-4">
                                <h2 className="text-2xl font-semibold">{matchedService.title3}</h2>
                                <p className="text-lg">{matchedService.title3Detail}</p>
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