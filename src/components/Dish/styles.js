import styled from 'styled-components';
import colours from '../../data/colours';
import Button from '@mui/material/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 25px;
`;

export const Card = styled.div`
  display: flex;
  padding: 25px;
  width: 820px;
  height: 350px;
  box-shadow: 5px 5px 15px black;
  border-radius: 10px;
  background-color: ${colours.tertiaryHalf};
`;

export const UnderCard = styled.span`
  padding: 25px;
  /* overflow: hidden; */
  height: 300px;
  width: 100%;
  box-shadow: 5px 5px 15px black;

  border-radius: 3px;
  background-color: ${colours.primary};
`;

export const Image = styled.img`
  margin-right: 25px;
  width: 320px;
  background: white;
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

export const BtnWrapper = styled.div`
  && {
    width: 820px;
    padding: 25px;
  }
`;

export const Btn = styled(Button)`
  && {
    width: 100%;
    padding: 10px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 4px;
    border: 1px solid ${colours.tertiary};
    border-radius: 10px;
    color: ${colours.tertiary};
    background-color: ${colours.background};
    font-size: 20pt;
    &:hover {
      background-color: ${colours.secondary};
    }
  }
`;
