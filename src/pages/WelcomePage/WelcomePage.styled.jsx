import styled from 'styled-components';
import backgroundMobile from '../../assets/images/main-mobile.png';
import backgroundTablet from '../../assets/images/main-tablet.png';
import backgroundDesktop from '../../assets/images/main-desktop1.png';
import backgroundDecor from '../../assets/images/main-desktop2.png';

export const WelcomeContainer = styled.div`
  width: 320px;
  min-height: calc(100vh - 80px);
  padding: 0 20px 40px 20px;
  margin: 0 auto;
  background-image: url(${backgroundMobile});
  background-size: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 768px;
    padding: 0 32px 50px 32px;
    min-height: calc(100vh - 88px);
    background-image: url(${backgroundTablet});
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    gap: 81px;
    width: 1440px;
    margin: 0 auto;
    padding: 109px 18px 109px 18px;
    min-height: calc(100vh - 80px);
    background-image: url(${backgroundDesktop}), url(${backgroundDecor});
  }
`;
