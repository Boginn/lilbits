import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import { Receipt, Beverage, Dish, Form } from '../../components';

import { Wrapper } from './styles';
import { order as initialOrder } from '../../data/data';

const Order = () => {
  const [order, setOrder] = useState(initialOrder);
  const match = useRouteMatch();
  const history = useHistory();

  const commitBooking = (reference) => {
    let bookings = JSON.parse(localStorage.getItem('bookings'));
    if (!bookings) {
      bookings = [];
    }

    bookings.push({ ...order, id: reference, isProcessing: null });
    localStorage.setItem('bookings', JSON.stringify(bookings));
    setOrder(initialOrder);
  };

  const pushHome = () => {
    history.push('/');
  };

  useEffect(() => {
    setOrder(initialOrder);
  }, []);

  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route path={`${match.path}/receipt`}>
            <Receipt
              order={order}
              pushHome={pushHome}
              commitBooking={commitBooking}
            />
          </Route>
          <Route path={`${match.path}/beverage`}>
            <Beverage
              order={order}
              setOrder={(b) => {
                setOrder(b);
              }}
            />
          </Route>
          <Route path={`${match.path}/dish`}>
            <Dish
              order={order}
              setOrder={(d) => {
                setOrder(d);
              }}
            />
          </Route>
          <Route path={`${match.path}`}>
            <Form
              order={order}
              setOrder={(f) => {
                setOrder(f);
              }}
            />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default Order;
