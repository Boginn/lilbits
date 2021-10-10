import styled from 'styled-components';

import { Btn as _Btn } from '../../material/material';
import { Title as _Title } from '../../material/material';
import { SubTitle as _SubTitle } from '../../material/material';

export { DividerLine } from '../../material/material';

export { BtnWrapper } from '../../material/material';

export { Card } from '../../material/material';

export { UnderCard } from '../../material/material';

export { Image } from '../../material/material';

export const Wrapper = styled.div`
  padding: 25px;
`;

export const Title = styled(_Title)`
  text-align: center;
`;

export const SubTitle = styled(_SubTitle)`
  align-items: flex-end;
  height: 40px;
`;

export const Btn = styled(_Btn)`
  && {
    margin-top: 50px;
    font-size: 20pt;
  }
`;
