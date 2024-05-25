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
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <article className='flex flex-col justify-center items-center gap-[2rem] text-black_900 bg-white_100 py-[4rem]'>
        <h3 className='text-[1rem]'>{title}</h3>
        <Image
          src={imageUrl || ''}
          alt='123'
          width={259}
          height={200}
        />
        <div className='flex gap-[1rem] text-[1.6rem]'>
          <p>{groomName}</p>
          <p>·</p>
          <p>{brideName}</p>
        </div>
        <p className='text-[1rem]'>{details}</p>
        <Link
          href='wedding/invitations/produce'
          className='bg-pink_500 text-white_100 w-full py-[1rem] flex justify-center'
        >
          제작하기
        </Link>
      </article>
    </div>
  );
};

export default Floating;
