import Grid from '@mui/material/Grid';

import {
  Wrapper,
  Container,
  SubTitle,
  InputField,
  TextArea,
  Btn,
} from './styles';

import DatePicker from '../DatePicker';

const User = () => {
  return (
    <Wrapper>
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <Container>
            <SubTitle>Name</SubTitle>
            <InputField type="text" />
            <SubTitle>Phone Number</SubTitle>
            <InputField type="number" />
            <SubTitle>E-Mail Address</SubTitle>
            <InputField type="text" />
            <SubTitle>Occasion</SubTitle>
            <InputField type="text" />
            <SubTitle>Estimated amount of guests</SubTitle>
            <InputField type="text" />
            <SubTitle>Anything else you would like to specify</SubTitle>
            <TextArea multiline rows={2} rowsMax={4} type="text" />
            <SubTitle>
              <Btn variant="contained">Check</Btn>
            </SubTitle>
          </Container>
        </Grid>
        <Grid item xs={8}>
          <Container>
            <DatePicker />
          </Container>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Wrapper>
  );
};

export default User;
