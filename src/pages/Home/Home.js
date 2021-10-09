import { Previews, Introduction, Invitation } from '../../components';
import { Wrapper, Container } from './styles';
import Grid from '@mui/material/Grid';
import { displayCenter } from '../../material/material';
import '../../media.css';

const Home = () => {
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
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Home;
