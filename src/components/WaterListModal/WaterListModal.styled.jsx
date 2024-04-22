import styled from 'styled-components';
import {TextField, MenuItem} from '@mui/material';
// import { OutlinedInput } from '@mui/material';
// import { styled } from '@mui/system';

export const OpenButton = styled.button`
    width: 280px;
    height: 36px;
    padding: 6px 76px 6px 76px;
    border-radius: 10px 0px 0px 0px;
    opacity: 0px;
    background-color: #407BFF;
`

export const Container = styled.div`
position: relative;
    width: 100%;
    max-height: 100%;
    // margin: 10px auto;
    padding: 24px 12px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    // background-color: #ccc;
    border-radius: 10px;
        @media only screen and (min-width: 768px) {
            width: 704px;
            height: 100%;
        }
        @media only screen and (min-width: 1440px){
            width: 592px;
        }
`

export const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
`
export const Title = styled.h2`
    font-family: Roboto;
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
`
export const CloseButton = styled.button`
    width: 24px;
    height: 24px;
    border: 1px solid #407BFF;
    border-radius: 50%;
    cursor: pointer;
`
export const ResultContainer = styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 52px;
    background-color: #ECF2FF;
    border-radius: 10px;
    padding: 8px 24px;
        
    @media only screen and (min-width: 768px) {
        width: 256px;
        height: 52px;
        padding: 8px 24px;
    }
`
export const WaterGlass = styled.svg`
width: 24px;
height: 24px;
fill: var(--primary-color-blue);
`
export const ResultMl = styled.span`
display: block;
font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 24px;
color: var(--primary-color-blue);
`
export const ResultTime = styled.span`
display: block;
font-family: Roboto;
font-size: 12px;
font-weight: 400;
line-height: 24px;
color: #2F2F2F;
`
export const DataContainer = styled.div`
width: 194px;
display: flex;
flex-direction: column;
gap: 16px;
`
export const DataTitle = styled.h3`
font-family: Roboto;
font-size: 18px;
font-weight: 500;
line-height: 20px;
color: #2F2F2F;
`
export const DataText = styled.p`
font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 20px;
color: #2F2F2F;
`
export const DataBtnsContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 6px;
`
export const DataBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 44px;
height: 44px;
border-radius: 50%;
border: 1px solid #9EBBFF;
// opacity: 0px;
cursor: pointer;
background-color: transparent;
padding: 0;
    &:hover{
        box-shadow: 0px 2px 4px 0px #407BFF33;
    }
`
export const DataDeleteBtn = styled.button`

`
export const DataResult = styled.p`
width: 92px;
height: 36px;
padding: 6px 10px 6px 10px;
border-radius: 40px;
background-color: #D7E3FF;
color: #407BFF;
font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 24px;
display: flex;
justify-content: center;
align-items: center;
`
export const LabelTime = styled.label`
font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 20px;
color: #2F2F2F;
`
export const LabelMl = styled.label`
font-family: Roboto;
font-size: 18px;
font-weight: 500;
line-height: 20px;
color: #2F2F2F;
`
export const InputTime = styled(TextField)`
    width: 100%;
    height: 44px;
    padding: 12px 10px;
    border-radius: 6px;
    border: 1px solid #D7E3FF;
    color: #407BFF;
    outline: none;

    @media only screen and (min-width: 768px) {
        width: 544px;
    }
    @media only screen and (min-width: 1440px) {
        width: 100%;  
    }
`;

export const MenuItemCustom = styled(MenuItem)`
width: 100%;
height: 44px;
padding: 12px 10px;
border-radius: 6px;
border: 1px solid #D7E3FF;
color: #407BFF;
outline: none;

@media only screen and (min-width: 768px) {
    width: 544px;
}
@media only screen and (min-width: 1440px) {
    width: 100%;  
}
`

export const InputMl = styled.input`
width: 100%;
height: 44px;
padding: 12px 10px;
border-radius: 6px;
border: 1px solid #D7E3FF;
color: #407BFF;
outline: none;

    @media only screen and (min-width: 768px) {
        width: 544px;  
    }
    @media only screen and (min-width: 1440px) {
        width: 100%;  
    }

`
export const SaveContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 16px;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: end;
        gap: 10px;
    }
`
export const SaveResultTxt = styled.p`
font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 24px;
text-align: center;
color: var(--primary-color-blue);

    @media only screen and (min-width: 768px) {
        width: 72px;
    }
`
export const SaveBtn = styled.button`
width: 100%;
padding: 8px 30px;
border-radius: 10px;
background-color: var(--primary-color-blue);
color: #fff;
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 20px;
cursor: pointer;
    &:hover{
        box-shadow: 0px 4px 8px 0px #407BFF57;
    }
    @media only screen and (min-width: 768px) {
        width: 166px;
    }
`
export const IconBtn = styled.svg`
    width: 24px;
    height: 24px;
    fill: var(--primary-color-blue);
    z-index: 999;
`