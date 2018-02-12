import React from "react";
import { Link} from 'react-router';

import marksDb from "../../redux/db/marksDb.js"

import bmw from '../../../img/crud/marks/bmw.png';
import bugatti from '../../../img/crud/marks/bugatti.png';
import dodge from '../../../img/crud/marks/dodge.png';
import lamboghini from '../../../img/crud/marks/lamboghini.png';
import lotus from '../../../img/crud/marks/lotus.png';
import mercedes from '../../../img/crud/marks/mercedes.png';
import rolls from '../../../img/crud/marks/rolls.png';
import tesla from '../../../img/crud/marks/tesla.png';

import "./marksCrud.scss";

class marksCrud extends React.Component {

	render(){
  		var marksName = marksDb.marksData.map(( index ) => 
    		index.mark.charAt(0).toUpperCase()+index.mark.substring(1));
  		var marksUrl = marksDb.marksData.map(( index ) => index.mark);
    	return(	
		<div className="marksCrud">
			<div>
				<Link to={`/crud/marksList/${marksUrl[0]}`}>
				  <img src={bmw} />
				  <p>{marksName[0]}</p>
				</Link>
			</div>
			<div>
			  <Link to={`/crud/marksList/${marksUrl[1]}`}>
				  <img src={bugatti} />
				  <p>{marksName[1]}</p>
				</Link>
			</div>
			<div>
				<Link to={`/crud/marksList/${marksUrl[2]}`}>
				  <img src={dodge} />
				  <p>{marksName[2]}</p>
				</Link>
			</div>
			<div>
			  <Link to={`/crud/marksList/${marksUrl[3]}`}>
				  <img src={lamboghini} />
				  <p>{marksName[3]}</p>
				</Link>
			</div>
			<div>
				<Link to={`/crud/marksList/${marksUrl[4]}`}>
				  <img src={lotus} />
				  <p>{marksName[4]}</p>
				</Link>
			</div>
			<div>
			  <Link to={`/crud/marksList/${marksUrl[5]}`}>
				  <img src={mercedes} />
				  <p>{marksName[5]}</p>
				</Link>
			</div>
			<div>
			  <Link to={`/crud/marksList/${marksUrl[6]}`}>
				  <img src={rolls} />
				  <p>{marksName[6]}</p>
				</Link>
			</div>
			<div>
				<Link to={`/crud/marksList/${marksUrl[7]}`}>
				  <img src={tesla} />
				  <p>{marksName[7]}</p>
				</Link>
			</div>
		</div>
		)
	}
}

export default marksCrud;