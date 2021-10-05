import { useHistory } from 'react-router-dom';
import { Wrapper, Nav, NavItem, NavBreak } from './styles';

const Navigation = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  };

  return (
    <Wrapper>
      <Nav>
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
            handleClick('/order/');
          }}
        >
          order
        </NavItem>
      </Nav>
    </Wrapper>
  );
};

export default Navigation;
