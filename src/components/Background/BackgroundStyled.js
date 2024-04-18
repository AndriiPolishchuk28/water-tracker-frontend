import styled from 'styled-components';

import signupBg from '../../assets/images/1xmobile-bg-signup.png';
import signupBgRetina from '../../assets/images/2xmobile-bg-signup.png';
import bottleBg from '../../assets/images/1xmob-bottle-signup.png';
import bottleBgRetina from '../../assets/images/2xmob-bottle-signup.png';
import tabSignupBg from '../../assets/images/1xtab-bg-signup.png';
import tabSignupBgRetina from '../../assets/images/2xtab-bg-signup.png';
import tabBottleBg from '../../assets/images/1xtab-bottle-signup.png';
import tabBottleBgRetina from '../../assets/images/2xtab-bottle-signup.png';
import deskSignupBg from '../../assets/images/1xdesc-bg-signup.png';
import deskSignupBgRetina from '../../assets/images/2xdesc-bg-signup.png';
import deskBottleBg from '../../assets/images/1xdesk-bottle-signup.png';
import deskBottleBgRetina from '../../assets/images/2xdesk-bottle-signup.png';

export const FirstBgImageWrapper = styled.div`
&:before {
   content: '';
   position: fixed;
   min-width:100%;
   min-height: 100%;
   top: 0px;
   left: 0px;
   display: block;
   overflow: hidden;
   z-index: -1;
   background-image: url(${signupBg});
   background-repeat: no-repeat;
   background-position: center top 115px;
   background-size: contain;
   @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
    background-image: url(${signupBgRetina});
 }
}
   
 @media screen and (min-width: 768px) {
   &:before {
  background-image: url(${tabSignupBg});
background-position: left 17px top 16px;
// background-size: cover;

  @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
    background-image: url(${tabSignupBgRetina});
  }
 }
 @media screen and (min-width: 1440px) {
   &:before {
   background-image: url(${deskSignupBg});
   background-position:  top 50px right 20px;
   

   @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
      background-image: url(${deskSignupBgRetina});
   } 
 }
 `;

export const SecondBgImageWrapper = styled.div`
&:before {
  content: '';
  position: fixed;
  background-image: url(${bottleBg});
  z-index: -1;
  display: block;
  min-width: 100%;
  min-height: 100%;
 top: 0px;
  left: 0px;
  margin-bottom: 20px;
  background-position: top 455px left 15px;
  background-repeat: no-repeat;
  background-size: contain;
  @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
   background-image: url(${bottleBgRetina});
}
}
   @media screen and (min-width: 768px) {
      &:before {
      background-image: url(${tabBottleBg});
   background-position: center;
   min-width: 85%;
   min-height: 85%;
   top: 48%;
  left: 50%;
  transform: translate(-43%, -35%);
  margin-bottom: 16px;
      @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
         background-image: url(${tabBottleBgRetina});
      }
   }
   @media screen and (min-width: 1440px) {
      &:before {
      background-image: url(${deskBottleBg});
      margin-bottom: 40px;
      transform: translate(-79%, -55%);
      min-width: 73%;
   min-height: 73%;
 
      @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
         background-image: url(${deskBottleBgRetina});
   }
}
   `;
