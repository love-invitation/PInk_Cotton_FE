import { useMemo } from 'react';

import { MONTHLY_DATE_LIST } from '../../Calender.constants';
import { UseDateListProps } from './useDateList.type';

const useDateList = ({ week, month }: UseDateListProps) => {
  return useMemo(() => {
    const days = new Array(week).fill(null).map((_, index) => {
      const prevMonth = month - 1;

      return { month: prevMonth, date: MONTHLY_DATE_LIST[prevMonth] - (week - (index + 1)) };
    });

    for (let i = 1; i <= MONTHLY_DATE_LIST[month]; i += 1) {
      days.push({ month, date: i });
    }

    const emptyDays = 7 - (days.length % 7);
    for (let next = 1; next <= emptyDays; next += 1) {
      days.push({ month: month + 1, date: next });
    }

    return days;
  }, [month, week]);
};

export default useDateList;
