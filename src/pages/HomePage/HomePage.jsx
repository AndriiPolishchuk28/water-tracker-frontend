import Container from 'components/Container/Container';
import { WaterTracker } from 'components/WaterTracker/WaterTracker';
import {
  HomePageWrapper,
  DailyNormaWrapper,
  MyDailyNorma,
  MyDailyTracker,
  TodayMonthWrapper,
} from './HomePageStyled';
import Calendar from 'components/Calendar/Calendar';
import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import Background from 'components/Background/Background';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/water/selectors';
import Loader from '../../components/Loader/Loader';
import TodayList from 'components/TodayList/TodayList';

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <Background />
      <Container>
        <HomePageWrapper>
          <DailyNormaWrapper>
            <MyDailyNorma>
              <DailyNorma />
            </MyDailyNorma>
            <MyDailyTracker>
              <WaterTracker></WaterTracker>
            </MyDailyTracker>
          </DailyNormaWrapper>
          <TodayMonthWrapper>
            <TodayList />
            <Calendar />
          </TodayMonthWrapper>
        </HomePageWrapper>
      </Container>
      {isLoading && <Loader />}
    </>
  );
};

export default HomePage;
