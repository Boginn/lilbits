import { content } from '../../data/data';

import { Wrapper, Container, Image } from './styles';
import Carousel from 'react-material-ui-carousel';

const Previews = () => {
  const items = content.previews.items;

  return (
    <Wrapper>
      <Container>
        <Carousel slide={false} stopAutoPlayOnHover={true} interval={8000}>
          {items.map((item, i) => (
            <Image
              key={i}
              item={item}
              alt={item.description}
              style={{ background: `url(${item.link})` }}
            ></Image>
          ))}
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default Previews;
