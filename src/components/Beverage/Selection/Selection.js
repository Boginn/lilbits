import { MetaWrapper, Wrapper, Container, Btn, List, ListItem } from './styles';
import Slider from '@mui/material/Slider';
import colours from '../../../data/colours';
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
    <MetaWrapper>
      <Wrapper>
        <Container
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 8 }}
        >
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
        </Container>
        <Btn disabled={disabled} type="button" onClick={handleClick}>
          Random Beverage
        </Btn>
      </Wrapper>
      <Wrapper>
        <List
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 8 }}
        >
          {filterBeverages(beverages) &&
            filterBeverages(beverages).map((beverage) => (
              <ListItem
                onClick={() => {
                  setBeverage([beverage]);
                }}
                key={beverage.id}
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
      </Wrapper>
    </MetaWrapper>
  );
};

export default Selection;
