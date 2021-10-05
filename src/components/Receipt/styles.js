import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 25px;
  background-color: ${colours.tertiary};
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
