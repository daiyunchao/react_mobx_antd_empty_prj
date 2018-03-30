import React from 'react';
import {Router, Route, IndexRoute} from 'react-router'
import Index from './ui/page/Index.js';


function RouterConfig({history}) {
  window.myHistory = history;
  let prex = "";
  return (
    <Router history={history}>
      <div>
        <Route path={prex + "/"} component={Index}/>
      </div>
    </Router>
  );
}

export default RouterConfig;
