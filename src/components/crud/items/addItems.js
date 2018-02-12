import React from "react";
var connect = require("react-redux").connect;

import "./addItems.scss";
import actions from "../../redux/action.js";

class AddItems extends React.Component {
    constructor(props){
    super(props);
    this.formAddItems = this.formAddItems.bind(this);
  }

  formAddItems(e){
    e.preventDefault();
      let heading = this.refs.heading.value;
      let text = this.refs.text.value;
      this.props.addItem( text, heading);
  }
	render(){
		return(
			<div className="addItems">
				<h1>Введите текст статьи.</h1>
				<form onSubmit={this.formAddItems}>
	  				<div>Заголовок статьи</div>
	  				<textarea ref="heading" cols="70" rows="1" /><br/>
	  				<div>Текст статьи</div>
	  				<textarea ref="text" cols="70" rows="30" /><br/>
					<input type="submit" value="Изменить" />
  				</form>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {item: state.itemsReducer}
};

module.exports = connect(mapStateToProps, actions)(AddItems);