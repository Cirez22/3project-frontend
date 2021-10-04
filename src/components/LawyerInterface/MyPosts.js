import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import axios from 'axios';

function MyPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const response = await axios.get("http://localhost:5000/api/posts");
        setPosts(response.data);
    }, [])

    return (
        <div className='container'>
            <div className="row my-10">
                {
                    //map here
                    posts.map (post => (
                        <div key={post._id} className="col"style={{margin:'20px'}}>
                            <PostCard obj={post}/>
                        </div>  
                    ))
                }
            </div>
        </div>
    );
}



export default MyPosts;