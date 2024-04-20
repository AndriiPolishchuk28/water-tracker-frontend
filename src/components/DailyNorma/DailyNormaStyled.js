import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';

export const DailyNormaWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
gap: 12px;
`
export const DailyNormaHeader = styled.h4`
font-weight: 500;
font-size: 18px;
line-height: 1.33;
color: $primary-color-black;
text-align: center;
white-space: nowrap;
`



export const WaterRateWrapper = styled.div`
display:flex;
gap: 12px;
`
export const WaterRateParagraph = styled.p`
font-weight: 700;
font-size: 22px;
line-height: 1;
color: var(--primary-color-blue);
@media screen and (min-width: 768px) {
    font-size: 24px;
}
@media screen and (min-width: 1440px) {
  
}
`
export const DailyNormaButton = styled.button`
font-size: 16px;
line-height: 1.25;
color: #8baeff;
background-color: transparent;
border: none;
cursor: pointer;
&:hover,
  &:focus {
    color: var(--secondary-color-orange);
  }
}
`
export const DailyNormaDialog = styled(Dialog)`
width: 100%;
height: 100%;`