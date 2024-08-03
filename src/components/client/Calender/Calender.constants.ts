export const MONTHLY_DATE_LIST: { [key: number]: number } = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

export const WEEK_LIST = [
  { day: 'S', key: 'Sunday' },
  { day: 'M', key: 'Monday' },
  { day: 'T', key: 'Tuesday' },
  { day: 'W', key: 'Wednesday' },
  { day: 'T', key: 'Thursday' },
  { day: 'F', key: 'Friday' },
  { day: 'S', key: 'Saturday' },
];

export const HOLIDAY_2024_LIST: { [key: number]: { [key: number]: boolean } } = {
  1: {
    // 신정
    1: true,
  },

  2: {
    // 2024 설 연휴
    9: true,
    10: true,
    11: true,
    // 대체 휴무
    12: true,
  },

  3: {
    // 삼일절
    1: true,
  },

  4: {
    // 국회의원 선거
    10: true,
  },

  5: {
    // 어린이날 대체 휴무
    6: true,
    // 부처님 오신날
    15: true,
  },

  6: {
    // 현충일
    6: true,
  },

  8: {
    // 광복절
    15: true,
  },

  9: {
    // 2024 추석
    16: true,
    17: true,
    18: true,
  },

  10: {
    // 개천절
    3: true,
    // 한글날
    9: true,
  },

  12: {
    // 성탄절
    25: true,
  },
};
