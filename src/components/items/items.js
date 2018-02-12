import React from 'react';
import itemsDb from "../redux/db/itemsDb";

import "./items.scss";

import img1 from "../../img/items/img1.jpg";
import img2 from "../../img/items/img2.jpg";
import img3 from "../../img/items/img3.jpg";
import img4 from "../../img/items/img4.jpg";
import img5 from "../../img/items/img5.jpg";

class Items extends React.Component {
	
	getItems(itemsDb){
		var imgAll = [img1, img2, img3, img4, img5];
		var selectedItems = itemsDb.items.map((item, index) =>
			<div key={index} className="item">
				<h1>{item.heading}</h1>
				<div>
					<img src={imgAll[index]}/>
					{item.text}
				</div>
			</div>
			);
		return selectedItems;
	}

	render(){
		return(
		  <div>
		    <h1>Статьи по автомобилям</h1>
		    <div className="items">
		      {this.getItems(itemsDb)}
		    </div>
		  </div>
		);
	}
}

module.exports = Items ;