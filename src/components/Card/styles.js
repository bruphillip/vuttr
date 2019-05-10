import styled from 'styled-components';
import { DefaultButton } from '../../DefaultStyles';

const Colors = {
  regular: 'rgba(249, 94, 90, 1)',
  hover: 'rgba(204, 76, 76, 1)',
  clicked: 'rgba(165, 63, 63, 1)'
};

export const Content = styled.div`
  margin: 25px 0;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 1);
  padding: 15px;
  height: 150px;
  border: 1px double #ebeaed;
  box-shadow: 0px 15px rgba(0, 0, 0, 0), 0px 15px 20px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
  font-weight: bold;
  font-family: Source Sans Pro, Semibold;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.h3`
  box-sizing: border-box;
  text-decoration: underline;
`;

export const Button = DefaultButton(Colors);

export const Description = styled.div`
  margin: 10px 0px;
  font-style: Source Sans Pro;
  color: rgba(143, 138, 155, 1);
`;

export const Tags = styled.div`
  font-stretch: condensed;
  font-weight: 900;
`;
