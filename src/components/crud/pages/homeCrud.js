import React from "react";
var connect = require("react-redux").connect;
import { Link } from 'react-router';

import actions from "../../redux/action.js";

import './homeCrud.scss'

class HomeCrud extends React.Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
      let heading = this.refs.heading.value;
      let text = this.refs.text.value;
      this.props.homeAction( heading, text );
	}

  render(){
  	console.log(this.props.homeCrud)
  	return(
  		<div className="homeCrud">
        <h1>Изменить текст на главной странице</h1>
  			<form onSubmit={this.handleSubmit}>
  				<textarea ref="heading" cols="100" rows="3" defaultValue ={this.props.homeCrud.heading} /><br/>
  				<textarea ref="text" cols="100" rows="30" defaultValue ={this.props.homeCrud.text} /><br/>
  				<input type="submit" value="Изменить" />
  			</form>
  		</div>)
  }
} 

function mapStateToProps(state) {
  return {homeCrud: state.homeReducer}
};

module.exports = connect(mapStateToProps, actions)(HomeCrud);