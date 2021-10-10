import styled from 'styled-components';
import colours from '../../../data/colours';
import Input from '@mui/material/Input';

import { Btn as _Btn } from '../../../material/material';
import { Title as _Title } from '../../../material/material';
import { SubTitle as _SubTitle } from '../../../material/material';

export { DividerLine } from '../../../material/material';

export { Message } from '../../../material/material';

export const Wrapper = styled.div`
  text-align: center;
`;

export const Btn = styled(_Btn)`
  && {
    width: fit-content;
    margin: 0;
  }
`;

export const InputField = styled(Input)`
  && {
    margin-top: 4px;
    margin-bottom: 4px;
    margin-right: 4px;
    height: 40px;
    background-color: ${colours.tertiary};
    padding-left: 10px;
    vertical-align: middle;
  }
`;

export const Container = styled.div`
  padding: 25px;
`;

export const Title = styled(_Title)`
  margin: 2px;
`;

export const SubTitle = styled(_SubTitle)`
  margin: 2px;
`;
