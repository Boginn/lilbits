import { Btn as Button } from '../../../material/material';
import styled from 'styled-components';
import colours from '../../../data/colours';

export const Wrapper = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  border: 1px solid ${colours.tertiary};
  border-radius: 5px;

  text-align: center;

  box-shadow: 1px 1px 1px 0px ${colours.tertiary};

  padding: 25px;

  background-color: ${colours.primary};
`;

export const List = styled.div`
  && {
    padding: 15px;

    border: 1px solid ${colours.tertiary};
    color: ${colours.tertiary};
    background-color: ${colours.background};
  }
`;

export const ListItem = styled.div`
  && {
    display: flex;

    justify-content: space-between;
    cursor: pointer;
    width: 100%;
    margin-top: 2px;
    margin-bottom: 2px;
    /* border: 1px solid ${colours.tertiary}; */
    color: ${colours.tertiary};
    background-color: ${colours.background};
    &:hover {
      background-color: ${colours.secondary};
    }
  }
`;

export const SubTitle = styled.h3`
  padding: 0;
  margin: 0;
  color: ${colours.tertiary};
  text-shadow: 2px 2px 0px black;
  text-align: start;
`;

export const Btn = styled(Button)`
  && {
  }
`;
