import React from 'react';
import { Router, Route, browserHistory, IndexRoute, Link} from 'react-router';
var connect = require("react-redux").connect;

import actions from "../redux/action.js";

import "./home.scss";

import homeImg1 from "../../img/homeImg/homeImg1.jpg";
import homeImg2 from "../../img/homeImg/homeImg2.jpg";
import homeImg3 from "../../img/homeImg/homeImg3.jpg";
import homeImg4 from "../../img/homeImg/homeImg4.jpg";
import homeImg5 from "../../img/homeImg/homeImg5.jpg";

class Home extends React.Component {
  constructor(props){
    super(props);
    this.sizeImg = this.sizeImg.bind(this);
  }

  sizeImg(e){
    e.target.className == "imgMin" ? e.target.className = "imgMax" : e.target.className = "imgMin";
  }

  render(){
    return(
    <div>
      <h1>{this.props.homeCrud.heading}</h1>
      <p className = "homeText" >{this.props.homeCrud.text}</p>
      <div className="homeImg">
        <div><img src={homeImg1} className="imgMin" onClick={this.sizeImg}/></div>
        <div><img src={homeImg2} className="imgMin" onClick={this.sizeImg}/></div>
        <div><img src={homeImg3} className="imgMin" onClick={this.sizeImg}/></div><br />
        <div><img src={homeImg4} className="imgMin" onClick={this.sizeImg}/></div>
        <div><img src={homeImg5} className="imgMin" onClick={this.sizeImg}/></div>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {homeCrud: state.homeReducer}
};

module.exports = connect(mapStateToProps, actions)(Home);


