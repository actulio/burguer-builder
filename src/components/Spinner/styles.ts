import styled, { keyframes } from 'styled-components';

import { Props } from '.';

const load1 = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4rem;
  }
  40% {
    box-shadow: 0 -2rem;
    height: 5rem;
  }
`;

export const Container = styled.div`
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -webkit-animation-delay: -0.1s;

  color: ${(props: Props) => props.color};
  text-indent: -9999rem;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  transform: translateZ(0);
  animation-delay: -0.1s;

  &,
  &::before,
  &::after {
    -webkit-animation: ${load1} 1s infinite ease-in-out;

    background: ${(props: Props) => props.color};
    animation: ${load1} 1s infinite ease-in-out;
    width: 1rem;
    height: 4rem;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    content: '';
  }
  &::before {
    -webkit-animation-delay: -0.2s;

    left: -1.5rem;
    animation-delay: -0.2s;
  }
  &::after {
    left: 1.5rem;
    animation-delay: 0.1s;
  }
`;
