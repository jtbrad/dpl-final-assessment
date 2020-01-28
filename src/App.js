import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';
import Character from './components/Character';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

const App = () => (
  <Container >
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/character" component={Character} />
        <Route component={PageNotFound} />
    </Switch>
  </Container>
);

export default App;
