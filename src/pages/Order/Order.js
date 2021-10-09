import { useState, useEffect } from 'react';
import { Receipt, Beverage, Dish, Form } from '../../components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { Wrapper, Container } from './styles';
import { useHistory } from 'react-router-dom';

const Order = () => {
  const [order, setOrder] = useState();
  const match = useRouteMatch();
  const history = useHistory();

  const commitBooking = () => {
    localStorage.setItem('order', JSON.stringify(order));
    setOrder(null);
    // const res = JSON.parse(localStorage.getItem('order'));
    // console.log(res);
    history.push('/');
  };

  useEffect(() => {
    setOrder(null);
  }, []);

  return (
    <Router>
      <Wrapper>
        <Container>
          <Switch>
            <Route path={`${match.path}/receipt`}>
              <Receipt order={order} commitBooking={commitBooking} />
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
