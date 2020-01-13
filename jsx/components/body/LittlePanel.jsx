import React from "react";
import ReactDOM from "react-dom";

export default class LittlePanel extends React.Component{
	

	constructor(props){

		super(props);
		this.onClick = this.onClick.bind(this);

	}

	onClick(event){

				event.target.parentNode.classList.remove("abv-little-panel");
				event.target.parentNode.classList.add("abv-little-panel-nobg");
				event.target.parentNode.childNodes[1].classList.remove("panel-inv");
				event.target.parentNode.childNodes[1].classList.add("panel-vis");
				event.target.style.display = "none";


	}

	render(){

		return <div className="col-sm-4 little-panel"><div className="abv-little-panel"><img src={this.props.img}/>{this.props.text}<button className="btn btn-infos" onClick={this.onClick} href={this.props.url} >En savoir plus</button></div></div>

	}


}