import Item from '@mui/material/Grid';
import styled from 'styled-components';
import colours from '../../data/colours';
import { panning } from '../../utilities/keyframes';

export const Wrapper = styled.div``;

export const Container = styled.div`
  height: 600px;
  width: 100%;
  margin-left: 55px;
  border: 1px solid ${colours.tertiary};
`;

export const Image = styled(Item)`
  height: 600px;
  animation: ${panning} 25s infinite linear;
`;
