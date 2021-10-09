import { Btn as _Btn } from '../../../material/material';
import { Card as _Card } from '../../../material/material';
import { Text as _Text } from '../../../material/material';
import styled from 'styled-components';
import colours from '../../../data/colours';

export const Wrapper = styled.div`
  padding: 25px;
`;

export const Card = styled(_Card)`
  text-align: start;
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
