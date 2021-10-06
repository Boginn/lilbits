import { Wrapper, Container } from './styles';
import {
  CheckOrder,
  Previews,
  Delivery,
  Introduction,
  Invitation,
} from '../../components';
import Grid from '@mui/material/Grid';

const Content = () => {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={5}>
            <Previews />
          </Grid>
          <Grid item xs={7}>
            <Introduction />
            <Invitation />
          </Grid>
          <Grid item xs={8}>
            <CheckOrder />
          </Grid>
          <Grid item xs={4}>
            <Delivery />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Content;
