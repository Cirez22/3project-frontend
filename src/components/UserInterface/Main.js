import React from "react";

import "../../styles/LawyerMain.css"

function Main() {
    return (

                 <main  style={{marginTop:"68px"}}>
                    <div id="main" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light ">
                        <div className="col-md-5 p-lg-5 mx-auto my-5">
                            <h1 className="display-4 fw-normal"style={{marginTop:"80px"}}>USER INTERFACE</h1>
                            <p className="lead fw-normal">
                                This is the place to see your post status and create posts.
                            </p>
                            <a className="btn btn-outline-dark" href="#createpost" style={{marginRight:"10px"}}>Create Post</a>
                            <a className="btn btn-outline-dark" href="#posts" >My Posts</a>

                        </div>
                        <div className="product-device shadow-sm d-none d-md-block"></div>
                        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                    </div>
                </main>


    );
}



export default Main;

