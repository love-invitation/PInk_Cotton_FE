import Link from 'next/link';

import tailwindConfig from '@/../tailwind.config';
import { ArrowRightIcon } from '@/components/server';
import { QUERY_KEYS, QUERY_OPTIONS, getQueryClient } from '@/constants';
import { BestInvitationsResponse } from '@/types/response/Invitations';

import resolveConfig from 'tailwindcss/resolveConfig';

const MainBestSection = async () => {
  const { theme } = resolveConfig(tailwindConfig);
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(QUERY_OPTIONS.BEST_INVITATIONS());

  const data = queryClient.getQueryData<BestInvitationsResponse>(QUERY_KEYS.BEST_INVITATIONS);

  if (!data) {
    return null;
  }

  return (
    <section className='w-full min-h-[75rem] bg-gray_900 shadow-shadow_500 flex flex-col items-center justify-center'>
      <header className='w-[80%] flex items-center select-none'>
        <span className='flex flex-col grow-[1]'>
          <h3 className='text-size30 font-semiBold'>BEST</h3>
          <p className='text-size16 text-gray_400'>다양한 디자인의 청첩장, 마음껏 선택하세요.</p>
        </span>
        <Link
          href='/wedding/invitations'
          className='main_page_550:flex hidden items-center gap-[1rem] text-size20 text-pink_500 underline'
        >
          More
          <ArrowRightIcon
            fill={theme.colors.pink_500}
            size={15}
          />
        </Link>
      </header>

      <article className='max-w-[117rem]'>
        <div className='w-[50rem]' />
      </article>
    </section>
  );
};

export default MainBestSection;
