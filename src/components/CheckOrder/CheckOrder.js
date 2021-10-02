import { Wrapper, Container, Title, SubTitle } from './styles';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { content } from '../../data/data';

const CheckOrder = () => {
  const title = content.checkOrder.title;
  const subTitle = content.checkOrder.subTitle;
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Input type="text" />
        <Button variant="contained">Check</Button>
      </Container>
    </Wrapper>
  );
};

export default CheckOrder;
