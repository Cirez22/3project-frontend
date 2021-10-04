import React, { useContext, useEffect } from 'react';
import { PostContext } from "../../context/PostContext";

import "../../styles/Post.css"




function MyPosts({match}) {

    const {getPostById,post} = useContext(PostContext)
    // const {id} = match.params;


    useEffect(() => {
        // getPostById(id);
    })


    return (
        <div>

            <main  >
                <div id="posts" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light ">

                    <div className="container" style={{ marginLeft: "40px" }}>
                        <div className="row">
                            <div className="col-sm">
                                <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "80%", marginRight: "10px" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">

                                            {/* <h1>{post.title}</h1> */}
                                            {/* <p>{post.description}</p> */}
                                            <p>Bid</p>
                                            <button type="submit" className="btn btn-outline-success" style={{ marginRight: "10px" }}>Accept</button>
                                            <button type="submit" className="btn btn-outline-danger">Decline</button>

                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "80%", marginRight: "10px" }}>
                                    <div className="card-body">
                                        <div className="card-title">

                                            <h1>Title</h1>
                                            <p>Description</p>
                                            <p>Bid</p>
                                            <button type="submit" className="btn btn-outline-success" style={{ marginRight: "10px" }}>Accept</button>
                                            <button type="submit" className="btn btn-outline-danger">Decline</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "80%", marginRight: "10px" }}>
                                    <div className="card-body">
                                        <div className="card-title">

                                            <h1>Title</h1>
                                            <p>Description</p>
                                            <p>Bid</p>
                                            <button type="submit" className="btn btn-outline-success" style={{ marginRight: "10px" }}>Accept</button>
                                            <button type="submit" className="btn btn-outline-danger">Decline</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>


        </div>
    );
}



export default MyPosts;