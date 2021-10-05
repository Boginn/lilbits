import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';
// import { useContext } from 'react';

// import { OrderContext } from '../../pages/Order/Order';
import {
  Wrapper,
  Container,
  Label,
  InputField,
  TextArea,
  Btn,
  FormWrapper,
} from './styles';

import Dates from '../Dates';

const Form = () => {
  // try calling it props
  // try deconstructing
  // const context = useContext(OrderContext);
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => {
    localStorage.setItem('form', JSON.stringify(d));
    const res = JSON.parse(localStorage.getItem('form'));
    console.log(res);
    history.push('/order/dish');
    // TODO Save this to the state?
  };

  return (
    // <OrderContext.Consumer>
    <Wrapper>
      <Grid container spacing={6} style={{ justifyContent: 'center' }}>
        <Grid item xs={4}>
          <Container>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
              <Label>
                Name
                <InputField {...register('name')} type="text" />
              </Label>
              <Label>
                Phone Number
                <InputField {...register('number')} type="number" />
              </Label>
              <Label>
                E-Mail Address
                <InputField {...register('mail')} type="text" />
              </Label>
              <Label>
                Occasion
                <InputField {...register('event')} type="text" />
              </Label>
              <Label>
                Estimated amount of guests
                <InputField {...register('guests')} type="text" />
              </Label>
              <Label>
                Anything else you would like to specify
                <TextArea
                  {...register('other')}
                  multiline
                  rows={2}
                  rowsmax={4}
                  type="text"
                />
              </Label>
              {/* // TODO: disabled if no date etc */}
              <Btn type="submit" variant="contained">
                Submit
              </Btn>
            </FormWrapper>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Container>
            <Dates />
          </Container>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Wrapper>
  );
};

export default Form;
