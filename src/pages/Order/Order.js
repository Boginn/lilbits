import axios from 'axios';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
// import { Categories } from '../../components';
import { User } from '../../components';

import { Wrapper, Container } from './styles';

// import {
//   CheckOrder,
//   Previews,
//   Delivery,
//   Introduction,
// } from '../../components';

const Order = () => {
  const [state, setState] = useState({
    dish: null,
    categories: null,
  });
  const { categories } = state;

  // const getRandomDish = async () => {
  //   try {
  //     const result = await axios.get(
  //       'https://themealdb.com/api/json/v1/1/random.php'
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

      setState({
        ...state,
        categories: result,
      });
      console.log(result.data.categories);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // getRandomDish();
    // getDishByName('Arrabiata');
    // getDishById(52772);
    getMealCategories();
    console.log(categories);
  }, []);

  return (
    <Wrapper>
      <Container>
        <User />
        <Grid container spacing={6}>
          <Grid item xs={8}></Grid>
          {/* <Grid item xs={8}></Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}></Grid> */}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Order;
