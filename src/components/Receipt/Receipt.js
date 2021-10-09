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

import Grid from '@mui/material/Grid';
import '../../media.css';
import { displayCenter } from '../../material/material';

const Receipt = ({ order, commitBooking }) => {
  const handleClick = () => {
    commitBooking();
  };

  return (
    <Wrapper>
      {order && (
        <Card>
          <div className="hide-xmedium">
            <Grid item xs={12} style={displayCenter}>
              <DishImage src={order.dish.strMealThumb} alt="food" />
              <BeverageImage src={order.beverage.image_url} alt="food" />
            </Grid>
          </div>

          <div>
            <Title>
              <p>
                {order.event} for {order.guests}
              </p>
            </Title>

            <SubTitle>
              {order.dish.strMeal}
              <i> and </i> {order.beverage.name}
            </SubTitle>
            <Description>
              <TitleText
                style={{ justifyContent: 'space-between', display: 'flex' }}
              >
                <span>{order.name}</span>
                <span>
                  {order.date.toDateString().split(' ')[1]}.
                  {order.date.toDateString().split(' ')[2]} &apos;
                  {order.date.toDateString().split(' ')[3].split('20')[1]}
                </span>
              </TitleText>
              <TitleText>
                {order.number} - {order.email}
              </TitleText>
              <Text>{order.other}</Text>

              {/* <p>{order.name}</p>
              <p>{order.number}</p>
              <p>{order.email}</p>
              <p>{order.event} for {order.guests} guests</p>
              <p>{order.other}</p> */}
            </Description>
          </div>
        </Card>
      )}
      <Btn type="button" onClick={handleClick}>
        submit
      </Btn>
    </Wrapper>
  );
};

export default Receipt;
