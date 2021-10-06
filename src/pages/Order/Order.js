import axios from 'axios';
import { useState, useEffect } from 'react';
import { Receipt, Beverage, Dish, Form } from '../../components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';

import { Wrapper, Container } from './styles';

const Order = () => {
  const [dish, setDish] = useState({});
  const [categories, setCategories] = useState({});
  // const [state, setState] = useState({
  //   form: true,
  //   dish: false,
  // });

  const getRandomDish = async () => {
    try {
      const result = await axios.get(
        'https://themealdb.com/api/json/v1/1/random.php'
      );
      setDish(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  // const getDishByName = async (meal) => {
  //   try {
  //     const result = await axios.get(
  //       `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
  //     );
  //     setState({
  //       ...state,
  //       dish: result.data,
  //     });
  //     console.log(result.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const getDishById = async (id) => {
  //   try {
  //     const result = await axios.get(
  //       `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  //     );
  //     setState({
  //       ...state,
  //       dish: result.data,
  //     });
  //     console.log(result.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const getMealCategories = async () => {
    try {
      let result = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      );

      // filtering out goat and breakfast
      result = result.data.categories.filter(
        (word) => word.idCategory != '13' && word.idCategory != '14'
      );

      setCategories(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getRandomDish();
    // getDishByName('Arrabiata');
    // getDishById(52772);
    getMealCategories();

    // TODO
    // history.push('/order/form');
    // cant on unmounted but cant use componentDidMount?
  }, []);

  // useEffect(() => {
  //   // TODO
  //   // history.push('/order/form');
  //   // if(x) {
  //   //  do
  //  // }
  // }, [x]);

  const match = useRouteMatch(); // !
  console.log(match);

  return (
    <Router>
      <Wrapper>
        <Container>
          <Switch>
            <Route path="/order/receipt">
              <Receipt />
            </Route>
            <Route path="/order/beverage">
              <Beverage categories={categories} dish={dish} />
            </Route>
            <Route path="/order/dish">
              <Dish categories={categories} />
            </Route>
            <Route path={`${match.path}/`}>
              <Form />
            </Route>
          </Switch>
        </Container>
      </Wrapper>
    </Router>
  );
};

export default Order;
