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
import { displayBetween } from '../../material/material';
import '../../media.css';

const Dish = ({ order, setOrder }) => {
  const [dish, setDish] = useState(null);
  const [dishes, setDishes] = useState(null);
  const [categories, setCategories] = useState([]);
  const [disabled, setDisabled] = useState(null);

  const history = useHistory();

  const handleSubmit = () => {
    setOrder({ ...order, dish: dish });
    history.push('/order/beverage');
  };

  const getRandomDish = async () => {
    try {
      let result = await axios.get(
        'https://themealdb.com/api/json/v1/1/random.php'
      );

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

      console.log(result.data.meals[0]);
      setDish(result.data.meals[0]);
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

  useEffect(() => {
    getRandomDish();
    getDishes();
  }, []);

  return (
    <Wrapper>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <div>
            {dish && (
              <Card>
                <span>
                  <Image
                    src={dish.strMealThumb}
                    alt="food"
                    className="hide-xmedium"
                  />
                </span>
                <UnderCard>
                  <Title>{dish && dish.strMeal}</Title>
                  <DividerLine />
                  <Ingredients dish={dish} />
                  <SubTitle style={displayBetween}>
                    <span>
                      Category:
                      <i> {dish && dish.strCategory} </i>
                    </span>
                    <span>
                      Origin: <i> {dish && dish.strArea}</i>
                    </span>
                  </SubTitle>
                </UnderCard>
              </Card>
            )}
            <BtnWrapper>
              <Btn type="button" onClick={handleSubmit}>
                pick <span className="hide-medium">&nbsp;dish</span>
              </Btn>
              <Btn disabled={disabled} type="button" onClick={getRandomDish}>
                next <span className="hide-medium">&nbsp;dish</span>
              </Btn>
            </BtnWrapper>
          </div>
        </Grid>

        <Grid item md={4}>
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
