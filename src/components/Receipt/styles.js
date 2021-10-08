import Button from '@mui/material/Button';
import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 25px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;

  padding: 25px;
  overflow: hidden;
  height: 400px;
  background: white;
  box-shadow: 5px 5px 15px black;
  border-radius: 10px;
  background-color: ${colours.tertiaryHalf};
`;

export const DishImage = styled.img`
  margin-right: 25px;
  width: 320px;
  background: white;
  border: 3px solid ${colours.primary};
  box-shadow: 3px 3px 3px black;
  border-top-left-radius: 10px;
`;

export const BeverageImageWrapper = styled.div`
  width: 320px;
  justify-content: center;
  text-align: center;
`;

export const BeverageImage = styled.img`
  margin-right: 25px;
  height: 350px;
`;

export const TitleText = styled.p`
  color: ${colours.tertiary};
  text-shadow: 1px 1px 0px black;
`;

export const Text = styled.p`
  color: ${colours.tertiary};
`;

export const Title = styled.h1`
  color: ${colours.tertiary};
  border-radius: 20px;
  text-align: center;
  text-shadow: 1px 1px 0px black;
  background: ${colours.primary};
`;

export const SubTitle = styled.p`
  color: ${colours.primary};
  font-weight: bold;
  font-size: 14pt;
  padding: 3px;
  width: 100%;
  border-radius: 10px;
  text-align: center;
  text-shadow: 1px 1px 0px black;

  background: ${colours.tertiary};
`;

export const Description = styled.div`
  border: 1px solid ${colours.tertiary};
  border-radius: 5px;

  box-shadow: 1px 1px 1px 0px ${colours.tertiary};

  padding: 10px;
  max-height: 200px;

  background-color: ${colours.primary};
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
