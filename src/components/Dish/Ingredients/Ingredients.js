import { Description } from './styles';

const Ingredients = ({ dish }) => {
  let ingredients = dish.strIngredient1;
  for (let i = 2; i < 21; i++) {
    const ingr = eval(`dish.strIngredient${i}`);
    if (ingr) {
      ingredients = `${ingredients}, ${ingr}`;
    }
  }
  return <Description>{ingredients}</Description>;
};

export default Ingredients;
