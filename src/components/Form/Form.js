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
import { form } from '../../data/data';

const Form = ({ setOrder }) => {
  const history = useHistory();
  const [date, setDate] = useState();

  const { register, handleSubmit } = useForm();

  const onSubmit = (d) => {
    const result = { ...d, date };
    setOrder(result);
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
              {form &&
                form.inputs.map((item) => (
                  <Label key={item.key}>
                    {item.label}
                    <InputField
                      color={item.color}
                      {...register(item.key)}
                      type={item.type}
                    />
                  </Label>
                ))}

              <Label>
                {form.textarea.label}
                <TextArea
                  color={form.textarea.color}
                  {...register(form.textarea.key)}
                  multiline
                  rows={2}
                  rowsmax={4}
                  type={form.textarea.type}
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
            next
          </Btn>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Form;
