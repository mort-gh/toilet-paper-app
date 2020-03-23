import React from 'react';
import Container from '@material-ui/core/Container';
import { Header } from '../components/header/Header';
import { Sliders } from '../components/sliders/Sliders';

export const TestPage = () => {
  return (
    <Container maxWidth='lg'>
      <Header />
      <Sliders />
    </Container>
  );
};
