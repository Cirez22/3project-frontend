import React from 'react';




const AboutContent = () => {
    return (
        <header className="bg-white py-5">
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="display-1 fw-bolder text-dark mb-2" style={{fontSize:"200px"}}>About Us</h1>
                        </div>
                    </div>
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                            <p className="lead fw-normal text-dark-50 mb-4">
                                OJO helps people take legal actions over problems. <br/>
                                Let's imagine that a person has a problem then he posts it in OJO, and lawyers from all over the world can access that information and make a bid. If the person accepts that bid then the attorney should initiate legal action.
                            </p>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default AboutContent;