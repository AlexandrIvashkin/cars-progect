import React from 'react';
var connect = require("react-redux").connect;
import actions from "../redux/action.js";

class About extends React.Component {
	render(){
		return(
		  <div>
		    <h1>{this.props.aboutCrud.heading}</h1>
		    <div>{this.props.aboutCrud.text}</div>
		  </div>
		);
	}
}

function mapStateToProps(state) {
  return {aboutCrud: state.aboutReducer}
};

module.exports = connect(mapStateToProps, actions)(About);