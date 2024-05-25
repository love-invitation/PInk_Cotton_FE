import Image from 'next/image';
import Link from 'next/link';

import { QUERY_KEYS, QUERY_OPTIONS, getQueryClient } from '@/constants';
import { InvitationsResponse } from '@/types/response';

interface FloatingProps {
  params: {
    id: string;
  };
}

const Floating = async ({ params }: FloatingProps) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(QUERY_OPTIONS.ALL_INVITATIONS());
  const data = queryClient.getQueryData<InvitationsResponse>(QUERY_KEYS.ALL_INVITATIONS);
  const { title, details, groomName, brideName } = data?.result || {};
  const { productInfoList } = data?.result || { productInfoList: [] };
  const { imageUrl } =
    productInfoList?.find((productInfo) => productInfo.id === Number(params.id)) || {};

  return (
    <div
      className='flex justify-center items-center text-black_900'
      id='fit-wrap'
    >
      <article className='flex justify-center items-center flex-col'>
        <h3>{title}</h3>
        <Image
          src={imageUrl || ''}
          alt='123'
          width={259}
          height={200}
        />
        <div className='flex'>
          <p>{groomName}</p>
          <p>{brideName}</p>
        </div>
        <p>{details}</p>
        <Link
          href='/wedding/invitations/produce'
          className='bg-pink_500 text-white_100'
        >
          제작하기
        </Link>
      </article>
    </div>
  );
};

export default Floating;
