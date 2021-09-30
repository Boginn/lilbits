import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  width: 100%;
`;

export const DividerLine = styled.hr`
  width: 75%;
  border-color: ${colours.tertiary};
  margin-top: 100px;
`;

export const ContactInfo = styled.p`
  color: ${colours.tertiary};
  text-align: center;
`;
