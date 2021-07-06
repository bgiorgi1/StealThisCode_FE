import React from 'react';
import '../App.css';
// import './Welcome.css';
// import image from '../Assets/hero.jpg'

// const image = '../Assets/hero.jpg'

const Welcome = () => {
    return (
        <div className="container-fluid">
            {/* <img className="hero" src={image} alt="Cinque Terre" ></img> */}
        <div className="jumbotron jumbotron-fluid bg">
        <h1 className="display-4">Stealth Code</h1>
        <p className="lead">Cut and paste code for all your front-end needs</p>
        <hr className="my-4"/>
        <p>Start contributing today!</p>
        <p className="lead">
          <a className="btn btn-outline-warning btn-block mt-4" href="/Signup" role="button">Sign Up</a>
        </p>
        
      </div>
      </div>
    )
}

export default Welcome;