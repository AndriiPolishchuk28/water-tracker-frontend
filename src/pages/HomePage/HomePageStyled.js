import styled from 'styled-components';
import backgroundImage from '../../assets/images/bottleImage.png';

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 20px 0 40px;
    display: flex;
    flex-direction: row;
    gap: 32px;
  }
`;

export const DailyNormaWrapper = styled.div`
  width: 100%;
  height: 440px;
  background-image: url(${backgroundImage});
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-size: 280px 208px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    background-size: 518px 386px;
    height: 508px;
    background-position: 50% 0;
  }

  @media screen and (min-width: 1440px) {
    background-size: 738px 548px;
    width: 592px;
    padding: 30px 0 16px 0;
    background-position: 50% 0;
    height: 680px;
    justify-content: space-between;
  }
`;

export const MyDailyNorma = styled.div`
  box-shadow: 0px 4px 8px 0px RGBA(158, 187, 255, 0.12);
  border: 1px solid #ecf2ff;
  width: 164px;
  height: 74px;
  padding: 8px 20px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 164px;
    height: 76px;
  }

  @media screen and (min-width: 1440px) {
    padding: 8px 20px;
    border-radius: 10px;
  }
`;

export const MyDailyTracker = styled.div`
  width: 100%;
  height: 134px;

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 90px;
  }
`;

export const TodayMonthWrapper = styled.div`
  box-shadow: 0px 4px 14px 0px RGBA(64, 123, 255, 0.3);
  border-radius: 10px;
  width: 100%;
  padding: 24px 8px;
  background-color: #ecf2ff;
  height: 836px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    max-height: 688px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 592px;
    max-height: 680px;
  }
`;
