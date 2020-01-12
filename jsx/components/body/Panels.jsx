import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax, Background } from 'react-parallax';

export default class BigPanel extends React.Component{

	constructor(props){

		super(props);

	}

	render(){

		var mainClass = this.props.ltr + "-main";
		var mainImgClass = this.props.ltr + "-main-img";
		var secondaryImgClass = this.props.ltr + "-secondary-img";
		var contentClass = this.props.ltr + "content";
		var containerClass = this.props.ltr + "-parallax";
		var parallaxClass = "";
		if(containerClass == "ltr-parallax"){

			parallaxClass = "flip-img";

		}

		return <div className="story-container">
				<div className={mainClass}>
					<div className={mainImgClass}><img src={this.props.firstSrc} /></div>
					 <div className={secondaryImgClass}><Parallax bgImage={this.props.secondSrc} bgClassName={parallaxClass} strength={200} ><div className={containerClass} /></Parallax></div>
					<div className={contentClass}>{this.props.text}</div>
				</div>
		</div>

	}


}