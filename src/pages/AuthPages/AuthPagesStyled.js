import styled from 'styled-components';
import { Link } from 'react-router-dom';
import signupBg from '../../assets/images/1xmobile-bg-signup.png';
import signupBgRetina from '../../assets/images/2xmobile-bg-signup.png';
import bottleBg from '../../assets/images/1xmob-bottle-signup.png';
import bottleBgRetina from '../../assets/images/2xmob-bottle-signup.png';
import tabSignupBg from '../../assets/images/1xtab-bg-signup.png';
import tabSignupBgRetina from '../../assets/images/2xtab-bg-signup.png';
import tabBottleBg  from "../../assets/images/1xtab-bottle-signup.png";
import tabBottleBgRetina from "../../assets/images/2xtab-bottle-signup.png";
import deskSignupBg from '../../assets/images/1xdesc-bg-signup.png';
import deskSignupBgRetina from '../../assets/images/2xdesc-bg-signup.png';
import deskBottleBg from '../../assets/images/1xdesk-bottle-signup.png';
import deskBottleBgRetina from '../../assets/images/2xdesk-bottle-signup.png';

export const AuthHeder = styled.h2`
font-weight: 500;
font-size: 26px;
line-height: 1,23;
color: var(--primary-color-black);
margin-bottom: 16px;
@media screen and (min-width: 1440px) {

}
`
export const PageWrapper = styled.div`
width: 100%;
@media screen and (min-width: 1440px) {
   
   padding-top: 148px;
   padding-left: 738px;
}
 `

export const FirstBgImageWrapper = styled.div`
   position: relative;
   width:100vw;
   height: 100vh;
   background-image: url(${signupBg});
   background-repeat: no-repeat;
   background-position: center top 35px;
   background-size: contain;
   
   @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
    background-image: url(${signupBgRetina});
 }
 @media screen and (min-width: 768px) {
  background-image: url(${tabSignupBg});
background-position: right 0px top -97px;
background-size: cover;


  @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
    background-image: url(${tabSignupBgRetina});
    
 }
 @media screen and (min-width: 1440px) {
   background-image: url(${deskSignupBg});
   background-position:  top 0px left 0px;
   background-size: contain;
  
  
   

   @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
      background-image: url(${deskSignupBgRetina});
      
 }
 `

   export const SecondBgImageWrapper = styled.div`
   background-image: url(${bottleBg});
   width: 280px;
   height: 210px;
   bottom: 60px;
   background-position: bottom: 20px right 0px;
   position: absolute;
   background-repeat: no-repeat;
   background-size: contain;
   @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
    background-image: url(${bottleBgRetina});
   }
   @media screen and (min-width: 768px) {
      background-image: url(${tabBottleBg});
      width: 736px;
   height: 548px;
   background-position: bottom 20px right 5px;
z-index: 1;
      @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
         background-image: url(${tabBottleBgRetina});
   }
   @media screen and (min-width: 1440px) {
      background-image: url(${deskBottleBg});
      width: 916px;
      height: 680px;
      background-position: bottom 20px right 60px;
      top: 55px;
      left: 0px;

      @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
         background-image: url(${deskBottleBgRetina});
   }
   
   `
   export const StyledLink = styled(Link)`
z-index: 2;
font-size: 16px;
line-height: 1.25;
color: var(--primary-color-blue);
@media screen and (min-width: 768px){
z-index: 2;
}
@media screen and (min-width: 1440px) {
  
}`