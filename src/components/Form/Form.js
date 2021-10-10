import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useHistory } from 'react-router-dom';
import { form } from '../../data/data';

import Dates from './Dates';

import {
  Wrapper,
  Container,
  Label,
  InputField,
  TextArea,
  Btn,
  FormWrapper,
  Message,
} from './styles';
import Grid from '@mui/material/Grid';
import { displayBetween, displayCenter } from '../../material/material';

const Form = ({ setOrder }) => {
  const history = useHistory();
  const [date, setDate] = useState();
  const [message, setMessage] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (d) => {
    let okay = true;
    const bookings = JSON.parse(localStorage.getItem('bookings'));
    if (bookings) {
      bookings.forEach((order) => {
        if (d.mail == order.mail) {
          setMessage(form.errors.mailMatch);
          okay = false;
        }
      });
    }

    if (okay) {
      const result = { ...d, date, isProcessing: true };
      console.log(date);
      setOrder(result);

      history.push('/order/dish');
    }
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
      <Grid container spacing={6} style={displayCenter}>
        <Grid item xs={12} md={6}>
          <Container>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
              {form &&
                form.inputs.map((item) => (
                  <>
                    <Label key={item.key}>
                      <span style={displayBetween}>
                        {item.label}
                        {message && item.key == 'mail' && (
                          <Message>{message}</Message>
                        )}
                        <Message>
                          <ErrorMessage errors={errors} name={item.key} />
                        </Message>
                      </span>
                      <InputField
                        color={item.color}
                        {...register(item.key, {
                          required: form.errors.required,
                        })}
                        type={item.type}
                      />
                    </Label>
                  </>
                ))}

              <Label>
                {form.textarea.label}
                <TextArea
                  {...register(form.textarea.key, {
                    maxLength: {
                      value: 200,
                      message: form.errors.maxLength,
                    },
                  })}
                  color={form.textarea.color}
                  multiline
                  rows={2}
                  rowsmax={4}
                  type={form.textarea.type}
                />
              </Label>
              <Message>
                <ErrorMessage errors={errors} name={form.textarea.key} />
              </Message>
            </FormWrapper>
          </Container>
        </Grid>
        <Grid item xs={12} md={4}>
          <Container style={displayCenter}>
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
