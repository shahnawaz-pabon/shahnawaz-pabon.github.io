import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import './Slider.css';
import slide1 from "../../../static/assets/images/slide1.jpg";
import slide2 from "../../../static/assets/images/slide2.jpg";
import slide3 from "../../../static/assets/images/slide3.jpg";

import Typed from 'typed.js';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default class Slider extends Component {

  componentDidMount(){
    var typed = new Typed('#typed', {
      strings: ['Software Engineer,', 'Quick Learner,', 'Passionate about', 'solving problems,',
      'Love to play', 'with programming.'],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      startDelay: 500,
      cursorChar: '_',
      smartBackspace: true // Default value
    });
  }

  render() {

    return (
      <>
        
        <AutoplaySlider
          animation="foldOutAnimation"
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={5000}
          customContent={
            <>
              <div style={{
                position: "absolute",
                color: '#fff',
                textAlign: 'center',
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
                fontSize: '40px',
                fontFamily: 'Ubuntu',
                fontWeight: 'bold',
                letterSpacing: '6px',
                zIndex: 5
              }}>
                <p>SHAHNAWAZ HOSSAN</p>
                <p style={{
                  fontSize: '25px'
                }}><span id="typed"></span></p>
              </div>
              <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 3,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                top: 0
              }}></div>
            </>
            
          }
        >
          <div className="slide-img" data-src={slide1} alt="First Slide"/>
          <div className="slide-img" data-src={slide2} alt="Second Slide" />
          <div className="slide-img" data-src={slide3} alt="Third Slide" />
        </AutoplaySlider>
      </>
    )
  }
}