import { useState } from 'react';
import { content } from '../../../data/data';

import {
  Wrapper,
  Container,
  Title,
  SubTitle,
  Btn,
  InputField,
  Message,
} from './styles';

const CheckOrder = ({ setOrder }) => {
  const [input, setInput] = useState({ target: { value: null } });
  const [message, setMessage] = useState();

  const title = content.checkOrder.title;
  const subTitle = content.checkOrder.subTitle;
  const button = content.checkOrder.button;

  const handleClick = () => {
    const bookings = JSON.parse(localStorage.getItem('bookings'));
    if (bookings) {
      bookings.forEach((order) => {
        if (
          input.target.value == order.mail ||
          input.target.value == order.id
        ) {
          setOrder(order);
          console.log(order);
        } else {
          setMessage('No match');
        }
      });
    } else {
      setMessage('No match');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <InputField
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setInput(e), setMessage(null);
          }}
          color={'warning'}
          type="text"
        />
        <Btn onClick={handleClick}>{button}</Btn>
        {message && <Message>{message}</Message>}
      </Container>
    </Wrapper>
  );
};

export default CheckOrder;
