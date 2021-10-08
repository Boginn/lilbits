import axios from 'axios';
import { useEffect } from 'react';
import { Wrapper, Container, Item, Input, Btn, SubTitle } from './styles';

const Categories = ({ categories, setCategories, getRandomDish, disabled }) => {
  const handleChange = (e, category) => {
    categories.forEach((cat) => {
      if (cat.name == category.name) {
        cat.checked = !cat.checked;
      }
    });
  };

  const makeCats = (array) => {
    const cats = [];
    array.forEach((cat) => {
      cats.push({ id: cat.idCategory, name: cat.strCategory, checked: false });
    });
    return cats;
  };

  const getMealCategories = async () => {
    try {
      let result = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      );

      // filtering out goat and breakfast
      result = result.data.categories.filter(
        (word) => word.idCategory != '13' && word.idCategory != '14'
      );
      result = makeCats(result);
      setCategories(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMealCategories();
  }, []);

  return (
    <Wrapper>
      <SubTitle>Categories</SubTitle>
      <Container
        container
        spacing={{ xs: 3, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 8 }}
      >
        {categories &&
          categories.map((category) => (
            <label
              key={category.idCategory}
              onChange={(e) => handleChange(e, category)}
            >
              <Item item>
                <Input type="checkbox" />
                {category.name}
              </Item>
            </label>
          ))}
      </Container>
      <Btn disabled={disabled} type="button" onClick={getRandomDish}>
        random dish
      </Btn>
    </Wrapper>
  );
};

export default Categories;