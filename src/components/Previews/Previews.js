import { Wrapper, Container, Image } from './styles';
import Carousel from 'react-material-ui-carousel';
import { content } from '../../data/data';

const Previews = () => {
  const items = content.previews.items;
  return (
    <Wrapper>
      <Container>
        <Carousel>
          {items.map((item, i) => (
            <Image
              key={i}
              item={item}
              alt={item.description}
              style={{ backgroundImage: `url(${item.link})` }}
            ></Image>
          ))}
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default Previews;
