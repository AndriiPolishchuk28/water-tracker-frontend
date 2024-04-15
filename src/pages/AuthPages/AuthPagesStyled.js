import styled from 'styled-components';
import { Link } from 'react-router-dom';
import signupBg from '../../assets/images/1xmobile-bg-signup.png';
import signupBgRetina from '../../assets/images/2xmobile-bg-signup.png';
import bottleBg from '../../assets/images/1xmob-bottle-signup.png';
import bottleBgRetina from '../../assets/images/2xmob-bottle-signup.png';


export const AuthHeder = styled.h2`
font-weight: 500;
font-size: 26px;
line-height: 1,23;
color: var(--primary-color-black);
margin-bottom: 16px;
`
export const StyledLink = styled(Link)`
z-index: 9999;
line-height: 1.25;
color: var(--primary-color-blue);
`
export const FirstBgImageWrapper = styled.div`
   background-color: var(--primary-color-white);
   width:100vw;
   height: 100vh;
   background-image: url(${signupBg});
   background-repeat: no-repeat;
   background-position: bottom 0px right 0px;
   background-size: cover;
   @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
    background-image: url(${signupBgRetina});
 }
 }
   `

   export const SecondBgImageWrapper = styled.div`
   background-image: url(${bottleBg});
   width: 280px;
   height: 210px;
   position: absolute;
   bottom: 20px;
   right: 20px;
   background-repeat: no-repeat;
   background-size: contain;
   @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
    background-image: url(${bottleBgRetina});
   `