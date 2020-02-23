import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import './Slider.css';
import slide1 from "../../../static/assets/images/slide1.jpg";
import slide2 from "../../../static/assets/images/slide2.jpg";
import slide3 from "../../../static/assets/images/slide3.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default class Slider extends Component {

  render() {

    return (
     <AutoplaySlider
      animation="foldOutAnimation"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={5000}
    >
      <div className="slide-img" data-src={slide1} />
      <div className="slide-img" data-src={slide2} />
      <div className="slide-img" data-src={slide3} />
    </AutoplaySlider>
    )
  }
}