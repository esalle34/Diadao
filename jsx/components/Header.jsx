import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './header/Navbar';
import Carousel from './header/Carousel';

export default class Header extends React.Component{

	constructor(props){

		super(props);

	}

	render(){

		return <header><Navbar /><Carousel /></header>;

	}


}