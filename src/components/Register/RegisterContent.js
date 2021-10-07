import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router';

import "../../styles/Main.css"




function RegisterContent() {

  const history = useHistory();
  const { signUpUser } = useContext(AuthContext)
  const [user, setUser] = useState({
    email: '',
    password: '',
    role: ''
  })

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    signUpUser(user)
    if (user.role ==='USER') {
      alert('user')
      history.push('/userinterface');
    } else {
      history.push('/lawyerinterface')
    }
    setUser({
      email: '',
      password: '',
      role: ''
    })
  }

  return (
    <div>

      <section id="main" className="vh-100" >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ background: "transparent", border: "none" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" >Sign Up</p>

                      <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              value={user.email}
                              name='email'
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              placeholder="Email"
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              value={user.password}
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              placeholder="Password"
                              onChange={handleChange}
                              name='password'
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>

                          <select onChange={handleChange} name="role" className="form-select" aria-label="Default select example">
                            <option select=''>Role</option>
                            <option value="USER">User</option>
                            <option value="LAWYER">Lawyer</option>
                          </select>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button onClick={handleSubmit} type="button" className="btn btn-primary btn-lg">Sign Up</button>
                        </div>
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

export default RegisterContent;