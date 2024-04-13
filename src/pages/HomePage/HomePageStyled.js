import styled from 'styled-components'
import backgroundImage from '../../assets/images/bottleImage.png'

export const HomePageWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 20px 112px 40px;
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const DailyNormaWrapper = styled.div`
  width: 592px;
  padding: 30px 0 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${backgroundImage})
     ;
  background-position: 50% 0;
  background-repeat: no-repeat;
`;

export const MyDailyNorma = styled.div`
  width: 164px;
  height: 76px;
  padding: 8px 20px;
  border-radius: 10px;
  border: 1px solid #ecf2ff;
  box-shadow: 0px 4px 8px 0px RGBA(158, 187, 255, 0.12);
`;

export const MyDailyTracker = styled.div`
  width: 100%;
  height: 90px;
`;

export const TodayMonthWrapper = styled.div`
  background-color: #ecf2ff;
  max-width: 592px;
  height: 680px;
  width: 100%;
  padding: 32px 24px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0px 4px 14px 0px RGBA(64, 123, 255, 0.3);
`;