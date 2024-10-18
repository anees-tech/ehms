import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    const dropdownItems = [
        {
            title: 'How do I know if therapy is right for me?',
            content: 'Therapy can be helpful for anyone experiencing emotional distress, relationship challenges, stress, anxiety, or life transitions.'
        },
        {
            title: 'What can I expect during my first session?',
            content: 'In your first session, your therapist will get to know you and your goals for therapy, and you’ll work together to develop a plan.'
        },
        {
            title: 'What should I do if I can’t attend a session?',
            content: 'If you need to cancel or reschedule, it’s important to notify your therapist at least 24 hours in advance.'
        },
        {
            title: 'Are my sessions confidential?',
            content: 'Yes, therapy sessions are confidential with a few legal exceptions such as the risk of harm to yourself or others.'
        }
    ];

    return (
        <div className=" bg-gray-50 py-16">
            <h2 data-aos="zoom-in" className="text-center text-4xl font-bold">FAQs</h2>
            <div className="w-full max-w-7xl flex-col md:flex-row gap-10 flex justify-center mx-auto">
                <div data-aos="slide-right" className="w-full md:w-2/3 p-5">
                    <h2 className="text-xl md:text-2xl font-bold mb-5">Any Questions</h2>
                    <p className="text-gray-600 mb-8 ">
                        When deciding which charity to donate to, it's important to do your research and find one that aligns with your values and interests.
                    </p>

                    <div className="space-y-4">
                        {dropdownItems.map((item, index) => (
                            <div
                                key={index}
                                className={`border ${openIndex === index ? 'bg-orange-500 text-white' : 'bg-gray-100'} 
                                p-4 rounded-lg  transition-all`}

                            >
                                <div className="flex justify-between cursor-pointer items-center" onClick={() => toggle(index)}>
                                    <span className="text-base md:text-lg font-medium select-none"  >{item.title}</span>
                                    {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                                </div>
                                {openIndex === index && (
                                    <div className="mt-3 text-md">
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div data-aos="slide-left" className="w-full lg:w-1/2 p-5 hidden md:flex flex-col space-y-6 select-none">
                    <div className="relative">
                        <img
                            src="assets/faq_image_1.webp"
                            alt="FAQ Image 1"
                            className="absolute top-0 left-0 w-full h-screen-xl object-cover rounded-lg shadow-slate-400 shadow-lg"
                        />
                    </div>
                    <div className="relative">
                        <img
                            src="assets/faq_image_2.webp"
                            alt="FAQ Image 2"
                            className="absolute top-52 -left-8 h-48 md:h-64 object-cover rounded-lg shadow-md shadow-gray-400"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
