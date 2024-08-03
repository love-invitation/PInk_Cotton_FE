'use client';

import { WEEK_LIST } from './Calender.constants';
import { CalenderProps } from './Calender.type';
import { useDateList } from './hooks';

import { twJoin } from 'tailwind-merge';

const Calender = ({ month, week, date }: CalenderProps) => {
  const list = useDateList({ month, week });

  return (
    <ul
      className='w-full p-[0.6rem] flex gap-[0.4rem] select-none'
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
      }}
    >
      {WEEK_LIST.map((dayName, index) => (
        <li
          key={dayName}
          className='w-full min-w-[3rem] mb-[1.4rem] flex items-center justify-center h-[4rem]'
        >
          <p
            className={twJoin(
              'flex items-center justify-center w-[3rem] h-[3rem] text-size18',
              index === 0 && 'text-pink_500',
            )}
          >
            {dayName}
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
              itemMonth !== month && 'text-gray_600',
              itemMonth === month &&
                itemDate === date &&
                'text-white rounded-[50%] bg-pink_300 font-bold',
              index % 7 === 0 && itemMonth === month && itemDate !== date && 'text-pink_500',
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
