import React from 'react';
import Main from '../components/UserInterface/Main';
import Footer from '../components/UserInterface/Footer';
import NavBarInterface from '../components/UserInterface/NavBarInterface';
import MyPosts from '../components/UserInterface/MyPosts';
import CreatePost from '../components/UserInterface/CreatePost';




function Dash() {
    return (
        <div>
            <NavBarInterface />
            <Main />
            <CreatePost />
            <MyPosts />
            <Footer />
        </div>
    );
}



export default Dash;