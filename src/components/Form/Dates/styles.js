import styled from 'styled-components';
import colours from '../../../data/colours';
import { fadeIn } from '../../../utilities/keyframes';

export const Wrapper = styled.div`
  padding: 15px;
`;

export const DatePickerWrapper = styled.div`
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid ${colours.tertiary};
  background-color: ${colours.background};
`;

export { Btn } from '../../../material/material';

export const Message = styled.div`
  color: ${colours.tertiary};
  text-shadow: 1px 1px 0px black;
  text-align: center;
  animation: ${fadeIn} 1s linear;
`;
