import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import colours from '../../../data/colours';
import { Btn as Button } from '../../../material/material';

export const Wrapper = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
  border: 1px solid ${colours.tertiary};
  border-radius: 5px;

  text-align: center;

  box-shadow: 1px 1px 1px 0px ${colours.tertiary};

  padding: 25px;

  background-color: ${colours.primary};
`;

export const Container = styled(Grid)`
  && {
    width: 100%;
    justify-content: center;
    margin-top: 0px;
    margin-bottom: 4px;
    margin-left: 0px;
    /* border: 1px solid ${colours.tertiary}; */
    border-radius: 10px;
    color: ${colours.tertiary};
    /* background-color: ${colours.background}; */
  }
`;

export const Item = styled(Grid)`
  &&& {
    display: flex;
    width: 140px;
    margin: 3px;
    padding: 3px;
    border: 1px solid ${colours.tertiary};
    border-radius: 10px;
    color: ${colours.tertiary};
    background-color: ${colours.background};
    &:hover {
      cursor: pointer;
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

export const Input = styled.input.attrs({ type: 'checkbox' })`
  &&& {
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    margin-top: -1px;

    &:before {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      background-color: ${colours.tertiaryHalf};
    }
    &:checked:before {
      content: '';
      width: 20px;
      height: 20px;
      background-color: ${colours.tertiary};
    }
    &:checked:after {
      content: '';

      width: 5px;
      height: 10px;
      border: solid ${colours.primary};
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      top: 2px;
      left: 6px;
    }
  }
`;
