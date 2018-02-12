var redux = require("redux");

var homeAction = function( heading, text){
	return {
		type: "CHOOSE_HOME",
		heading,
		text
	}
};

var aboutAction = function( heading, text){
	return {
		type: "CHOOSE_ABOUT",
		heading,
		text
	}
};

var editAutoAction = function( id, model, data, country, doors, drive, cpp, maxSpeed, speedTo100 ){
	return {
		type: "GET_AUTO_CHAR",
		id, model, data, country, doors, drive, cpp, maxSpeed, speedTo100
	}
};

var addAuto = function( id, model, data, country, doors, drive, cpp, maxSpeed, speedTo100, mark ){
	return {
		type: "ADD_AUTO",
		id, model, data, country, doors, drive, cpp, maxSpeed, speedTo100,mark
	}
};

var editItems = function( id, heading, text){
	return {
		type: "EDIT_ITEMS",
		id, heading, text
	}
};

var addItem = function( heading, text ){
	return {
		type: "ADD_ITEMS",
		heading, text 
	}
};

module.exports = { homeAction, editAutoAction, addAuto, editItems, addItem, aboutAction};