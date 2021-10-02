import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.nav`
  display: flex;
  margin: 10px;
  justify-content: center;
`;

export const NavItem = styled.a`
  margin-left: 18px;
  margin-right: 18px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  color: ${colours.tertiary};
  text-shadow: 2px 2px black;
  font-size: 16pt;

  &:hover {
    cursor: pointer;
    color: ${colours.primary};
    background-color: ${colours.tertiary};
  }
`;

export const NavBreak = styled.a`
  margin-left: 18px;
  margin-right: 18px;
  padding: 5px;
  padding-left: 5px;
  padding-right: 5px;
  color: ${colours.tertiary};
  text-shadow: 2px 2px black;
  font-size: 16pt;
`;
