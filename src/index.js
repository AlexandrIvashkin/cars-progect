import React from 'react';
import { Router, Route, browserHistory,} from 'react-router';
import ReactDOM  from 'react-dom';
import AppRouter from './routes';

import Nav from './components/nav';

ReactDOM.render(
  <div>
      {AppRouter()}
  </div>,
  document.getElementById('app')
  );
