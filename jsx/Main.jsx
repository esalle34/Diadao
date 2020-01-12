import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';

class Page extends React.Component{

	constructor(props){

		super(props);

	}

	render(){

		return <div><Header /><Body /></div>;

	}

}

document.addEventListener('DOMContentLoaded', function(){

	ReactDOM.render(

			<Page var/>,
			document.getElementById('main')

		)

})