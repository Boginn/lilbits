import { Wrapper, Container } from './styles';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const CheckOrder = () => {
  return (
    <Wrapper>
      <Container>
        <div>Check your Order</div>
        <Input type="text" />
        <Button variant="contained">Check</Button>
      </Container>
    </Wrapper>
  );
};

export default CheckOrder;
