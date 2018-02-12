import aboutDb from '../db/aboutDb'

var aboutReducer = function(state = aboutDb, action) {
	switch (action.type) {
        case "CHOOSE_ABOUT":
        	console.log(state)
        	return Object.assign({}, state, {
        		heading: action.heading,
        		text: action.text
          
      		})
        default:
        	return state
    }
}


module.exports = aboutReducer;