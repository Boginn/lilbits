import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styled from 'styled-components';
import colours from '../../../data/colours';
import { fadeIn } from '../../../utilities/keyframes';

export const Wrapper = styled.div`
  padding: 15px;
`;

export const TextArea = styled(TextField)`
  margin: 0;
  color: white;
`;

export const Btn = styled(Button)`
  && {
    width: 100%;
    padding: 10px;
    margin-top: 50px;
    margin-bottom: 4px;
    border: 1px solid ${colours.tertiary};
    border-radius: 10px;
    color: ${colours.tertiary};
    background-color: ${colours.background};
    &:hover {
      background-color: ${colours.secondary};
    }
  }
`;

export const Selection = styled.p`
  padding: 5px;
  margin-bottom: 20px;
  color: white;
  text-decoration: underline;
`;

export const Message = styled.div`
  /* padding: 5px; */
  /* margin-right: 18px; */
  color: ${colours.tertiary};
  text-shadow: 1px 1px 0px black;
  text-align: center;
  animation: ${fadeIn} 1s linear;
`;
