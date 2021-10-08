import { Text } from './styles';

const Ingredients = ({ dish }) => {
  let ingredients = dish.meals[0].strIngredient1;
  for (let i = 2; i < 21; i++) {
    const ingr = eval(`dish.meals[0].strIngredient${i}`);
    if (ingr) {
      ingredients = `${ingredients}, ${ingr}`;
    }
  }
  return (
    <Text>
      {ingredients}
      {/* {ingredients &&
          ingredients.map((ingredient) => (
            <Ingredient key={ingredient.id}>{ingredient.name}</Ingredient>
          ))} */}
    </Text>
  );
};

export default Ingredients;
