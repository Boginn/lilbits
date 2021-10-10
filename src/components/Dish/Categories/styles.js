import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import colours from '../../../data/colours';
import { Container as _Container } from '../../../material/material';
import { SubTitle as _SubTitle } from '../../../material/material';

export { Btn } from '../../../material/material';

export const Wrapper = styled(_Container)`
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
  width: auto;
`;

export const List = styled(Grid)`
  && {
    width: 100%;
    margin: 0;
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

export const SubTitle = styled(_SubTitle)`
  padding: 0;
  margin: 0;
  text-align: start;
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
