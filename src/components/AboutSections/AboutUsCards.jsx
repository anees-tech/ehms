import React from 'react';

const AboutUsCards = () => {


    const cardsList = [
        {
            title: 'Our',
            span: "Vision",
            content: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply du typesetting industry. Lorem Ipsum has been.",
        },
        {
            title: 'Our',
            span: "Mission",
            content: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply du typesetting industry. Lorem Ipsum has been.",
        },
        {
            title: 'Our',
            span: "Values",
            content: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply du typesetting industry. Lorem Ipsum has been.",
        },

    ]

    return (
        <section className="py-10" id='aboutCards'>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
                {
                    cardsList.map((item, index) => {
                        return (
                            <>
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <h2 className="text-2xl font-bold mb-4">
                                        {item.title} <span className="text-[#FB8501]">{item.span}</span>
                                    </h2>
                                    <p className="text-gray-600 mb-6">{item.content}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default AboutUsCards;
