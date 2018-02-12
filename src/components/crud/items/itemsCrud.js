import React from "react";
import { Link } from 'react-router';

import "./itemsCrud.scss";
import itemsDb from "../../redux/db/itemsDb";

class ItemsCrud extends React.Component{
	getItems(){
		var itemsHeading = itemsDb.items.map((item, index) =>
			<div key={index}>
				<Link to={`crud/itemsCrud/${item.id}`}>
					{++index}. {item.heading}
				</Link>
			</div>
		)
		return itemsHeading;
	}
	render(){
		return(
			<div className="itemsCrud">
				{this.getItems(itemsDb)}
			</div>
		)
	}
}

export default ItemsCrud;