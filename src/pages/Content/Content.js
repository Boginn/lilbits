import { Wrapper, Container } from './styles';
import {
  // CheckOrder,
  Previews,
  // Delivery,
  Introduction,
  Invitation,
} from '../../components';
import Grid from '@mui/material/Grid';
import { displayCenter } from '../../material/material';
import '../../media.css';

const Content = () => {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={5} style={displayCenter}>
          <Grid item xs={5} className="hide-medium">
            <Previews />
          </Grid>
          <Grid item md={7} style={{ paddingRight: '40px' }}>
            <Introduction />
            <Invitation />
          </Grid>
          {/* <Grid item md={8}>
            <CheckOrder />
          </Grid>
          <Grid item md={4}>
            <Delivery />
          </Grid> */}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Content;
