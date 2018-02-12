import React from 'react';
import { Link } from 'react-router';

import modelDb from "../redux/db/charAutoDb.js";
import './marksName.scss';

class ChooseModel extends React.Component {
	getModels () {
		var filterChoodeMark = modelDb.char.filter((auto) => {return auto.mark == this.props.mark});
		var listModel = filterChoodeMark.map((auto, index) => 
			<div key = {index}>
			  <Link to={`/marks/${this.props.mark}/${auto.id}`}>
				  {++index} {auto.model}
				</Link>
			</div>);

		return listModel;
	}
	render(){
		return(
			<div className="marksName">
				<h1>Все модели выбранной категории</h1>
				{this.getModels()}
			</div>
		)
	}
}

class MarksName extends React.Component {
	render(){
		return(
			<div>
				<ChooseModel mark = {this.props.params.markAuto}/>
			</div>
		)
	}
}

module.exports = MarksName ;