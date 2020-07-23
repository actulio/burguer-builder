import React from 'react';
import BurguerBuilder from '../BurguerBuilder';
import Sidebar from '../Sidebar';
import { Container } from './styles';
import Spinner from '../Spinner';

const Layout: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <BurguerBuilder />
      <Spinner color="#0dc5c1" />
    </Container>
  );
};

export default Layout;
