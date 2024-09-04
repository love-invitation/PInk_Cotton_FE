const COMMON_META_DATA = {
  title: { template: 'PinkCotton | %s', default: 'PinkCotton' },
  icons: {
    icon: '/images/favicon.png',
  },
  generator: 'Next.js',
  applicationName: 'PinkCotton',
  keywords: [
    '핑크코튼',
    'PinkCotton',
    '청첩장 제작',
    '결혼식 초대장',
    '웨딩',
    '맞춤형 청첩장',
    '모바일 청첩장',
    '결혼식 디자인',
    '청첩장 공유',
    '결혼',
    '온라인 초대장',
    '디지털 청첩장',
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: { template: 'PinkCotton | $s', default: 'PinkCotton' },
    siteName: 'PinkCotton',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PinkCotton | $s',
  },
};

export default COMMON_META_DATA;
