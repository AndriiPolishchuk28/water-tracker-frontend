import { useEffect, useState } from 'react';
import css from './style.module.css';

const Calendar = () => {
  const [todayDate, setTodayDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const monthName = currentDate.toLocaleString('en-US', { month: 'long' });

  const month = currentDate.getMonth();

  const lastDayOfMonth = new Date(currentYear, month + 1, 0).getDate();

  const daysOfMonth = Array.from(
    { length: lastDayOfMonth },
    (_, index) => index + 1
  );

  const goToPreviousMonth = () => {
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1
    );
    setCurrentDate(previousMonth);
    if (currentDate.getMonth() === 0) {
      setCurrentYear(currentYear - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentDate.getMonth() === 11) {
      setCurrentYear(currentYear + 1);
    }
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    if (
      currentDate.getFullYear() < todayDate.getFullYear() ||
      (currentDate.getFullYear() === todayDate.getFullYear() &&
        currentDate.getMonth() < todayDate.getMonth())
    ) {
      setCurrentDate(nextMonth);
    }
  };

  return (
    <div>
      <div className={css.wrapper_btn}>
        <button onClick={goToPreviousMonth}>Previous</button>
        <p>
          {monthName} {currentYear}
        </p>
        <button onClick={goToNextMonth}>Next</button>
      </div>
    </div>
  );
};

export default Calendar;
