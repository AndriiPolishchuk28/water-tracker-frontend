import styled from 'styled-components';
import backgroundMobile from '../../assets/images/main-mobile.png';
import backgroundTablet from '../../assets/images/main-tablet.png';
import backgroundDesktop from '../../assets/images/main-desktop1.png';
import backgroundDecor from '../../assets/images/main-desktop2.png';

export const BackgroundImage = styled.div`
  background-image: url(${backgroundMobile});
  background-size: cover;
  background-size: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;
  margin: 0 auto;
  padding: 24px 0px 40px 0px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 40px 0px 50px 0px;
    min-height: calc(100vh - 88px);
    background-image: url(${backgroundTablet});
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
  }

  @media screen and (min-width: 1440px) {
    /* display: flex;
    flex-direction: row;
    gap: 81px;
    align-items: flex-end;
    padding: 49px 18px 109px 18px;
    min-height: calc(100vh - 80px);
    background-image: url(${backgroundDesktop}), url(${backgroundDecor});
  }
`;

export const DesktopCover = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 81px;
  }
`;
