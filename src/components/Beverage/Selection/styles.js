import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import colours from '../../../data/colours';
import Button from '@mui/material/Button';

export const MetaWrapper = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 5px;
  width: 100%;
  text-align: center;

  padding: 25px;
`;

export const Wrapper = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
  border: 1px solid ${colours.tertiary};
  border-radius: 5px;

  text-align: center;

  box-shadow: 1px 1px 1px 0px ${colours.tertiary};

  padding: 25px;

  background-color: ${colours.primary};
`;

export const Container = styled(Grid)`
  && {
    width: 100%;
    justify-content: center;
    padding: 15px;
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: 0px;
    border: 1px solid ${colours.tertiary};
    border-radius: 10px;
    color: ${colours.tertiary};
    background-color: ${colours.background};
  }
`;

export const Btn = styled(Button)`
  && {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 4px;
    border: 1px solid ${colours.tertiary};
    border-radius: 10px;
    color: ${colours.tertiary};
    background-color: ${colours.background};
    &:hover {
      background-color: ${colours.secondary};
    }
  }
`;

export const List = styled.div`
  && {
    padding: 5px;

    border: 1px solid ${colours.tertiary};
    color: ${colours.tertiary};
    background-color: ${colours.background};
  }
`;

export const ListItem = styled.div`
  && {
    display: flex;

    justify-content: space-between;
    cursor: pointer;
    width: 100%;
    margin-top: 2px;
    margin-bottom: 2px;
    /* border: 1px solid ${colours.tertiary}; */
    color: ${colours.tertiary};
    background-color: ${colours.background};
    &:hover {
      background-color: ${colours.secondary};
    }
  }
`;
