import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Logo } from './components';
import { Home, Order } from './pages';

function App() {
  useEffect(() => {
    //  localStorage.clear();
  });

  return (
    <>
      <Router>
        <Logo></Logo>
        <Switch>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
