import styled from 'styled-components';

export const DefaultButton = color => {
  return styled.button`
    display: flex;
    align-self: center;
    justify-content: center;
    background-color: ${color.regular};
    border-radius: 5px;
    border: 0px none;
    width: 33px;
    height: 27px;
    color: #ffffff;
    outline-color: #ffffff;

    box-shadow: 0px 0px rgba(0, 0, 0, 0), 5px 5px 10px rgba(0, 0, 0, 0.1);

    :hover {
      background-color: ${color.hover};
    }

    :active {
      background-color: ${color.clicked};
    }
  `;
};
