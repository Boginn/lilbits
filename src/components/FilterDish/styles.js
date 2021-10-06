import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  margin-left: 50px;
  margin-right: 50px;
`;

export const Container = styled.div`
  border: 1px solid ${colours.tertiary};
  border-radius: 5px;

  box-shadow: 1px 1px 1px 0px ${colours.tertiary};

  width: 100%;
  padding: 25px;

  background-color: ${colours.primary};
`;

export const Title = styled.h1`
  color: ${colours.tertiary};
  text-shadow: 2px 2px 0px black;
  text-align: center;
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
