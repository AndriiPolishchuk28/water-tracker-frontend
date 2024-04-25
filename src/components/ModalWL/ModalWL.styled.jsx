import styled from 'styled-components';
import Button from '@mui/material/Button';

export const ModalWrap = styled.div`
  width: 800px;
`;

export const ModalContent = styled.div`
  width: 800px;
`;

export const ModalReverse = styled.div`
  // display: flex;
  // flex-direction: column-reverse;
`;

export const OpenButton = styled.button`
  cursor: pointer;
  // width: 182px;
  height: 24px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #407bff;
  // border: 1px solid #407BFF;
  &:before {
    content: '+';
    margin: 0 8px 0 0;
  }
`;

export const CustomButton = ({
  children,
  onClick,
  color,
  backgroundColor,
  hoverColor,
}) => (
  <Button
    onClick={onClick}
    sx={{
      marginLeft: '0px !important',
      padding: '10px 30px',
      borderRadius: '10px',
      backgroundColor,
      color,
      minWidth: 160,
      height: 44,
      textTransform: 'capitalize',
      lineHeight: 1.33,
      '&:hover': {
        boxShadow: `0 4px 8px 0 ${hoverColor}`,
        backgroundColor,
      },
      '@media only screen and (max-width: 768px)': {
        width: '100%',
        height: '36px',
        padding: '8px 30px',
        marginLeft: '0px !important',
      },
    }}
  >
    {children}
  </Button>
);
