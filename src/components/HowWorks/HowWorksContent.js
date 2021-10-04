import React from 'react';




const HowWorksContent = () => {
    return (
        <section>
            <header className="bg-white py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-1 fw-bolder text-dark mb-2" style={{ fontSize: "200px" }}>How it Works</h1>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                            <p className="lead fw-normal text-dark-50 mb-4">
                            For example, a celiac person who is on vacation goes to eat at a restaurant. A Gluten Free plate is requested. 1 hour later he gets sick because that dish had gluten. It is there where he enters OJO and creates a complain so that a lawyer can initiate legal action on the restaurant
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </section>

    );
};

export default HowWorksContent;