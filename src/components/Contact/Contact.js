import { content } from '../../data/data';

import { Wrapper, Container, Item, Text } from './styles';

const Contact = () => {
  const items = content.contact.items;
  const mail = content.contact.mail;

  return (
    <Wrapper>
      <Container>
        <Text>{mail}</Text>
        {items &&
          items.map((item) => (
            <Item href={item.link} key={item.description}>
              {item.description}
            </Item>
          ))}
      </Container>
    </Wrapper>
  );
};

export default Contact;
