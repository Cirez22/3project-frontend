import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import axios from 'axios';

function MyPosts() {
    const [posts, setPosts] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(async () => {
        const response = await axios.get(apiUrl + '/posts');
        setPosts(response.data);
    }, [])

    return (
        <div id="post" className='container'>
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