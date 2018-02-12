import homeDb from '../db/homeDb'

var homeReducer = function(state = homeDb, action) {
	switch (action.type) {
        case "CHOOSE_HOME":
        	return Object.assign({}, state, {
        		heading: action.heading,
        		text: action.text
          
      		})
        default:
        	return state
    }
}


module.exports = homeReducer;