import React from 'react';
import { Button, Content, Description, Header, Tags, Label } from './styles';

export default function Card() {
  return (
    <Content>
      <Header>
        <Label>Notion</Label>
        <Button> x </Button>
      </Header>
      <Description>
        All in one tool to organize teams and ideas. Write, plan, collaborate,
        and get organized.
      </Description>
      <Tags>#organization #planning #collaboration #writing #calendar</Tags>
    </Content>
  );
}
