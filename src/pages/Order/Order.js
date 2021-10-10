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

const Order = () => {
  const [order, setOrder] = useState({
    name: '',
    number: '',
    mail: '',
    event: '',
    guests: '',
    other: '',
    date: null,
    isProcessing: false,
  });
  const match = useRouteMatch();
  const history = useHistory();

  const commitBooking = (reference) => {
    console.log(reference);
    let bookings = JSON.parse(localStorage.getItem('bookings'));
    if (!bookings) {
      bookings = [];
    }
    bookings.push({ ...order, id: reference });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    console.log(JSON.parse(localStorage.getItem('bookings')));

    setOrder({
      name: '',
      number: '',
      mail: '',
      event: '',
      guests: '',
      other: '',
      date: null,
      isProcessing: false,
    });
  };

  const pushHome = () => {
    history.push('/');
  };

  useEffect(() => {
    setOrder({
      name: '',
      number: '',
      mail: '',
      event: '',
      guests: '',
      other: '',
      date: null,
      isProcessing: false,
    });
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
