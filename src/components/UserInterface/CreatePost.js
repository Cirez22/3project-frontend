import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function CreatePost() {

    const [newpost, setNewPost] = useState({
        title: '',
        description: ''
    });

    useEffect(() => {

    }, [])

    const handleChange = (event) => {
        console.log(newpost)
        setNewPost({
            ...newpost,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/api/posts/post', newpost);
        setNewPost({
            title: '',
            description: ''
        });
    }

    return (


        < main >
            <div id="createpost" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">

                    <h3 className="display-4 fw-normal">Create Post</h3>

                    <form id="form" >

                        
                        <div className="form-outline mb-2 w-10">
                            <textarea className="form-control" id="form4Example3" rows="1"
                                value={newpost.title}
                                onChange={handleChange}
                                name="title"
                                type='text'
                                placeholder="Title">
                            </textarea>
                        </div>
                        <div className="form-outline mb-4 ">
                            <textarea className="form-control" id="form4Example3" rows="4"
                                value={newpost.description}
                                onChange={handleChange}
                                name='description'
                                type='text'
                                placeholder="Information"
                            >

                            </textarea>
                        </div>

                        {/* <Link to="/worksview"> */}
                            <button onClick={handleSubmit} type="submit" className="btn btn-success btn-block mb-4" >
                                Post
                            </button>
                        {/* </Link> */}

                    </form>

                </div>
            </div>
        </main >

    );
}



export default CreatePost;