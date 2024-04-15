import Calendar from 'components/Calendar/Calendar';
import { TodayWrapper } from './TodayMonthTable.styled';
import Container from 'components/Container/Container';

const TodayMonthTable = () => {
  return (
    <Container>
      <TodayWrapper>
        <div style={{ height: '200px' }}></div>
        <Calendar />
      </TodayWrapper>
    </Container>
  );
};

export default TodayMonthTable;
