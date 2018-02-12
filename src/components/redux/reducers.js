import React from 'react'
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import homeReducer from './reducers/homeReducer.js';
import editAutoReducer from './reducers/editAutoReducer.js';
import addAutoReducer from './reducers/addAutoReducer.js';
import itemsReducer from './reducers/itemsReducer.js';
import aboutReducer from './reducers/aboutReducer.js';

export default combineReducers({
	homeReducer,
	editAutoReducer,
	addAutoReducer,
	itemsReducer,
	aboutReducer,
	routing: routerReducer
})