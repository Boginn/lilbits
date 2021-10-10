import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { content } from '../../data/data';

import {
  Wrapper,
  Card,
  DishImage,
  BeverageImage,
  Title,
  TitleBorder,
  TitleText,
  Btn,
  Description,
} from './styles';
import Grid from '@mui/material/Grid';
import '../../media.css';
import { displayBetween, displayCenter } from '../../material/material';

import OrderInfo from './OrderInfo';

const Receipt = ({ order, commitBooking, pushHome }) => {
  const [reference, setReference] = useState();
  const title = content.receipt.title;
  const subTitle = content.receipt.subTitle;

  const handleSubmit = () => {
    commitBooking(reference);
  };
  const handleClick = () => {
    pushHome();
  };

  useEffect(() => {
    setReference(`#${uuid().split('-')[0]}`);
  }, []);

  return (
    <Wrapper>
      {order.isProcessing ? (
        <Grid container spacing={5} style={displayCenter}>
          <Card>
            <div className="hide-xmedium">
              <Grid item xs={12}>
                <DishImage src={order.dish.strMealThumb} alt="food" />
                <BeverageImage src={order.beverage.image_url} alt="food" />
              </Grid>
            </div>

            <OrderInfo order={order} />
          </Card>
          <Grid item xs={8}>
            <Btn type="button" onClick={handleSubmit}>
              submit
            </Btn>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={5} style={displayCenter}>
          <Grid item xs={8}>
            <Description>
              <span style={displayBetween}>
                <Title>{title}</Title>
                <TitleBorder>{reference}</TitleBorder>
              </span>
              <TitleText>{subTitle}</TitleText>
            </Description>
          </Grid>
          <Grid item xs={6}>
            <Btn type="button" onClick={handleClick}>
              okay
            </Btn>
          </Grid>
        </Grid>
      )}
    </Wrapper>
  );
};

export default Receipt;
