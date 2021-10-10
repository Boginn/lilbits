import { Btn as _Btn } from '../../material/material';
import { Card as _Card } from '../../material/material';
import { Text as _Text } from '../../material/material';
import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  padding: 25px;
`;

export const Card = styled(_Card)`
  text-align: start;
`;

export const DishImage = styled.img`
  margin-right: 25px;
  width: 320px;
  border: 3px solid ${colours.primary};
  box-shadow: 3px 3px 3px black;
  border-top-left-radius: 10px;
`;

export const BeverageImage = styled.img`
  margin-right: 25px;
  height: 350px;
`;

export const TitleText = styled.p`
  color: ${colours.tertiary};
  text-shadow: 1px 1px 0px black;
`;

export const Text = styled(_Text)`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  color: ${colours.tertiary};
  border-radius: 20px;
  text-align: center;
  text-shadow: 1px 1px 0px black;
  background: ${colours.primary};
`;

export const TitleBorder = styled.h1`
  color: ${colours.tertiary};
  text-align: center;
  text-shadow: 1px 1px 0px black;
  background: ${colours.background};
  padding: 5px;
  border-radius: 0px;
  border: 1px solid ${colours.tertiary};
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

export const Btn = styled(_Btn)`
  && {
    margin-top: 50px;
    font-size: 20pt;
  }
`;
