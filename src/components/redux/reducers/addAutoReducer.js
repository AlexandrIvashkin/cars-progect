import charAutoDb from '../db/charAutoDb';

var addAutoReducer = function(state = charAutoDb.char, action) {
	switch (action.type) {
        case "ADD_AUTO":
            console.log(state);   	
             Object.assign({}, state.push(
        		{
        			id: action.id,
        			model: action.model,
                    data: action.data,
                    country: action.model,
                    doors: action.doors,
                    drive: action.drive,
                    cpp: action.cpp,
                    maxSpeed: action.maxSpeed,
                    speedTo100: action.speedTo100,
                    mark: action.mark
        		})
          	);
            return state;  		
        default:
        	return state
    }
}


module.exports = addAutoReducer;