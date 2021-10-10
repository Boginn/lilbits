import styled from 'styled-components';
import colours from '../../data/colours';

import { Btn as Button } from '../../material/material';
import { Title as _Title } from '../../material/material';
import { SubTitle as _SubTitle } from '../../material/material';
import { Description as _Description } from '../../material/material';

export { DividerLine } from '../../material/material';

export { Card } from '../../material/material';

export { UnderCard } from '../../material/material';

export { Image } from '../../material/material';

export { Text } from '../../material/material';

export { BtnWrapper } from '../../material/material';

export const Wrapper = styled.div`
  padding: 25px;
`;

export const Description = styled(_Description)`
  &&& {
    color: ${colours.primary};
    text-shadow: 1px 1px 0px black;
    font-size: 13pt;
    max-height: 150px;
    background-color: ${colours.tertiaryHalf};
  }
`;

export const ImageWrapper = styled.span`
  width: 320px;
`;

export const Title = styled(_Title)`
  text-align: center;
`;

export const SubTitle = styled(_SubTitle)`
  align-items: flex-end;
  height: 40px;
`;

export const Btn = styled(Button)`
  && {
    margin-top: 50px;
    font-size: 20pt;
  }
`;
