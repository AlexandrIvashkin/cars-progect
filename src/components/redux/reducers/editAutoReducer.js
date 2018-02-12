import charAutoDb from '../db/charAutoDb';

var editAutoReducer = function(state = charAutoDb, action) {
	switch (action.type) {
        case "GET_AUTO_CHAR":
            for( let i = 0; i < state.char.length; i++)
            {
                if(state.char[i].id == action.id){
                    state.char[i].id = action.id;
                    state.char[i].model = action.model;
                    state.char[i].data = action.data;
                    state.char[i].country = action.country;
                    state.char[i].doors = action.doors;
                    state.char[i].drive = action.drive;
                    state.char[i].cpp = action.cpp;
                    state.char[i].maxSpeed = action.maxSpeed;
                    state.char[i].speedTo100 = action.speedTo100;
                }
            }

        	Object.assign({}, state)
        	console.log(state)
        	return state 
        default:
        	return state
    }
}


module.exports = editAutoReducer;
