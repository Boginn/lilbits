import { useState } from 'react';
import { content } from '../../../data/data';

import { Wrapper, Container, Title, SubTitle, Btn, InputField } from './styles';

const CheckOrder = ({ setOrder }) => {
  const [input, setInput] = useState();
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
        }
      });
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <InputField onChange={setInput} color={'warning'} type="text" />
        <Btn onClick={handleClick}>{button}</Btn>
      </Container>
    </Wrapper>
  );
};

export default CheckOrder;
