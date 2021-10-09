import uuid from 'react-uuid';

import { Wrapper, Container, Btn, List, ListItem, Text } from './styles';
import Slider from '@mui/material/Slider';
import colours from '../../../data/colours';
import '../../../media.css';
import { displayBetween } from '../../../material/material';

function valuetext(value) {
  return `${value}`;
}

const Selection = ({
  beverages,
  setBeverage,
  getRandomBeverage,
  range,
  setRange,
  disabled,
}) => {
  const filterBeverages = (array) => {
    return array.filter(
      (bev) =>
        Math.floor(bev.abv) >= range[0] && Math.floor(bev.abv) <= range[1]
    );
  };

  const handleChange = (e, newValue) => {
    setRange(newValue);
  };

  const handleClick = () => {
    getRandomBeverage();
  };

  return (
    <Wrapper>
      <Container>
        <Text>
          Alcohol Percentage
          {range && (
            <Slider
              style={{ color: `${colours.tertiary}` }}
              min={4}
              max={12}
              getAriaValueText={valuetext}
              value={range}
              onChange={handleChange}
              valueLabelDisplay="auto"
            />
          )}
        </Text>
        <Btn disabled={disabled} type="button" onClick={handleClick}>
          Random Beverage
        </Btn>
      </Container>
      <Container className="hide-xmedium">
        <List
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 8 }}
        >
          {filterBeverages(beverages) &&
            filterBeverages(beverages).map((beverage) => (
              <ListItem
                style={displayBetween}
                onClick={() => {
                  setBeverage(beverage);
                }}
                key={uuid()}
              >
                <span
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {beverage.name}
                </span>
                <span>{beverage.abv}%</span>
              </ListItem>
            ))}
        </List>
      </Container>
    </Wrapper>
  );
};

export default Selection;
