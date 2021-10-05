import React from "react";

import "../../styles/LawyerMain.css"

function Main() {
    return (

                 <main  style={{marginTop:"68px"}}>
                    <div id="law" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-transparent " >
                        <div className="col-md-5 p-lg-5 mx-auto my-5" >
                            <h1 className="display-4 fw-normal" style={{marginTop:"150px"}}>LAWYER INTERFACE</h1>
                            <p className="lead fw-normal">
                                See post status and bid.
                            </p>
                            <a className="btn btn-dark" href="#post" >Posts</a>

                        </div>
                    </div>
                </main>


    );
}



export default Main;

