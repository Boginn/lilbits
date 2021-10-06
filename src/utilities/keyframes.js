import { keyframes } from 'styled-components';

export const panning = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
