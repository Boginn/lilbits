import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useEffect } from 'react';

import { Logo } from './components';
import { Content, Order } from './pages';
import colours from './data/colours';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = colours.background;
    document.body.style.fontFamily = 'Roboto, sans-serif';
    localStorage.clear();
  });

  //TODO Style Dates better
  return (
    <>
      <Router>
        <Logo></Logo>
        {/* <Navigation /> */}
        <Switch>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/">
            <Content />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
