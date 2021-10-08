import axios from 'axios';
import {
  Wrapper,
  Card,
  Image,
  Btn,
  UnderCard,
  Title,
  DividerLine,
  SubTitle,
  Description,
} from './styles';
import { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import Selection from './Selection';

const Beverage = () => {
  const [beverage, setBeverage] = useState(null);
  const [beverages, setBeverages] = useState(null);
  const [range, setRange] = useState([4, 8]);
  const [disabled, setDisabled] = useState(null);
  const history = useHistory();

  const handleSubmit = () => {
    localStorage.setItem('beverage', JSON.stringify(beverage.meals[0]));
    // const res = JSON.parse(localStorage.getItem('beverage'));
    // console.log(res);
    history.push('/order/receipt');
    // TODO Save this to the state?
    // properties.toggle();
  };

  const getRandomBeverage = async () => {
    setDisabled(true);

    try {
      let result = await axios.get('https://api.punkapi.com/v2/beers/random');

      // console.log(properties.Selection);
      if (range) {
        if (result.data[0].abv < range[0] || result.data[0].abv > range[1]) {
          getRandomBeverage();
        } else {
          setDisabled(false);
        }
      }

      console.log(result.data);
      setBeverage(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getBeverages = async () => {
    try {
      let result = await axios.get('https://api.punkapi.com/v2/beers');

      console.log(result.data);
      console.log(beverages);
      setBeverages(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getRandomBeverage();
    getBeverages();
  }, []);

  return (
    <Wrapper>
      <Grid container spacing={8} style={{ justifyContent: 'center' }}>
        <Grid item xs={6}>
          {beverage && (
            <Card>
              <span>
                <Image src={beverage[0].image_url} alt="food" />
              </span>
              <UnderCard>
                <Title>{beverage[0] && beverage[0].name}</Title>
                <DividerLine />

                <Description>{beverage[0].description}</Description>
                <SubTitle>
                  <span>
                    <i>{beverage[0] && beverage[0].tagline}</i>
                  </span>
                  <span>
                    <i> {beverage[0] && beverage[0].abv}</i>%
                  </span>
                </SubTitle>
              </UnderCard>
            </Card>
          )}
          <Btn
            type="button"
            onClick={handleSubmit}
            style={{ fontSize: '20pt' }}
          >
            Submit
          </Btn>
        </Grid>
        <Grid item xs={4}>
          {beverages && (
            <Selection
              beverages={beverages}
              getRandomBeverage={getRandomBeverage}
              setRange={setRange}
              disabled={disabled}
            />
          )}
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Beverage;
