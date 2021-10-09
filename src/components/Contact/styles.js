import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  border: 2px solid white;
  padding: 25px;
  height: 175px;
  width: 100%;
  background-color: ${colours.tertiary};
`;

export const Container = styled.div`
  border: 2px solid white;
  padding: 25px;
  background-color: ${colours.primary};
`;

export const Item = styled.a`
  display: flex;
  color: ${colours.tertiary};
  font-size: 16pt;
  font-weight: bold;
  text-align: center;

  width: 100px;
`;

export const Text = styled.div`
  color: ${colours.tertiary};
  font-size: 16pt;
  font-weight: bold;
  margin-bottom: 20px;
  width: 100px;
  text-align: center;
`;
