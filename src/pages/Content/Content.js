import { Wrapper, Container } from './styles';
import { CheckOrder, Previews, Delivery, Introduction } from '../../components';
import Grid from '@mui/material/Grid';

const Content = () => {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={4}>
            <Introduction />
          </Grid>
          <Grid item xs={8}>
            <Previews />
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
