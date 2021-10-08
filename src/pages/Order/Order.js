import { useState } from 'react';
import { Receipt, Beverage, Dish, Form } from '../../components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { Wrapper, Container } from './styles';

const Order = () => {
  const [order, setOrder] = useState();

  const commitBooking = () => {
    console.log(order);
  };

  const match = useRouteMatch();

  return (
    <Router>
      <Wrapper>
        <Container>
          <Switch>
            <Route path="/order/receipt">
              <Receipt order={order} commitBooking={commitBooking} />
            </Route>
            <Route path="/order/beverage">
              <Beverage
                order={order}
                setOrder={(b) => {
                  setOrder(b);
                }}
              />
            </Route>
            <Route path="/order/dish">
              <Dish
                order={order}
                setOrder={(d) => {
                  setOrder(d);
                }}
              />
            </Route>
            <Route path={`${match.path}`}>
              <Form
                setOrder={(f) => {
                  setOrder(f);
                }}
              />
            </Route>
          </Switch>
        </Container>
      </Wrapper>
    </Router>
  );
};

export default Order;
