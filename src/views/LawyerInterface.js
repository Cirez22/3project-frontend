import React from 'react';
import Main from '../components/LawyerInterface/Main';
import Footer from '../components/LawyerInterface/Footer';
import NavBarInterface from '../components/LawyerInterface/NavBarInterface';
import MyPosts from '../components/LawyerInterface/MyPosts';


import "../styles/LawyerMain.css"

function Dash() {
    return (
        <div id="main">
            

                <NavBarInterface />


                <Main />
     
                
                <MyPosts/>


                <Footer/>
        </div>
    );
}



export default Dash;