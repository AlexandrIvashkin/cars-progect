import React from "react";
import './markChar.scss';

import charAutoDb from "../redux/db/charAutoDb.js";

function getInDataAuto(id) {
	var chooseModel = getInDataFromId(id);
	return(
	<div>
		<table>
			<tbody>
				<tr>
					<td>Модель -</td>
					<td>{chooseModel.model}</td>
				</tr>
				<tr>
					<td>Дата произоводства -</td>
					<td>{chooseModel.data}</td>
				</tr>
				<tr>
					<td>Страна производитель -</td>
					<td>{chooseModel.country}</td>
				</tr>
				<tr>
					<td>Двери -</td>
					<td>{chooseModel.doors}</td>
				</tr>
				<tr>
					<td>Привод -</td>
					<td>{chooseModel.drive}</td>
				</tr>
				<tr>
					<td>Коробка передач -</td>
					<td>{chooseModel.cpp}</td>
				</tr>
				<tr>
					<td>Максимальная скорость -</td>
					<td>{chooseModel.maxSpeed}</td>
				</tr>
				<tr>
					<td>Разгон до 100 км/ч -</td>
					<td>{chooseModel.speedTo100}</td>
				</tr>
			</tbody>
		</table>
	</div>
	)
}

function getInDataFromId(id) {
	var chooseModel = charAutoDb.char.filter((auto) => {
		return auto.id == id;
	})
	return chooseModel[0];
}

class MarkChar extends React.Component {
	render(){
		return(
			<div className="markChar">
			  <h1>Характеристики выбранной модели</h1>
			  {getInDataAuto(this.props.params.markId)}
			</div>
		)
	}
}

module.exports = MarkChar;