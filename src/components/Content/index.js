import React, { useState } from 'react';
import {
  SearchArea,
  Controllers,
  SearchInput,
  Button,
  CheckBox,
  CheckBoxLabel,
  ButtonArea
} from './styles';

import AddTool from '../Modal/AddTool';

export default function Content() {
  const [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }

  return (
    <Controllers>
      <SearchArea>
        <SearchInput type="text" placeholder="search" />
        <div>
          <CheckBox type="checkbox" />
          <CheckBoxLabel>search in tag only</CheckBoxLabel>
        </div>
      </SearchArea>
      <ButtonArea>
        <Button onClick={open}>+</Button>
      </ButtonArea>
      <AddTool open={open} close={close} isOpen={isOpen} />
    </Controllers>
  );
}
