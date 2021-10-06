import { Wrapper, Container, Title, SubTitle, Btn } from './styles';
import { content } from '../../data/data';
import { useHistory } from 'react-router-dom';

const Invitation = () => {
  const paragraphs = content.invitation.paragraphs;
  const title = content.invitation.title;
  const history = useHistory();
  const handleClick = (route) => {
    history.push(route);
  };
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <SubTitle>{paragraphs}</SubTitle>

        <Btn
          onClick={() => {
            handleClick('/order/');
          }}
        >
          Book now!
        </Btn>
      </Container>
    </Wrapper>
  );
};

export default Invitation;
