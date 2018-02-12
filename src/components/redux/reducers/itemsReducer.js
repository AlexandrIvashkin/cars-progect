import itemsDb from '../db/itemsDb'

var itemsReducer = function(state = itemsDb, action) {
	switch (action.type) {
        case "EDIT_ITEMS":
            for( let i = 0; i < state.items.length; i++)
            {
                if(state.items[i].id == action.id){
                    state.items[i].id = action.id;
                    state.items[i].heading = action.heading;
                    state.items[i].text = action.text;
                }
            }
        	Object.assign({}, state);

        	return state

        case "ADD_ITEMS":    

            Object.assign({}, state.items.push(
                {
                    id: (state.items.length+1).toString(),
                    heading: action.heading,
                    text: action.text
                })
            )
            return state           
        default:
        	return state
    }
}

module.exports = itemsReducer;