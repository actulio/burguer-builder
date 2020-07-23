import React from 'react';

import { Container } from './styles';

export interface Props {
  color: string;
}

const Spinner = ({ color }: Props) => {
  return <Container color={color} />;
};

export default Spinner;
