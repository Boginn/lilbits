import axios from 'axios';
import { useState, useEffect } from 'react';

import Ingredients from './Ingredients';
import Categories from './Categories';
import Menu from './Menu';

import {
  Wrapper,
  Card,
  UnderCard,
  Image,
  Btn,
  BtnWrapper,
  Title,
  SubTitle,
  DividerLine,
} from './styles';
import { useHistory } from 'react-router-dom';

import Grid from '@mui/material/Grid';

const Dish = ({ order, setOrder }) => {
  const [dish, setDish] = useState(null);
  const [dishes, setDishes] = useState(null);
  const [categories, setCategories] = useState([]);
  const [disabled, setDisabled] = useState(null);

  const history = useHistory();

  const handleSubmit = () => {
    localStorage.setItem('dish', JSON.stringify(dish.meals[0]));
    const res = JSON.parse(localStorage.getItem('dish'));
    console.log(res);
    setOrder({ ...order, dish: dish.meals[0] });

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
        setDisabled(true);
        categories.forEach((cat) => {
          if (cat.checked) {
            isNoneChecked = false;
          }
        });

        categories.forEach((cat) => {
          if (cat.checked && cat.name == result.data.meals[0].strCategory) {
            okay = true;
            console.log(dish);
            console.log(cat);
          }
        });
        if (!okay && !isNoneChecked) {
          getRandomDish();
        } else {
          setDisabled(false);
        }
      }

      setDish(result.data);
      console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getDishes = async () => {
    setDisabled(true);
    const dishes = [];
    try {
      for (let i = 0; i < 10; i++) {
        let result = await axios.get(
          'https://themealdb.com/api/json/v1/1/random.php'
        );
        dishes.push(result.data);
      }

      console.log(dishes);
      setDishes(dishes);
      setDisabled(false);
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

  // const makeCats = () => {
  //   const cats = [];
  //   props.categories.forEach((cat) => {
  //     cats.push({ id: cat.idCategory, name: cat.strCategory, checked: false });
  //   });
  //   return cats;
  // };

  useEffect(() => {
    getRandomDish();
    getDishes();
  }, []);

  return (
    <Wrapper>
      <Grid container spacing={8} style={{ justifyContent: 'center' }}>
        <Grid item xs={6}>
          {dish && (
            <Card>
              <span>
                <Image src={dish.meals[0].strMealThumb} alt="food" />
              </span>
              <UnderCard>
                <Title>{dish.meals[0] && dish.meals[0].strMeal}</Title>
                <DividerLine />
                <Ingredients dish={dish} />
                <SubTitle>
                  <span>
                    Category:
                    <i> {dish.meals[0] && dish.meals[0].strCategory} </i>
                  </span>
                  <span>
                    Origin: <i> {dish.meals[0] && dish.meals[0].strArea}</i>
                  </span>
                </SubTitle>
              </UnderCard>
            </Card>
          )}
          <BtnWrapper>
            <Btn type="button" onClick={handleSubmit}>
              next
            </Btn>
          </BtnWrapper>
        </Grid>

        <Grid item xs={4}>
          <Categories
            categories={categories}
            setCategories={setCategories}
            getRandomDish={getRandomDish}
            disabled={disabled}
          />
          {dishes && (
            <Menu
              dishes={dishes}
              setDish={setDish}
              getDishes={getDishes}
              disabled={disabled}
            />
          )}
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Dish;
