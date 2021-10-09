//style objects
export const hideOverflow = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};
export const displayCenter = { justifyContent: 'center', display: 'flex' };

import styled from 'styled-components';
import colours from '../data/colours';
import Button from '@mui/material/Button';

// styled components
export const Btn = styled(Button)`
  && {
    width: 100%;
    padding: 10px;
    margin: 1px;
    margin-top: 10px;
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

export const Title = styled.h1`
  color: ${colours.tertiary};
  text-shadow: 2px 2px 0px black;
`;
