import { WeddingTemplateResponse } from '@/types/response';

const WEDDING_META_DATA = ({ result }: WeddingTemplateResponse) => ({
  title: result.title,
  description: `특별한 날을 위한 청첩장. ${result.details}`,
  openGraph: {
    title: result.title,
    description: `특별한 날을 위한 청첩장. ${result.details}`,
    url: `https://pinkcotton.shop/wedding/invitation/${result.productInfo.id}`,
    images: [
      {
        url: result.productInfo.imageUrl,
        width: 800,
        height: 600,
        alt: `${result.productInfo.templateName} 청첩장 이미지`,
      },
    ],
  },
  twitter: {
    title: result.title,
    description: `특별한 날을 위한 청첩장. ${result.details}`,
    images: [result.productInfo.imageUrl],
  },
});

export default WEDDING_META_DATA;
