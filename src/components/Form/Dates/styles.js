import styled from 'styled-components';
import colours from '../../../data/colours';
import { Icon as _Icon } from '@iconify/react';

export const Wrapper = styled.div`
  padding: 15px;
`;

export const Icon = styled(_Icon)`
  font-size: 51px;
  vertical-align: middle;
`;

export const DatePickerWrapper = styled.div`
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid ${colours.tertiary};
  background-color: ${colours.background};
`;

export { Btn } from '../../../material/material';

export { Message } from '../../../material/material';
