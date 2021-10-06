import axios from 'axios';
import { useState, useEffect } from 'react';

import { Wrapper, Card, Image, Container, Btn } from './styles';
import { useHistory } from 'react-router-dom';
// import { FilterDish } from '../../components';
import Grid from '@mui/material/Grid';

const Dish = (properties) => {
  // console.log(properties);
  const [dish, setDish] = useState(null);
  const [categories, setCategories] = useState(null);

  const history = useHistory();
  // Using props and deconstructing still does not work
  // it was not just eslint being rude
  const handleGenerate = () => {
    getRandomDish();
    console.log(dish);
    // let okay = false;
    // categories.forEach((cat) => {
    //   if (cat.strCategory == dish.meals[0].strCategory) {
    //     okay = true;
    //     console.log(dish);
    //   }
    // });
    // if (!okay) {
    //   console.log('getting random dish');
    //   getRandomDish();
    // }
  };
  const handleSubmit = () => {
    localStorage.setItem('dish', JSON.stringify(dish.meals[0]));
    const res = JSON.parse(localStorage.getItem('dish'));
    console.log(res);
    history.push('/order/beverage');
    // TODO Save this to the state?
    // properties.toggle();
  };

  const getRandomDish = async () => {
    try {
      let result = await axios.get(
        'https://themealdb.com/api/json/v1/1/random.php'
      );

      // console.log(properties.categories);
      if (categories) {
        let okay = false;
        let isNoneChecked = true;

        categories.forEach((cat) => {
          if (cat.checked) {
            isNoneChecked = false;
          }
        });

        categories.forEach((cat) => {
          if (cat.checked && cat.name == result.data.meals[0].strCategory) {
            okay = true;
            console.log(dish);
          }
        });
        console.log(okay);
        console.log(isNoneChecked);
        if (!okay && !isNoneChecked) {
          handleGenerate();
        }
      }

      setDish(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  // const filterDish = () => {
  //   categories.forEach((cat) => {
  //     if (cat.checked && cat.strCategory == result.data.meals[0].strCategory) {
  //       console.log('filtered');
  //       getRandomDish();
  //     }
  //   });
  // };

  const makeCats = () => {
    const cats = [];
    properties.categories.forEach((cat) => {
      cats.push({ id: cat.idCategory, name: cat.strCategory, checked: false });
    });
    return cats;
  };

  const handleChange = (e, category) => {
    categories.forEach((cat) => {
      if (cat.name == category.name) {
        cat.checked = e.target.checked;
      }
    });
  };

  useEffect(() => {
    setCategories(makeCats());
    getRandomDish();
  }, []);

  return (
    <Wrapper>
      <Grid container spacing={5}>
        <Grid item xs={7}>
          {dish && (
            <Card>
              <span>
                <Image src={dish.meals[0].strMealThumb} alt="food" />
              </span>
              <span>
                <h1>{dish.meals[0] && dish.meals[0].strMeal}</h1>
                <p>{dish.meals[0].strInstructions}</p>
                <a href={dish.meals[0].strSource}>link</a>
              </span>
            </Card>
          )}
        </Grid>
        <Grid item xs={5}>
          <Container>
            <Grid
              container
              spacing={{ xs: 3, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              style={{ justifyContent: 'space-evenly' }}
            >
              {categories &&
                categories.map((category) => (
                  <Grid
                    item
                    key={category.idCategory}
                    style={{
                      background: 'red',
                    }}
                  >
                    {/* <img src={category.strCategoryThumb} /> */}
                    <label>{category.name}</label>
                    <input
                      type="checkbox"
                      onChange={(e) => handleChange(e, category)}
                    />
                  </Grid>
                ))}
            </Grid>
            <Btn type="button" onClick={handleGenerate}>
              Generate Dish
            </Btn>
            <Btn type="button" onClick={handleSubmit}>
              Submit
            </Btn>
          </Container>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>

      <></>
    </Wrapper>
  );
};

export default Dish;
