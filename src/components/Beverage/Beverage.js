import axios from 'axios';
import {
  Wrapper,
  Card,
  Image,
  ImageWrapper,
  Btn,
  BtnWrapper,
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

const Beverage = ({ order, setOrder }) => {
  const [beverage, setBeverage] = useState(null);
  const [beverages, setBeverages] = useState(null);
  const [range, setRange] = useState([4, 8]);
  const [disabled, setDisabled] = useState(null);
  const history = useHistory();

  const handleSubmit = () => {
    setOrder({ ...order, beverage: beverage });
    history.push('/order/receipt');
  };

  const getRandomBeverage = async () => {
    setDisabled(true);
    try {
      let result = await axios.get('https://api.punkapi.com/v2/beers/random');

      if (range) {
        if (
          Math.floor(result.data[0].abv) < range[0] ||
          Math.floor(result.data[0].abv) > range[1]
        ) {
          getRandomBeverage();
        } else {
          setDisabled(false);
        }
      }

      console.log(result.data[0]);
      setBeverage(result.data[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const getBeverages = async () => {
    try {
      let result = await axios.get('https://api.punkapi.com/v2/beers');
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
              <ImageWrapper>
                <Image src={beverage.image_url} alt="beverage" />
              </ImageWrapper>
              <UnderCard>
                <Title>{beverage && beverage.name}</Title>
                <DividerLine />

                <Description>{beverage.description}</Description>
                <SubTitle>
                  <span>
                    <i>{beverage && beverage.tagline}</i>
                  </span>
                  <span>
                    <i> {beverage && beverage.abv}</i>%
                  </span>
                </SubTitle>
              </UnderCard>
            </Card>
          )}
          <BtnWrapper>
            <Btn type="button" onClick={handleSubmit}>
              next
            </Btn>
          </BtnWrapper>
        </Grid>
        <Grid item xs={4}>
          {beverages && (
            <Selection
              beverages={beverages}
              getRandomBeverage={getRandomBeverage}
              setBeverage={setBeverage}
              range={range}
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
