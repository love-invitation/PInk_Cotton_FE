import { InvitationResponse } from '@/types/response';

const INVITATION_META_DATA = ({ result }: InvitationResponse) => ({
  title: result.thumbnail.title,
  description: result.thumbnail.contents,
  openGraph: {
    title: result.thumbnail.title,
    description: result.thumbnail.contents,
    url: `https://pinkcotton.shop/wedding/invite/${result.tsid}`,
    images: [
      {
        url: result.thumbnail.imageUrl,
        width: 800,
        height: 600,
        alt: `${result.cover.templateId} 청첩장 이미지`,
      },
    ],
  },
  twitter: {
    title: result.thumbnail.title,
    description: result.thumbnail.contents,
    images: [result.thumbnail.imageUrl],
  },
});

export default INVITATION_META_DATA;
