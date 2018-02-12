import React from 'react';
import { Link } from 'react-router';

import marksDb from "../redux/db/marksDb";
import './marks.scss';

class Marks extends React.Component {
	getNameCars(cars){
		var nameCars = cars.marksData.map((car, index) => 
			<div key={car.mark} className="linkToAuto">
				<Link to={`/marks/${car.mark}`}>
					<div className={"marksImg"+(++index)}>
						<span className="markAuto">{car.mark}</span>
					</div>
				</Link>
			</div>)
		return nameCars; 
	}
	render(){
	  return(
	  	<div className="marks">
	  		<div>{this.getNameCars(marksDb)}</div>
		</div>
	  );
	}
}

module.exports = Marks ;