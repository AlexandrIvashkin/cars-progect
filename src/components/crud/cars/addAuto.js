import React from "react";
var connect = require("react-redux").connect;

import marksDb from "../../redux/db/marksDb";
import actions from "../../redux/action.js";
import "./addAuto.scss";

class AddAuto extends React.Component {
    constructor(props){
    super(props);
    this.addAuto = this.addAuto.bind(this);
  }

  addAuto(e){
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
      let mark = this.refs.mark.value;
      this.props.addAuto( id, model, data, country, doors, drive, cpp, maxSpeed, speedTo100, mark );
  }

  getAllmarksName(){
    var marksName = marksDb.marksData.map((cars, index) => <option key={index}>{cars.mark}</option>);
    return marksName;
  }

	render(){
		return(
			<div className="addAuto">
				<h1>Введите характеристики автомобиля.</h1>
				<form onSubmit={this.addAuto}>
          <div>Марка автомобиля</div>
          <select size="1" ref="mark">
            {this.getAllmarksName()}
          </select>
  				<div>Модель автомобиля</div>
  				<textarea ref="model" cols="50" rows="1" /><br/>
  				<div>Дата изготовления</div>
  				<textarea ref="data" cols="50" rows="1" /><br/>
					<div>Страна производитель</div>
  				<textarea ref="country" cols="50" rows="1" /><br/>
  				<div>Количество дверей</div>
  				<textarea ref="doors" cols="50" rows="1" /><br/>
  				<div>Привод</div>
  				<textarea ref="drive" cols="50" rows="1" /><br/>
					<div>Коробка передач</div>
  				<textarea ref="cpp" cols="50" rows="1" /><br/>
  				<div>Максимальная скорость</div>
  				<textarea ref="maxSpeed" cols="50" rows="1" /><br/>
  				<div>Время разгона до 100 км/ч</div>
  				<textarea ref="speedTo100" cols="50" rows="1"  /><br/>
          <input ref="id" type="hidden" value="xm234jq" />
					<input type="submit" value="Изменить" />
  			</form>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {say: state}
};

module.exports = connect(mapStateToProps, actions)(AddAuto);




