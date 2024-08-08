import { useMemo } from 'react';

import { UseConvertInviteDate } from './useConvertInviteDate.type';

const useConvertInviteDate = ({ calenderData }: UseConvertInviteDate) => {
  return useMemo(() => {
    const newDate = new Date(calenderData);

    const hours = newDate.getHours();
    const period = hours >= 12 ? '오후' : '오전';
    const convertHours = hours % 12 || 12;

    return {
      year: newDate.getFullYear(),
      month: (newDate.getMonth() + 1).toString().padStart(2, '0'),
      day: newDate.getDate().toString().padStart(2, '0'),
      week: newDate.getDay(),
      period,
      hours: convertHours.toString().toString().padStart(2, '0'),
      minute: newDate.getMinutes().toString().padStart(2, '0'),
    };
  }, [calenderData]);
};

export default useConvertInviteDate;
