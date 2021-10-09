import styled from 'styled-components';
import { Btn as _Btn } from '../../material/material';
import { SubTitle as _SubTitle } from '../../material/material';
import { Container as _Container } from '../../material/material';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 35px;
`;

export const OrderInfoContainer = styled(_Container)`
  background-color: ${colours.tertiaryHalf};
`;

export const Container = styled(_Container)``;

export { Title } from '../../material/material';

export { Text } from '../../material/material';

export const SubTitle = styled(_SubTitle)`
  text-align: center;
  /* text-shadow: 2px 2px 0px black; */
`;

export { DividerLine } from '../../material/material';

export const Btn = styled(_Btn)`
  && {
    font-size: 20pt;
    height: 100px;
  }
`;
