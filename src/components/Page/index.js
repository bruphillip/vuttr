import React from 'react';
import { Main, MainPage } from './styles';
import Header from '../Header';
import Content from '../Content';
import Cards from '../Cards';

export default function Page() {
  return (
    <Main>
      <MainPage>
        <Header />
        <Content />
        <Cards />
      </MainPage>
    </Main>
  );
}
