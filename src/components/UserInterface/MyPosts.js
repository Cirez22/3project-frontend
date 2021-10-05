import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PostCard from './PostCard';


import "../../styles/Post.css"
import { PostContext } from '../../context/PostContext';




function MyPosts({ match }) {
    
    const {posts} = useContext(PostContext) 
    console.log(posts)
    
    return (
        <div>

            <main  >
                <div id="posts" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light ">


                    <div className="row my-10">
                        {
                            //map here
                            posts.map(post => (
                                <div key={post._id} className="col" style={{ margin: '20px' }}>
                                    <PostCard obj={post} />
                                </div>
                            ))
                        }
                    </div>

                </div>


            </main>


        </div>
    );
}



export default MyPosts;