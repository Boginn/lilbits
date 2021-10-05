import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  display: flex;
`;

export const FormWrapper = styled.form`
  padding: 15px;
`;

export const Container = styled.div`
  border: 1px solid white;
  width: 100%;

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
    margin-top: 4px;
    margin-bottom: 4px;
    width: 100%;
    border: 1px solid white;
    border-radius: 10px;
    color: ${colours.tertiary};
    background-color: ${colours.background};
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
