import { QUERY_KEYS, QUERY_OPTIONS, getQueryClient } from '@/constants';
import { InvitationResponse } from '@/types/response';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { InviteArticle, InviteCover } from './_components';

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
   * 개발 환경을 위한 shadow 추후 제거
   */
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className='w-full h-full flex justify-center bg-gray_900'>
        <div className='max-w-[45rem] w-full h-full overflow-scroll bg-white scrollbar-hide'>
          <InviteCover coverData={data.result.cover} />
          <InviteArticle article={data.result.article} />
        </div>
      </section>
    </HydrationBoundary>
  );
};

export default InvitePage;
