import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormWrapper = styled.form`
  padding: 25px;
`;

export const Container = styled.div`
  border: 1px solid ${colours.tertiary};
  height: 450px;
  display: flex;
  justify-content: center;
  background-color: ${colours.primary};
`;

export const Title = styled.h1`
  color: ${colours.tertiary};
`;

export const Label = styled.label`
  && {
    text-shadow: 1px 1px 0 black;

    color: ${colours.tertiary};
    /* text-shadow: 2px 2px 0px black; */
  }
`;

export const Btn = styled(Button)`
  && {
    font-size: 20pt;
    text-shadow: 2px 2px 0px black;
    margin-top: 4px;
    margin-bottom: 4px;
    width: 100%;
    height: 75px;
    border: 1px solid ${colours.tertiary};
    border-radius: 10px;
    color: ${colours.tertiary};
    text-shadow: 1px 1px 0 black;
    &:hover {
      background-color: ${colours.secondary};
    }
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
