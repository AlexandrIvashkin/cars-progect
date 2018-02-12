import React from "react";
var connect = require("react-redux").connect;
import { Link } from 'react-router';

import actions from "../../redux/action.js";

import './aboutCrud.scss'

class AboutCrud extends React.Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
      let heading = this.refs.heading.value;
      let text = this.refs.text.value;
      this.props.aboutAction( heading, text );
	}

  render(){

  	return(
  		<div className="aboutCrud">
        <h1>Изменить текст на странице</h1>
  			<form onSubmit={this.handleSubmit}>
  				<textarea ref="heading" cols="100" rows="3" defaultValue ={this.props.aboutCrud.heading} /><br/>
  				<textarea ref="text" cols="100" rows="30" defaultValue ={this.props.aboutCrud.text} /><br/>
  				<input type="submit" value="Изменить" />
  			</form>
  		</div>)
  }
} 

function mapStateToProps(state) {
  return {aboutCrud: state.aboutReducer}
};

module.exports = connect(mapStateToProps, actions)(AboutCrud);