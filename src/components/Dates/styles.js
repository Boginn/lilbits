import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  text-align: center;
  padding: 15px;
`;

export const TextArea = styled(TextField)`
  margin: 0;
  color: white;
`;

export const Btn = styled(Button)`
  && {
    width: 100%;
    margin-top: 4px;
    margin-bottom: 4px;
    border: 1px solid white;
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
