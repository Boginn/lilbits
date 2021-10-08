import { MetaWrapper, Wrapper, Container, Btn } from './styles';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import colours from '../../../data/colours';
function valuetext(value) {
  return `${value}`;
}

const Selection = ({ beverages, getRandomBeverage, setRange, disabled }) => {
  // const [state, setState] = useState({
  //   values: [4, 15],
  //   value: null,
  // });
  console.log(beverages);
  const [value, setValue] = useState([4, 8]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    setRange(value);
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
          <Slider
            style={{ color: `${colours.tertiary}` }}
            min={2.5}
            max={14}
            getAriaValueText={valuetext}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </Container>
        <Btn disabled={disabled} type="button" onClick={handleClick}>
          Find a beverage
        </Btn>
      </Wrapper>
      <Wrapper>
        <Container
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 8 }}
        >
          {beverages &&
            beverages.map((beverage) => (
              <p key={beverage}>{beverage.name}ff</p>
            ))}
        </Container>
      </Wrapper>
    </MetaWrapper>
  );
};

export default Selection;
