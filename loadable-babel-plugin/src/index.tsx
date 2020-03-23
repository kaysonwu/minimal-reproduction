import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const Page = loadable(({ path }: any) => import(/* webpackChunkName: "pages/[request]" */ `@/pages/${path}`), {
  cacheKey: props => props.path
});

const App = () => {
  return (
    <Switch>
      <Route path="/user">
        <Page path="user" />
      </Route>
      <Route path="/">
        <Page path="home" />
      </Route>
      <Route path="*">
        <div>Not found!</div>
      </Route>
    </Switch>
  );
};

export default App;
