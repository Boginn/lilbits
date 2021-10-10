import styled from 'styled-components';
import colours from '../../../data/colours';

import { Description as _Description } from '../../../material/material';

export const Description = styled(_Description)`
  &&& {
    color: ${colours.secondary};
    text-shadow: 0px 1px 0px black;
    font-style: italic;
    font-size: 12pt;
    font-weight: bold;
    max-height: 80px;
    background-color: ${colours.tertiary};
  }
`;
