import axios from 'axios';
import { useState, useEffect } from 'react';
import { Receipt, Beverage, Dish, Form } from '../../components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { Wrapper, Container } from './styles';

const Order = () => {
  const [formData, setFormData] = useState({});
  const [dish, setDish] = useState({});
  console.log(dish);
  const [categories, setCategories] = useState({});
  // const [state, setState] = useState({
  //   form: true,
  //   dish: false,
  // });
  // const history = useHistory();

  const commitBooking = (d) => {
    console.log(formData);
    console.log(d);
  };

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
  console.log(commitBooking);

  return (
    <Router>
      <Wrapper>
        <Container>
          <Switch>
            <Route path="/order/receipt">
              <Receipt />
            </Route>
            <Route path="/order/beverage">
              <Beverage />
            </Route>
            <Route path="/order/dish">
              <Dish categories={categories} />
            </Route>
            <Route path={`${match.path}`}>
              <Form
                setFormData={(p) => {
                  setFormData(p);
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
