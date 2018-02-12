import React from "react";
import { Link } from 'react-router';
var connect = require("react-redux").connect;

import actions from "../../redux/action.js";
import charAutoDb from "../../redux/db/charAutoDb.js";
import './charAuto.scss'

class GetInDataAuto extends React.Component {
	constructor(props){
    	super(props);
    	this.editData = this.editData.bind(this);
  	}

	editData (e){
		e.preventDefault();
		let id = this.refs.id.value;
		let model = this.refs.model.value;
		let data = this.refs.data.value;
		let country = this.refs.country.value;
		let doors = this.refs.doors.value;
		let drive = this.refs.drive.value;
		let cpp = this.refs.cpp.value;
		let maxSpeed = this.refs.maxSpeed.value;
		let speedTo100 = this.refs.speedTo100.value;
		this.props.editAutoAction( id, model, data, country, doors, drive, cpp, maxSpeed, speedTo100);
	}

	getInDataFromId(id, chars) {
		var chooseModel = chars.char.filter((auto) => {
			return auto.id == id;
		})
		return chooseModel[0];
	}

	render(){
		var chooseModel = this.getInDataFromId(this.props.id, this.props.charAllAuto);
		return(
			<form onSubmit={this.editData}>
				<input ref="id" type="hidden" defaultValue={chooseModel.id} />
				<p>Модель - </p>
				<textarea ref="model" cols="50" rows="1" defaultValue ={chooseModel.model}/>
				<p>Дата произоводства - </p>
				<textarea ref="data" cols="50" rows="1" defaultValue ={chooseModel.data} />
				<p>Страна производитель - </p>
				<textarea ref="country" cols="50" rows="1" defaultValue ={chooseModel.country} />
				<p>Двери - </p>
				<textarea ref="doors" cols="50" rows="1" defaultValue ={chooseModel.doors} />
				<p>Привод</p>
				<textarea ref="drive" cols="50" rows="1" defaultValue ={chooseModel.drive} />
				<p>Коробка передачь</p>
				<textarea ref="cpp" cols="50" rows="1" defaultValue ={chooseModel.cpp} />
				<p>Максимальная скорость</p>
				<textarea ref="maxSpeed" cols="50" rows="1" defaultValue ={chooseModel.maxSpeed} />
				<p>Разгон до 100 км/ч</p>
				<textarea ref="speedTo100" cols="50" rows="1" defaultValue ={chooseModel.speedTo100} />
				<br/>
				<input type ="submit" value="Изменить"/>
			</form>
		)
	}
}

class СharAuto extends React.Component {
	render(){
		return(
			<div className="charAuto">
			  <h1>Изменить характеристика выбранной модели</h1>
			  <GetInDataAuto charAllAuto = {this.props.char} id= {this.props.params.char} editAutoAction = {this.props.editAutoAction}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {char : state.editAutoReducer}
};


module.exports = connect(mapStateToProps, actions)(СharAuto);
