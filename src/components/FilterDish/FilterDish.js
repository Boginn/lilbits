import { Wrapper, Container, Title, Text, DividerLine } from './styles';
import { content } from '../../data/data';

const FilterDish = () => {
  const paragraphs = content.introduction.paragraphs;
  const title = content.introduction.title;
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <DividerLine></DividerLine>
        {paragraphs.map((text) => (
          <Text key={text}>{text}</Text>
        ))}
      </Container>
    </Wrapper>
  );
};

export default FilterDish;
