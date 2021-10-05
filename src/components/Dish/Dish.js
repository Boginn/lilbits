import { Wrapper, Card, Image } from './styles';
import { useHistory } from 'react-router-dom';

const Dish = (properties) => {
  console.log(properties);
  const history = useHistory();
  // Using props and deconstructing still does not work
  // it was not just eslint being rude
  const handleGenerate = () => {
    properties.getRandomDish();
  };
  const handleSubmit = () => {
    localStorage.setItem('dish', JSON.stringify(properties.dish.meals[0]));
    const res = JSON.parse(localStorage.getItem('dish'));
    console.log(res);
    history.push('/order/beverage');
    // TODO Save this to the state?
    // properties.toggle();
  };

  return (
    <Wrapper>
      <>
        {properties.categories &&
          properties.categories.map((category) => (
            <div key={category.idCategory}>
              {/* <img src={category.strCategoryThumb} /> */}
              <label>{category.strCategory}</label>
              <input type="checkbox" />
            </div>
          ))}
      </>
      {properties.dish.meals[0] && (
        <Card>
          <span>
            <Image src={properties.dish.meals[0].strMealThumb} alt="food" />
          </span>
          <span>
            <h1>
              {properties.dish.meals[0] && properties.dish.meals[0].strMeal}
            </h1>
            <p>{properties.dish.meals[0].strInstructions}</p>
            <a href={properties.dish.meals[0].strSource}>link</a>
          </span>
        </Card>
      )}
      <button type="button" onClick={handleGenerate}>
        Generate Dish
      </button>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </Wrapper>
  );
};

export default Dish;
