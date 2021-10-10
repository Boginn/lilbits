import uuid from 'react-uuid';

import { Wrapper, ListItem, List, SubTitle, Btn } from './styles';
import { displayBetween, hideOverflow } from '../../../material/material';
import '../../../media.css';

const Menu = ({ dishes, setDish, getDishes, disabled }) => {
  const filterDishes = (array) => {
    return array.filter((dish) => dish);
  };

  return (
    <Wrapper className="hide-xmedium">
      <SubTitle>Suggestions</SubTitle>
      <List
        container
        spacing={{ xs: 3, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 8 }}
      >
        {filterDishes(dishes) &&
          filterDishes(dishes).map((dish) => (
            <ListItem
              style={displayBetween}
              onClick={() => {
                setDish(dish.meals[0]);
              }}
              key={uuid()}
            >
              <span style={hideOverflow}>{dish.meals[0].strMeal}</span>
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
