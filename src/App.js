import { BrowserRouter, Switch, Route } from "react-router-dom";

// import React, { useEffect, useState } from 'react';
import HomeView from './views/HomeView';
import Login from './views/Login';
import Register from '../src/views/Register';
import UserDash from './views/UserDash';
import Main from "./components/UserInterface/Main";
import LawyerInterface from "./views/LawyerInterface";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
// import ErrorView from "./views/ErrorView";




function App() {
  const { loggedIn } = useContext(AuthContext);



  return (

    <div>
      <BrowserRouter>
        <Switch>
        { loggedIn ? (
          <>
            <Route exact path="/userinterface" component={UserDash} />
            <Route exact path="/lawyerinterface" component={LawyerInterface} />
            <Route exact path="/main" component={Main} />
          </>
        ) : (
          <>
            <Route exact path="/" component={HomeView} />
            {/* <Route exact path="**" component={HomeView} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

          </>
        )}
        {/* <Route exact path="**" component={ErrorView} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
