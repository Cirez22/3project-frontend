import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const PostContext = createContext({});

const PostProvider = ({children}) => {
  const apiUrl = process.env.REACT_APP_API_URL
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost();
  }, [])

  const getPost = async () => {
    const response = await axios.get(`${apiUrl}/createpost`);
    setPost(response.data);
  }

  const createPost = async (obj) => {
    obj.attendees = '6151e1408bd8b70748f8a2f0';
    setPost([obj, ...post]);
    const response = await axios.post(`${apiUrl}/post/post`, obj);
  }

  return (
    <PostContext.Provider
      value={{
        post,
        setPost,
        createPost,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

export default PostProvider
