import colours from '../../data/colours';
import styled from 'styled-components';

import { Btn as _Btn } from '../../material/material';
import { Text as _Text } from '../../material/material';
import { Container as _Container } from '../../material/material';

export { DividerLine } from '../../material/material';

export { Title } from '../../material/material';

export const Wrapper = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 35px;
`;

export const OrderInfoContainer = styled(_Container)`
  background-color: ${colours.tertiaryHalf};
`;

export const Container = styled(_Container)``;

export const Text = styled(_Text)`
  text-align: center;
  font-size: 14pt;
`;

export const Btn = styled(_Btn)`
  && {
    font-size: 20pt;
    height: 100px;
  }
`;
