import React from 'react';

import '../../styles/HomeContent.css';


const HomeContent = () => {
    return (
        <header id="home" className=" py-5">
           
           <main  style={{marginTop:"10px"}}>
                    <div  className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center  ">
                        <div className="col-md-5 p-lg-5 mx-auto my-5">
                            <h1 className="display-1 fw-bolder text-dark mb-2" style={{fontSize:"200px"}}>OJO</h1>
                            <p className="lead fw-normal">
                                We help you find HELP!
                            </p>
                        </div>
                    </div>
                </main>


        </header>

    );
};

export default HomeContent;