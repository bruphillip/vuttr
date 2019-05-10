import React from 'react';
import { Content, MainLabel, SecondaryLabel } from './styles';

export default function Header() {
  return (
    <header>
      <Content>
        <MainLabel>VUTTR</MainLabel>
        <SecondaryLabel>Very Userful Tools to Remember</SecondaryLabel>
      </Content>
    </header>
  );
}
