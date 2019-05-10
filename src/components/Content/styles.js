import styled from 'styled-components';
import { DefaultButton } from '../../DefaultStyles';
import searchIcon from '../../icons/Icon-Search@2px.svg';

const Colors = {
  regular: 'rgba(54, 93, 240, 1)',
  hover: 'rgba(47, 85, 204, 1)',
  clicked: 'rgba(36, 74, 168, 1)'
};

export const Controllers = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  height: 25px;
  width: 250px;

  ::placeholder {
    padding-left: 25px;
    background: url(${searchIcon}) no-repeat 5px;
    background-size: 15px;
  }
`;

export const CheckBox = styled.input`
  margin: 0 10px;
  width: 14px;
  height: 14px;
`;

export const CheckBoxLabel = styled.label`
  font-family: Source Sans Pro;
`;

export const Button = DefaultButton(Colors);

export const ButtonArea = styled.div`
  margin-right: 15px;
`;
