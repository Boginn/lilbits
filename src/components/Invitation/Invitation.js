import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { content } from '../../data/data';

import {
  Wrapper,
  Container,
  OrderInfoContainer,
  Title,
  SubTitle,
  Btn,
} from './styles';

import CheckOrder from './CheckOrder';
import OrderInfo from '../Receipt/OrderInfo';

const Invitation = () => {
  const [order, setOrder] = useState();
  const title = content.invitation.title;
  const paragraphs = content.invitation.paragraphs;

  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  };
  return (
    <Wrapper>
      {order ? (
        <OrderInfoContainer>
          <OrderInfo order={order} />
          <Btn
            style={{
              fontSize: '12pt',
              height: '50px',
            }}
            onClick={() => {
              setOrder(null);
            }}
          >
            okay
          </Btn>
        </OrderInfoContainer>
      ) : (
        <Container>
          <Title>{title}</Title>
          <SubTitle>{paragraphs}</SubTitle>

          <Btn
            onClick={() => {
              handleClick('/order/');
            }}
          >
            book now!
          </Btn>

          <CheckOrder setOrder={setOrder} />
        </Container>
      )}
    </Wrapper>
  );
};

export default Invitation;
