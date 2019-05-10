import styled from 'styled-components';
import { DefaultButton } from '../../DefaultStyles';

const Colors = {
  regular: '#365DF0',
  hover: '#2F55CC',
  clicked: '#244AA8'
};

export const View = styled.div`
  ${props => props.visibility}

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalCard = styled.div`
  border-radius: 10px;
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;

  border-bottom: 1px double #ebeaed;
`;

export const Button = DefaultButton(Colors);

export const ModalContent = styled.div`
  padding: 20px;
`;
