import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import {
  Wrapper,
  Container,
  Label,
  InputField,
  TextArea,
  Btn,
  FormWrapper,
} from './styles';

import Dates from './Dates';

const Form = ({ setFormData }) => {
  const history = useHistory();
  const [date, setDate] = useState();

  const { register, handleSubmit } = useForm();

  const onSubmit = (d) => {
    const result = { ...d, date };
    setFormData(result);
    // localStorage.setItem('form', JSON.stringify(d));
    // NEXT step
    history.push('/order/dish');
    // const res = JSON.parse(localStorage.getItem('form'));
    // console.log(res);
  };

  const [submitDisabled, setSubmitDisabled] = useState(true);
  const dateDone = (day) => {
    setDate(day);
    setSubmitDisabled(false);
  };
  const dateUnDone = () => {
    setSubmitDisabled(true);
  };

  return (
    <Wrapper>
      <Grid container spacing={6} style={{ justifyContent: 'center' }}>
        <Grid item xs={4}>
          <Container>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
              <Label>
                Name
                <InputField
                  color={'warning'}
                  {...register('name')}
                  type="text"
                />
              </Label>
              <Label>
                Phone Number
                <InputField
                  color={'warning'}
                  {...register('number')}
                  type="number"
                />
              </Label>
              <Label>
                E-Mail Address
                <InputField
                  color={'warning'}
                  {...register('mail')}
                  type="text"
                />
              </Label>
              <Label>
                Occasion
                <InputField
                  color={'warning'}
                  {...register('event')}
                  type="text"
                />
              </Label>
              <Label>
                Estimated amount of guests
                <InputField
                  color={'warning'}
                  {...register('guests')}
                  type="text"
                />
              </Label>
              <Label>
                Anything else you would like to specify
                <TextArea
                  color={'warning'}
                  {...register('other')}
                  multiline
                  rows={2}
                  rowsmax={4}
                  type="text"
                />
              </Label>
            </FormWrapper>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Container>
            <Dates done={dateDone} unDone={dateUnDone} />
          </Container>
        </Grid>
        <Grid item xs={8}>
          <Btn
            type="submit"
            disabled={submitDisabled}
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Btn>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Form;
