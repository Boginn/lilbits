import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useEffect } from 'react';

import { Logo, Footer, Navigation } from './components';
import { Content, Order } from './pages';
import colours from './data/colours';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = colours.background;
    document.body.style.fontFamily = 'Roboto, sans-serif';
  });
  return (
    <>
      <Router>
        <Logo></Logo>
        <Navigation />

        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/order" component={Order} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
