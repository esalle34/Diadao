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

		var lpanel_fst_text = <div id="noel" className="littlepanel-txt panel-inv"><h4>Noël à la grée des landes</h4><p>Le Bien-Être s'invite à Noël</p><p className="panel-price">490 EUR</p><div className="panel-features"><p>2 personnes</p><p>1 nuitée</p></div></div>;
		var lpanel_snd_text = <div id="sylvestre" className="littlepanel-txt panel-inv"><h4>Réveillon de la saint-sylvestre</h4><p>Un séjour d'exception pour la fin de l'année à partager avec vos amis ou votre famille. Réservation jusqu'au 20/12/2017</p><p className="panel-price">1042 EUR</p><div className="panel-features"><p>2 personnes</p><p>1 nuitée</p></div></div>;
		var lpanel_thd_text = <div id="coffret" className="littlepanel-txt panel-inv"><h4>Coffrets Cadeaux</h4><ul><li>Séjour</li><li>Soins & Bien-Être</li><li>Gastronomie</li></ul><ul style={{ 'marginLeft': '24%'}}><li>Cabane d'exception</li><li>Chêque Cadeau</li></ul><p className="panel-price">48 EUR</p><div className="panel-features"><p className="panel-one-p">2 personnes</p></div></div>;

		return <main className="container"><LazyLoad once><BigPanel ltr="rtl" firstSrc="/img/assets/Shoot1-433-15.jpg" secondSrc="/img/assets/suite6-354-15.jpg" text={firstText}/></LazyLoad>
					 <LazyLoad once><BigPanel ltr="ltr" firstSrc="/img/assets/chambre22-123-15.jpg" secondSrc="/img/assets/YRshoot1-2322-15.jpg" text={secondText}/></LazyLoad>
					 <div className="main-container"><div className="row"><LittlePanel url="" img="/img/assets/offre1.jpg" text={lpanel_fst_text} /><LittlePanel url="" img="/img/assets/offre2.jpg" text={lpanel_snd_text} /><LittlePanel url="" img="/img/assets/offre3.jpg" text={lpanel_thd_text} /></div></div></main>;

	}

}