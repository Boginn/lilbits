import {
  Wrapper,
  Title,
  Text,
  TitleText,
  SubTitle,
  Description,
} from './styles';

const OrderInfo = ({ order }) => {
  const date = () => {
    let d = new Date(order.date);
    return `${d.toDateString().split(' ')[1]} 
${d.toDateString().split(' ')[2]} '
${d.toDateString().split(' ')[3].split('20')[1]}`;
  };

  return (
    <Wrapper>
      {order && (
        <>
          <Title>
            <b> {order.event}</b> for <b>{order.guests}</b>
          </Title>

          <SubTitle>
            {order.dish.strMeal}
            <i> and </i> {order.beverage.name}
          </SubTitle>
          <Description>
            <TitleText
              style={{ justifyContent: 'space-between', display: 'flex' }}
            >
              <span>{order.name}</span>
              {order.date && <span>{date()}</span>}
            </TitleText>
            <TitleText>
              {order.number} - {order.mail}
            </TitleText>
            <Text>{order.other}</Text>
          </Description>
        </>
      )}
    </Wrapper>
  );
};

export default OrderInfo;
