import React from "react";
import { Link } from 'react-router';

import modelDb from "../../redux/db/modelAutoDb.js";
import './marksList.scss';

class ChooseModel extends React.Component {
	getModels () {
		var listModel = modelDb[this.props.model].map((name, index) => 
			<tr key= {name+index}>
				<td>
				  <Link to={`/crud/charAuto/${name.id}`}>
					  {++index} {name.model}
					</Link>
				</td>
			</tr>);

		return listModel;
	}
	render(){
		return(
			<div className="marksList">
				<h1>Все модели выбранной категории</h1>
					<table>
						<tbody>
							{this.getModels()}
						</tbody>
					</table>
			</div>
		)
	}
}
class MarksList extends React.Component {
	render(){
		return(
			<div>
				<ChooseModel model = {this.props.params.markAuto}/>
			</div>
		)
	}
}

export default MarksList;