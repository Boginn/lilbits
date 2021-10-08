import { Wrapper, ListItem, List, SubTitle, Btn } from './styles';

const Menu = ({ dishes, setDish, getDishes, disabled }) => {
  const filterDishes = (array) => {
    return array.filter((dish) => dish);
  };
  return (
    <Wrapper>
      <SubTitle>Suggestions</SubTitle>
      <List
        container
        spacing={{ xs: 3, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 8 }}
      >
        {filterDishes(dishes) &&
          filterDishes(dishes).map((dish) => (
            <ListItem
              onClick={() => {
                setDish(dish);
              }}
              key={dish.meals[0].idMeal}
            >
              <span
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {dish.meals[0].strMeal}
              </span>
              <span>{dish.meals[0].strCategory}</span>
            </ListItem>
          ))}
      </List>
      <Btn disabled={disabled} type="button" onClick={getDishes}>
        suggest
      </Btn>
    </Wrapper>
  );
};

export default Menu;
