import styled from 'styled-components';
import colours from '../../data/colours';
import Button from '@mui/material/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 25px;
`;

export const Container = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  border: 1px solid ${colours.tertiary};
  border-radius: 5px;

  box-shadow: 1px 1px 1px 0px ${colours.tertiary};

  padding: 25px;

  background-color: ${colours.primary};
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  overflow: hidden;
  width: 820px;
  height: 350px;
  background: white;
  box-shadow: 5px 5px 15px black;
  border-radius: 10px;
`;

export const Image = styled.img`
  margin-right: 25px;
  width: 320px;
  background: white;
  box-shadow: 5px 5px 5px black;
`;

export const Btn = styled(Button)`
  && {
    width: 100%;
    padding: 10px;
    margin-top: 50px;
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
