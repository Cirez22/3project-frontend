import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";


import "../../styles/Post.css"

import { useHistory } from 'react-router';
// import { loginUserToApi } from '../../services/authService'


function TextLogin() {

  const history = useHistory();
  const {loginUser} = useContext(AuthContext)
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit =  (event) => {
    event.preventDefault();
    loginUser(user)
    setUser({
      email: '',
      password: ''
    })
    history.push('/userinterface')



    // if user.role == 'USER' history.push to user view
    // else history.push to user admin

    // window.location.reload();
    
    // history.push('/')
  }




  return (
    <div>

      <section id="posts" className="vh-100" >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ background: "transparent", border: "none" }}>
                <div className="card-body p-xs-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" >Login</p>

                      <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input 
                              type="email" 
                              id="form3Example1c" 
                              className="form-control"
                              placeholder="Email"
                              value={user.email}
                              onChange={handleChange}
                              name="email"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              placeholder="Password"
                              value={user.password}
                              onChange={handleChange}
                              name="password"
                            />
                          </div>
                        </div>

                        <Link to="/userdash">
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button onClick={handleSubmit} type="button" className="btn btn-primary btn-lg">Login</button>
                          </div>
                        </Link>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default TextLogin;