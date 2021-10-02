import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div``;

export const Container = styled.div`
  border: 1px solid white;
  box-shadow: -2px 2px 2px 0px white;

  width: 100%;
  padding: 15px;

  background-color: ${colours.primary};
`;

export const Title = styled.h1`
  color: ${colours.tertiary};
  text-shadow: 2px 2px 0px black;
`;

export const Text = styled.p`
  color: ${colours.tertiary};
  /* text-shadow: 2px 2px 0px black; */
`;

export const DividerLine = styled.hr`
  width: 75%;
  border-color: ${colours.secondary};
  margin-top: 25px;
`;
