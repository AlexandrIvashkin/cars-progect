import React from "react";
var connect = require("react-redux").connect;

import actions from "../../redux/action.js";

import "./itemCrud.scss"

class ItemCrud extends React.Component{
	constructor(props){
    	super(props);
    	this.editItems = this.editItems.bind(this);
  	}

  	editItems(e){
 		e.preventDefault();
		let id = this.refs.id.value;
		let heading = this.refs.heading.value;
		let text = this.refs.text.value;
		this.props.editItems( id, heading, text);
  	}
	getItemForm(item){
		
		var text = item.text;
		text = text.replace(/\s+/g,' ');

		return(
			<form onSubmit={this.editItems}>
				<input ref="id" type="hidden" defaultValue={item.id} />
				<p>Заголовок - </p>
				<textarea ref="heading" cols="70" rows="1" defaultValue ={item.heading}/>
				<p>Текст - </p>
				<textarea ref="text" cols="70" rows="30" defaultValue ={text}/><br/>
				<input type ="submit" value="Изменить"/>
			</form>
		)
	}

	render(){
		var dataItems = this.props.dataItems;
		dataItems = dataItems.items.filter((itemInform) => {return itemInform.id == this.props.params.id});
		return(
			<div className="itemCrud">
				{this.getItemForm(dataItems[0])}
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {dataItems : state.itemsReducer}
};

module.exports = connect(mapStateToProps, actions)(ItemCrud);