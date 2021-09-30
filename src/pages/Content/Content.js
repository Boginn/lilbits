import { Wrapper, Container } from './styles';
import {
  Footer,
  CheckOrder,
  Previews,
  Delivery,
  Introduction,
} from '../../components';
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

      {/* <Container style={{ background: 'red', width: '100%' }}>
        <Grid container spacing={1}>
          <Item>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Previews />
              </Grid>
              <Grid item xs={4}>
                <CheckOrder />
              </Grid>
              <Grid item xs={8}>
                <Delivery />
              </Grid>
            </Grid>
          </Item>

          <Item>
            <Grid item xs={12}>
              <Order />
            </Grid>
          </Item>
        </Grid>
      </Container> */}
      <Footer />
    </Wrapper>
  );
};

export default Content;
