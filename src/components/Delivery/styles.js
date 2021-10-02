import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div``;

export const Container = styled.div`
  border: 2px solid white;
  padding: 25px;
  height: 200px;
  width: 100%;

  background-color: ${colours.tertiary};
`;

export const Text = styled.p`
  color: ${colours.primary};
`;
