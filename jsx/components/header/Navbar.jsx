import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazy-load';

export default class Navbar extends React.Component{
  
  
  constructor(props){

    super(props);

  }

  render(){

    return <nav className="navbar navbar-light justify-content-between">

            <a className="navbar-hamb" href="#"><span className="navbar-toggler-icon"></span></a>
            <LazyLoad><img id="logo" src="/img/assets/logo.png" /></LazyLoad>
            <button className="btn btn-action">Reserver</button>
</nav>

  }


}