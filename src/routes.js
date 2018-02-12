import React from 'react'
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from "./components/redux/reducers.js";

import Home from './components/home/home';
import Marks from './components/marks/marks';
import MarksName from './components/marks/marksName';
import MarkChar from './components/marks/markChar';
import Items from './components/items/items';
import Crud from './components/crud/crud';
import About from './components/about/about';
import Nav from './components/nav';

import AddAuto from './components/crud/cars/addAuto';
import HomeCrud from './components/crud/pages/homeCrud';
import AboutCrud from './components/crud/pages/aboutCrud';
import MarksCrud from './components/crud/cars/marksCrud';
import MarksList from './components/crud/cars/marksList';
import CharAuto from './components/crud/cars/charAuto';
import ItemsCrud from './components/crud/items/itemsCrud';
import ItemCrud from './components/crud/items/itemCrud';
import AddItems from './components/crud/items/addItems';

const store = createStore(reducers);

const history = syncHistoryWithStore(browserHistory, store);

export default () => (
  <div>
    <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path="/" component={ Nav }>
        <IndexRoute  component={ Home } />
        <Route path="marks"  >
          <IndexRoute component={ Marks } />
          <Route path=":markAuto" component={MarksName} />
          <Route path=":markAuto/:markId" component={MarkChar} />
        </Route> 
        <Route path="items" component={ Items } />
        <Route path="crud" >
          <IndexRoute component={Crud} />
          <Route path="marks" component={MarksCrud} />
          <Route path="addAuto" component={AddAuto} />
          <Route path="marksList/:markAuto" component={MarksList} />
          <Route path="charAuto/:char" component={CharAuto} />
          <Route path="home" component={HomeCrud} />
          <Route path="about" component={AboutCrud} />
          <Route path="itemsCrud" >
            <IndexRoute component={ItemsCrud} />
            <Route path=":id" component={ItemCrud} />
          </Route>
          <Route path="addItems" component={AddItems}/>
        </Route>
        <Route path="about" component={ About } />
      </Route>
    </Router>
    </Provider>
  </div>
)
