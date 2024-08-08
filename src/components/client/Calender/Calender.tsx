'use client';

import { useCallback } from 'react';

import { HOLIDAY_2024_LIST, WEEK_LIST } from './Calender.constants';
import { CalenderProps } from './Calender.type';
import { useDateList } from './hooks';

import { twJoin } from 'tailwind-merge';

const Calender = ({ month, week, date }: CalenderProps) => {
  const list = useDateList({ month, week });

  const dateStyle = useCallback(
    ({
      currentDate,
      currentMonth,
      index,
    }: {
      currentMonth: number;
      currentDate: number;
      index: number;
    }) => {
      if (currentMonth !== month) {
        return 'text-gray_600';
      }

      if (currentDate === date) {
        return 'text-white rounded-[50%] bg-pink_300 font-bold';
      }

      if (index % 7 === 0) {
        return 'text-pink_500';
      }

      if (!!HOLIDAY_2024_LIST[currentMonth] && !!HOLIDAY_2024_LIST[currentMonth][currentDate]) {
        return 'text-pink_500';
      }
    },
    [month, date],
  );

  return (
    <ul className='w-full p-[0.6rem] grid grid-cols-calender gap-[0.4rem] select-none'>
      {WEEK_LIST.map(({ day, key }, index) => (
        <li
          key={key}
          className='w-full min-w-[3rem] mb-[1.4rem] flex items-center justify-center h-[4rem]'
        >
          <p
            className={twJoin(
              'flex items-center justify-center w-[3rem] h-[3rem] text-size18',
              index === 0 && 'text-pink_500',
            )}
          >
            {day}
          </p>
        </li>
      ))}

      {list.map(({ month: itemMonth, date: itemDate }, index) => (
        <li
          key={`${itemMonth}${itemDate}`}
          className='w-full min-w-[3rem] flex items-center justify-center h-[4rem]'
        >
          <p
            className={twJoin(
              'flex items-center justify-center w-[3rem] h-[3rem] text-size18',
              dateStyle({ currentMonth: itemMonth, currentDate: itemDate, index }),
            )}
          >
            {itemDate}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Calender;
