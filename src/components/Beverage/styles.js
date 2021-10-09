import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import colours from '../../data/colours';
// import Button from '@mui/material/Button';
import { Btn as Button } from '../../material/material';

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

  text-align: center;

  box-shadow: 1px 1px 1px 0px ${colours.tertiary};

  padding: 25px;

  background-color: ${colours.primary};
`;

export const Categories = styled(Grid)`
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

export const Item = styled(Grid)`
  &&& {
    display: flex;
    width: 140px;
    margin: 3px;
    padding: 5px;
    border: 1px solid ${colours.tertiary};
    border-radius: 10px;
    color: ${colours.tertiary};
    background-color: ${colours.background};
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  text-align: center;
  padding: 25px;
  /* width: 820px; */
  /* width: fit-content; */
  min-height: 350px;
  max-height: 450px;
  box-shadow: 5px 5px 15px black;
  border-radius: 10px;
  background-color: ${colours.tertiaryHalf};
`;

export const UnderCard = styled.span`
  padding: 25px;
  /* overflow: hidden; */
  min-height: 300px;
  max-height: 400px;
  box-shadow: 5px 5px 15px black;

  border-radius: 3px;
  background-color: ${colours.primary};
`;

export const ImageWrapper = styled.span`
  width: 320px;
  justify-content: center;
  text-align: center;
`;

export const Image = styled.img`
  margin-right: 25px;
  height: 350px;
  border: 2px solid ${colours.primary};
  box-shadow: 3px 3px 3px black;
  border-top-left-radius: 10px;
`;

export const Title = styled.h1`
  color: ${colours.tertiary};
  text-shadow: 2px 2px 0px black;
  text-align: center;
`;

export const SubTitle = styled.h3`
  display: flex;
  align-items: flex-end;
  height: 40px;
  color: ${colours.tertiary};
  text-shadow: 2px 2px 0px black;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  color: ${colours.tertiary};
  /* text-shadow: 2px 2px 0px black; */
`;

export const DividerLine = styled.hr`
  width: 75%;
  border-color: ${colours.secondary};
  margin-top: 25px;
`;

export const Description = styled.p`
  &&& {
    padding: 15px;
    border: 1px solid ${colours.tertiary};
    border-radius: 10px;
    color: ${colours.primary};
    text-shadow: 1px 1px 0px black;
    font-size: 13pt;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 150px;

    background-color: ${colours.tertiaryHalf};
  }
`;

export const BtnWrapper = styled.div`
  && {
    display: flex;
    text-align: center;
    margin: auto;
    width: fit-content;
    padding: 25px;
  }
`;

export const Btn = styled(Button)`
  && {
    margin-top: 50px;
    font-size: 20pt;
  }
`;
