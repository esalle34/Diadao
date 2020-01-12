import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazy-load';
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    ><span><i className="fa fa-angle-right"></i></span>
</div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    ><span><i className="fa fa-angle-left"></i></span>
</div>
  );
}

export default class Carousel extends React.Component{

	constructor(props){

		super(props);
		this.state = { view : "" };

	}


	render(){

		const settings = {
      infinite: true,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      lazyLoad: true,
      swipeToSlide: true,

       responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            speed: 500,
            swipeToSlide: true,
            infinite: true,
            lazyLoad: true,

          }
        },
        ]
    };

		return <Slider {...settings}>
          <div>
            <div className="abv-container">
              <img className="abv-carousel" src="/img/assets/natural_slowlife.png"/>
              <div className="abv-text"><p>Un temps pour retrouver, dans la nature,</p><p> l'essence même du bien-être</p>
              <a className="btn btn-decouverte">Decouvrir</a></div>
              <div className="contact-container"><p className="contact">tel : +33 (0)2 99 08 50 50 • Resa.Hotel@Yrna.com</p></div>
            </div>
            <img src="/img/assets/header.jpg"/>
          </div>
          <div>
            <div className="abv-container">
              <img className="abv-carousel" src="/img/assets/natural_slowlife.png"/>
              <div className="abv-text"><p>Un temps pour retrouver, dans la nature,</p><p> l'essence même du bien-être</p>
              <a className="btn btn-decouverte">Decouvrir</a></div>
              <div className="contact-container"><p className="contact">tel : +33 (0)2 99 08 50 50 • Resa.Hotel@Yrna.com</p></div>
            </div>
            <img src="/img/assets/header2.jpg"/>
          </div>
        </Slider>;


	}

}