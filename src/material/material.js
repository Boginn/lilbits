import styled from 'styled-components';
import colours from '../data/colours';
import Button from '@mui/material/Button';
import { fadeIn } from '../utilities/keyframes';

//style objects
export const hideOverflow = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};
export const displayCenter = { justifyContent: 'center', display: 'flex' };
export const displayBetween = {
  justifyContent: 'space-between',
  display: 'flex',
};

// styled components

// items
export const Btn = styled(Button)`
  && {
    width: 100%;
    padding: 10px;
    margin: 1px;
    margin-top: 10px;
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

export const DividerLine = styled.hr`
  width: 75%;
  border-color: ${colours.secondary};
  margin-top: 25px;
`;

export const ListItem = styled.div`
  && {
    cursor: pointer;
    margin-top: 2px;
    margin-bottom: 2px;
    color: ${colours.tertiary};
    background-color: ${colours.background};
    &:hover {
      background-color: ${colours.secondary};
    }
  }
`;

export const Message = styled.div`
  color: ${colours.tertiary};
  text-shadow: 1px 1px 0px black;
  text-align: center;
  animation: ${fadeIn} 1s linear;
`;

// text
export const Text = styled.p`
  color: ${colours.tertiary};
`;

export const Title = styled.h1`
  color: ${colours.tertiary};
  text-shadow: 2px 2px 0px black;
`;

export const SubTitle = styled.h3`
  color: ${colours.tertiary};
  text-shadow: 2px 2px 0px black;
`;

//containers
export const Container = styled.div`
  border: 1px solid ${colours.tertiary};
  border-radius: 5px;
  box-shadow: 1px 1px 1px 0px ${colours.tertiary};

  width: 100%;
  padding: 25px;

  background-color: ${colours.primary};
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

export const Image = styled.img`
  margin-right: 25px;
  height: 350px;
  border: 2px solid ${colours.primary};
  box-shadow: 3px 3px 3px black;
  border-top-left-radius: 10px;
`;

export const Description = styled.p`
  &&& {
    padding: 15px;
    border: 1px solid ${colours.tertiary};
    border-radius: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const List = styled.div`
  && {
    padding: 15px;
    border: 1px solid ${colours.tertiary};
    color: ${colours.tertiary};
    background-color: ${colours.background};
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
  width: 100%;
  border-radius: 3px;
  background-color: ${colours.primary};
`;
