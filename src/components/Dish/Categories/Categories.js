import { Wrapper, Container, Item, Input, Btn } from './styles';

const Categories = ({ categories, handleChange, getRandomDish, disabled }) => {
  return (
    <Wrapper>
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
        Find a Dish
      </Btn>
    </Wrapper>
  );
};

export default Categories;
