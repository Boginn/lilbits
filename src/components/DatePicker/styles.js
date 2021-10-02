import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  display: flex;
`;

export const TextArea = styled(TextField)`
  margin: 0;
  color: white;
`;

export const Btn = styled(Button)`
  && {
    margin-top: 4px;
    margin-bottom: 4px;
    border: 1px solid white;
    color: ${colours.tertiary};
    &:hover {
      background-color: ${colours.secondary};
    }
  }
`;
