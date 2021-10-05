import Item from '@mui/material/Grid';

import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div``;

export const Container = styled.span`
  height: 600px;
  /* background-color: ${colours.secondary}; */
`;

export const Image = styled(Item)`
  height: 600px;
  min-width: 100%;
  object-fit: contain;
`;
