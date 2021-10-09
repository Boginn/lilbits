import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import styled from 'styled-components';
import colours from '../../data/colours';

import { Container as _Container } from '../../material/material';
import { Btn as _Btn } from '../../material/material';

export const Wrapper = styled.div``;

export const FormWrapper = styled.form`
  padding: 25px;
`;

export const Container = styled(_Container)`
  height: 450px;
  padding: 0;
`;

export const Label = styled.label`
  && {
    text-shadow: 1px 1px 0 black;
    color: ${colours.tertiary};
    /* text-shadow: 2px 2px 0px black; */
  }
`;

export const Btn = styled(_Btn)`
  && {
    margin-top: 50px;
    font-size: 20pt;
  }
`;

export const InputField = styled(Input)`
  && {
    width: 100%;
    margin-top: 4px;
    margin-bottom: 4px;
    background-color: ${colours.tertiary};
    padding-left: 10px;
  }
`;

export const TextArea = styled(TextField)`
  && {
    width: 100%;
    margin-top: 4px;
    margin-bottom: 4px;
    background-color: ${colours.tertiary};
  }
`;
