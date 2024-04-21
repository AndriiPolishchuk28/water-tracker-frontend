import styled from "styled-components";

export const Title = styled.h3`
font-family: Roboto;
font-size: 24px;
font-weight: 500;
line-height: 30px;
text-align: left;
`
export const List = styled.ul`
    width: 100%;
    margin-bottom: 16px;
    max-height: 150px;
    overflow-y: auto;
`
export const ListElem = styled.li`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #D7E3FF;
    padding: 5px;
    height: 50px;
`
export const ListElemInfoContainer = styled.div`
width: 70%;
display: flex;
justify-content: start;
align-items: center;
gap: 12px;

        @media only screen and (min-width: 768px) {
            width: 50%;
        }
   
`
export const ListElemButtonsContainer = styled.div`
width: 30%;
display: flex;
justify-content: end;
align-items: center;
gap: 18px;

        @media only screen and (min-width: 768px) {
            width: 50%;
            
        }

`
export const Icon = styled.svg`
width:24px;
height:24px;
fill: #407BFF;
`
export const ResultMl = styled.span`
font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 24px;
color: #407BFF;
`
export const ResultTime = styled.span`
font-family: Roboto;
font-size: 12px;
font-weight: 400;
line-height: 24px;
color: #2F2F2F;
`
export const ChangeWaterBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
width:24px;
height:24px;
// background-color: #000;
background-color: transparent;
cursor: pointer;
`
export const DeleteWaterBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
width:24px;
height:24px;
// background-color: #000;
background-color: transparent;
cursor: pointer;
`

export const DeleteBtnIcon = styled.svg`
width: 16px;
height: 16px;
fill: #EF5050;
`
export const ChangeBtnIcon = styled.svg`
width: 16px;
height: 16px;
fill: #9EBBFF
;
`