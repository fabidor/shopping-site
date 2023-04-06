import React from "react";
import {Link} from "react-router-dom";

const About = () => {
    return (
      <div className="App">
        <div className="aboutPage">
          <div className="heading">
            A Place to Buy Stuff!
          </div>
          <div className="description">
            This is a place where men buy things. Important things. I've been doing this work for a long time. A really really long time.
            I don't know why I keep doing it. My wife has left me. My children pretend that I don't exist. I think there's just something about it.
            A rush that comes from really connecting with the customer, yaknow?
          </div>
          <Link to="/shop">
            <div  className="movingButton">Check out our New Digs!</div>
          </Link>
        </div>
      </div>
    );
  }
  
  export default About;