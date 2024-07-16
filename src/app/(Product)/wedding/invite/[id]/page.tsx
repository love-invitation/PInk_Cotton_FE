import { QUERY_KEYS, QUERY_OPTIONS, getQueryClient } from '@/constants';
import { InvitationResponse } from '@/types/response';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { InviteCover } from './_components';

// 600246308994180233 ID key 값

const InvitePage = async ({ params }: { params: { id: string } }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(QUERY_OPTIONS.INVITATION(params.id));

  const data = queryClient.getQueryData<InvitationResponse>(QUERY_KEYS.INVITATION(params.id));

  if (!data?.result) {
    return null;
  }

  /**
   * TODO
   *
   * 테스트를 위해넣은 bg black & inner white 제거
   */
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className='w-full h-full flex justify-center bg-slate-600'>
        <div className='max-w-[60rem] w-full h-full bg-white'>
          <InviteCover coverData={data.result.cover} />
        </div>
      </section>
    </HydrationBoundary>
  );
};

export default InvitePage;
