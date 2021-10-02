import { useHistory } from 'react-router-dom';
import { Wrapper, NavItem, NavBreak } from './styles';

const Navigation = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  };

  return (
    <Wrapper>
      <NavItem
        onClick={() => {
          handleClick('/');
        }}
      >
        home
      </NavItem>
      <NavBreak>|</NavBreak>
      <NavItem
        onClick={() => {
          handleClick('/order');
        }}
      >
        order
      </NavItem>
    </Wrapper>
  );
};

export default Navigation;
