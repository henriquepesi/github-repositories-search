import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <HashRouter>
      {/** Switch garante que apenas uma pagina seja exibica */}
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </HashRouter>
  );
}
