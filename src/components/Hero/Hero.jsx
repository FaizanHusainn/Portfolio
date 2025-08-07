import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation3.json'; // adjust the path accordingly
import './Hero.css';

const Hero = () => {
  return (
    <section id="Homme" className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experience that Inspire</h2>
        <p>
          Transforming Ideas into Seamless and Visually Stunning Web Solution
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./react.svg" alt="" />
          </div>

          {/* Lottie animation replaces profile image */}
          <Lottie animationData={animationData} style={{ width: 400, height: 400 }} loop={true} />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./NextJS.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./js.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./html.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./spring-logo.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
