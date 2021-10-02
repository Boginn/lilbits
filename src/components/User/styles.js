import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  border: 1px solid white;

  width: 100%;
  padding: 15px;

  background-color: ${colours.primary};
`;

export const Title = styled.h1`
  color: ${colours.tertiary};
`;

export const SubTitle = styled.h3`
  margin-top: 4px;
  margin-bottom: 4px;
  color: ${colours.tertiary};
  /* text-shadow: 2px 2px 0px black; */
`;

export const Btn = styled(Button)`
  && {
    margin-top: 4px;
    margin-bottom: 4px;
    width: 100%;
    border: 1px solid white;
    color: ${colours.tertiary};
    &:hover {
      background-color: ${colours.secondary};
    }
  }
`;

export const InputField = styled(Input)`
  margin: 0;
  background-color: ${colours.tertiary};
`;

export const TextArea = styled(TextField)`
  margin: 0;
  background-color: ${colours.tertiary};
`;
