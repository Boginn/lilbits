import styled from 'styled-components';
import colours from '../../../data/colours';

export const Text = styled.p`
  &&& {
    padding: 15px;
    border: 1px solid ${colours.tertiary};
    border-radius: 10px;
    color: ${colours.secondary};
    text-shadow: 0px 1px 0px black;
    font-style: italic;
    font-size: 12pt;
    font-weight: bold;

    background-color: ${colours.tertiary};
  }
`;
