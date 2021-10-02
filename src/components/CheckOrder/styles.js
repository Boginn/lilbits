import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div``;

export const Container = styled.div`
  padding: 25px;
  border: 2px solid white;
  height: 200px;

  background-color: ${colours.tertiary};
`;

export const Title = styled.h1`
  color: ${colours.primary};
`;

export const SubTitle = styled.h3`
  color: ${colours.primary};
  /* text-shadow: 2px 2px 0px black; */
`;

export const DividerLine = styled.hr`
  width: 75%;
  border-color: ${colours.secondary};
  margin-top: 25px;
`;
