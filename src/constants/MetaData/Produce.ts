const PRODUCE_META_DATA = ({ id }: { id: string }) => ({
  title: `청첩장 생성`,
  description: `새로운 청첩장을 만들고 미리보기를 확인하세요. 결제 및 공유 기능을 통해 특별한 날을 더욱 쉽게 준비할 수 있습니다.`,
  openGraph: {
    title: `청첩장 생성`,
    description: `새로운 청첩장을 만들고 미리보기를 확인하세요. 결제 및 공유 기능을 통해 특별한 날을 더욱 쉽게 준비할 수 있습니다.`,
    url: `https://pinkcotton.shop/wedding/produce/${id}`,
    images: [
      {
        url: '/images/weddings-meta.png',
        width: 800,
        height: 600,
        alt: '청첩장 생성 페이지 이미지',
      },
    ],
  },
  twitter: {
    title: `청첩장 생성`,
    description: `새로운 청첩장을 만들고 미리보기를 확인하세요. 결제 및 공유 기능을 통해 특별한 날을 더욱 쉽게 준비할 수 있습니다.`,
    images: ['/images/weddings-meta.png'],
  },
});

export default PRODUCE_META_DATA;
