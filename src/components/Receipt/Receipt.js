import Grid from '@mui/material/Grid';

import {
  Wrapper,
  Card,
  DishImage,
  BeverageImage,
  Title,
  Text,
  TitleText,
  SubTitle,
  Btn,
  Description,
} from './styles';

import { useHistory } from 'react-router-dom';
const Receipt = ({ order, commitBooking }) => {
  const history = useHistory();

  console.log(history);

  return (
    <Wrapper>
      {order && (
        <Card>
          <div>
            <Grid item xs={12} style={{ display: 'flex' }}>
              <DishImage src={order.dish.strMealThumb} alt="food" />
              <BeverageImage src={order.beverage.image_url} alt="food" />
            </Grid>
          </div>

          <div>
            <Title>
              <p>Birthday for 35</p>
            </Title>

            <SubTitle>
              {order.dish.strMeal}
              <i> and </i> {order.beverage.name}
            </SubTitle>
            <Description>
              <TitleText
                style={{ justifyContent: 'space-between', display: 'flex' }}
              >
                <span>Finnbogi Jokull Petursson</span>
                <span>
                  {order.date.toDateString().split(' ')[1]}.
                  {order.date.toDateString().split(' ')[2]} &apos;
                  {order.date.toDateString().split(' ')[3].split('20')[1]}
                </span>
              </TitleText>
              <TitleText>893-4862 - bogifinn@gmail.com</TitleText>
              <Text>
                It will be held outsideIt will be held outsideIt will be held
                outsideIt will be held outsideIt will be held outsideIt will be
                held outsideIt will be held outsideIt will be held outsideIt
                will be held outsideIt will be held outsideIt will be held
                outsideIt will be held outsideIt will be held outside
              </Text>

              {/* <p>{order.name}</p>
              <p>{order.number}</p>
              <p>{order.email}</p>
              <p>{order.event} for {order.guests} guests</p>
              <p>{order.other}</p> */}
            </Description>
          </div>
        </Card>
      )}
      <Btn type="button" onClick={commitBooking}>
        submit
      </Btn>
    </Wrapper>
  );
};

export default Receipt;
