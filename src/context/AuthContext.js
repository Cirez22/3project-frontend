import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import apiHelper from "../apiHelper/apiHelper";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [ loggedIn, setLoggedIn] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;
  // const [admin, setAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    google: false,
    facebook: false,
  })

  useEffect(() => {
    isAdmin();
    checkLogged();
    getAllUsers();
  }, [])
  
  const getAllUsers = async (user) => {
    // .env file missing -> add REACT_APP_API_URL
    const response = await axios.get(apiUrl + '/auth');
    setUsers(response.data);
  }

  const loginUser = async (user) => {

    const response = await axios.post(apiUrl +  '/auth/login', user);
    const { data } = response;
    console.log(data);
    setUser(data.user);
    localStorage.setItem('jwtreservespot', JSON.stringify({user: data.user, token: data.token}));
    setLoggedIn(true);
    isAdmin();
  }

  const checkLogged = () => {
    const tokenValue = localStorage.getItem('jwtreservespot');
    return tokenValue ? setLoggedIn(true) : setLoggedIn(false); 
  }

  const isAdmin = () => {
    const token = JSON.parse(localStorage.getItem('jwtreservespot'));
    console.log("USER", token);

  }

  const logOutUser = () => {
    localStorage.removeItem('jwtreservespot');
    setLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        loggedIn,
        setUser,
        loginUser,
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider