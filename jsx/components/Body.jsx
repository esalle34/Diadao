import React from 'react';
import ReactDOM from 'react-dom';
import BigPanel from './body/Panels';
import LittlePanel from './body/LittlePanel';
import LazyLoad from "react-lazyload";

export default class Body extends React.Component{
	
	constructor(props){

		super(props);


	}

	render(){

		var firstText = <div><p className="hour">9:23</p><h3 className="story">Un doux Réveil</h3><p className="story">Laissez la nature vous</p><p className="story">réveiller tout en douceur</p></div>;
		var secondText = <div><p className="hour">11:07</p><h3 className="story"><p className="story">Détente.</p><p className="story">Relaxation.</p><p className="story">Silence.</p></h3><p className="story">Se ressourcer, se retrouver...</p><p className="story">Un rituel pour une douce</p><p className="story">entrée en matière</p></div>;

		return <main><LazyLoad once><BigPanel ltr="rtl" firstSrc="/img/assets/Shoot1-433-15.jpg" secondSrc="/img/assets/suite6-354-15.jpg" text={firstText}/></LazyLoad>
					 <LazyLoad once><BigPanel ltr="ltr" firstSrc="/img/assets/chambre22-123-15.jpg" secondSrc="/img/assets/YRshoot1-2322-15.jpg" text={secondText}/></LazyLoad>
					 <div className="main-container container"><div className="row"><LittlePanel url="" img="/img/assets/offre1.jpg"/><LittlePanel url="" img="/img/assets/offre2.jpg"/><LittlePanel url="" img="/img/assets/offre3.jpg"/></div></div></main>;

	}

}