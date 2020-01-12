import React from "react";
import ReactDOM from "react-dom";

export default class LittlePanel extends React.Component{
	

	constructor(props){

		super(props);

	}

	render(){


		return <div className="col-sm-4 little-panel"><div className="abv-little-panel"><img src={this.props.img}/><a className="btn btn-infos" href={this.props.url} >En savoir plus</a></div></div>

	}


}