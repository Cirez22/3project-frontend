import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthProvider from './context/AuthContext';
import PostProvider from './context/PostContext';

ReactDOM.render(
  <AuthProvider>
    <PostProvider>
    <App />
    </PostProvider>
  </AuthProvider>,
  document.getElementById('root')
);


reportWebVitals();
