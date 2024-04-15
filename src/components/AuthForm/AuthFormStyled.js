import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';


export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 16px;
  }
`
export const InputWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
position: relative;
`
export const StaledLabel = styled.label`
font-weight: 400;
font-size: 18px;
line-height: 1.33;
color: var(--primary-color-black);
`
export const StyledField = styled(Field)`
border: var(--secondary-color-blue-3);
border-radius: 6px;
padding: 12px 10px;
width: 280px;
height: 44px;
color: var(--primary-color-blue);
background: var(--primary-color-white);
&::placeholder {
    line-height: 1.25;
    color: var(--secondary-color-blue-2);
  }
&:focus {
    border-color: var(--secondary-color-blue-1); 
  }
  &:hover {
    border-color: var(--secondary-color-blue-1);
  }

  &:valid {
    color: var(--primary-color-blue);
  }
  &:invalid {
    color: var(--secondary-color-red);
    border-color: var(--secondary-color-red);
  }
 
  }
`
export const SvgIcon = styled.svg`
fill: var(--primary-color-blue);
position: absolute;
top: 70%;
  right: 10px;
  transform: translateY( -50%);
  cursor: pointer;
  display: block;
`
 
export const StyledErrorMessage = styled(ErrorMessage)`
font-weight: 400;
font-size: 12px;
line-height: 1.25;
color: var(--secondary-color-red);
`
export const Button= styled.button`
border-radius: 10px;
padding: 8px 30px;
width: 280px;
height: 36px;
font-weight: 500;
text-align: center;
display: flex;
  justify-content: center;
  align-items: center;
color: var(--primary-color-white);
box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
background: var(--primary-color-blue);
margin-bottom: 16px;
`