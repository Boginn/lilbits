import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  margin: 10px;
  padding: 10px;
  justify-content: center;
  border: 1px solid ${colours.secondary};
  background-color: ${colours.primary};
`;

export const NavItem = styled.a`
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  color: ${colours.tertiary};
  text-shadow: 2px 2px black;
  font-size: 16pt;

  &:hover {
    cursor: pointer;
    color: ${colours.secondary};
    background-color: ${colours.tertiary};
  }
`;

export const NavBreak = styled.a`
  margin-left: 18px;
  margin-right: 18px;
  padding: 5px;
  padding-left: 5px;
  padding-right: 5px;
  color: ${colours.secondary};
  font-size: 16pt;
`;
