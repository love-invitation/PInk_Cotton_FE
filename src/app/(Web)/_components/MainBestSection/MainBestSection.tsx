import Link from 'next/link';

import { QUERY_KEYS, QUERY_OPTIONS, getQueryClient } from '@/constants';
import { BestInvitationsResponse } from '@/types/response/Invitations';

const MainBestSection = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(QUERY_OPTIONS.BEST_INVITATIONS());

  const data = queryClient.getQueryData<BestInvitationsResponse>(QUERY_KEYS.BEST_INVITATIONS);

  if (!data) {
    return null;
  }

  return (
    <section className='w-full min-h-[75rem] bg-gray_900 shadow-shadow_500'>
      <article className=''>
        <div>
          <span>
            <h3>BEST</h3>
            <p>다양한 디자인의 청첩장, 마음껏 선택하세요.</p>
          </span>
          <Link href='/wedding/invitations'>More </Link>
        </div>
      </article>
    </section>
  );
};

export default MainBestSection;
