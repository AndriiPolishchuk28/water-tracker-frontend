import styled from 'styled-components';

export const ModalWrap = styled.div`
  width: 800px;
`;

export const ModalContent = styled.div`
  width: 800px;
`;

export const OpenButton = styled.button`
  cursor: pointer;
  height: 24px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #407bff;
    &:before {
      content: '+';
      margin: 0 8px 0 0;
    }
`;
